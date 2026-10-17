import * as z from 'zod';
import { APP_NAME, canonicalSnapshot, emptyProfile, profileRequestSchema, profileSchema, READING_NOTICE, PROFILE_NOTICE, sha256, snapshotHash, syncRequestSchema } from '../../shared/schema';
import { ApiError, requestJson } from './errors';
import { booleanValue, NocoDB, oneRow, readReading, readingFields, type Fetcher } from './nocodb';
import { clientMetadataSchema } from '../../shared/client-metadata';
import {version as APP_VERSION} from '../../package.json';

const authFailure=()=>new ApiError(401,'UNAUTHENTICATED','Reconnect using an active reader credential.');
function safeProfile(fields:Record<string,unknown>){
  const base:Record<string,unknown>={...emptyProfile()};
  for(const key of Object.keys(base)){const v=fields[key];if(v!==undefined&&v!==null&&v!=='')base[key]=v;}
  return profileSchema.parse(base);
}
function json(data:unknown,status=200):Response{return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'}});}

// fetcher injection allows actual route/adapter tests without a live credential.
export async function handle(request:Request,env:Env,fetcher?:Fetcher):Promise<Response>{
  const requestId=crypto.randomUUID();
  try{
    const path=new URL(request.url).pathname;
    if(path==='/health'&&request.method==='GET')return json({application:APP_NAME,version:APP_VERSION,configured:Boolean(env.NOCODB_API_TOKEN&&env.READERS_TABLE_ID&&env.CONTENT_TABLE_ID&&env.READING_TABLE_ID),mode:'manual-upload'});
    if(!['/v1/me','/v1/reading/sync'].includes(path))throw new ApiError(404,'NOT_FOUND','Endpoint not found.');
    if(!env.NOCODB_API_TOKEN||!env.READERS_TABLE_ID||!env.CONTENT_TABLE_ID||!env.READING_TABLE_ID)throw new ApiError(503,'NOT_CONFIGURED','Cloud capture is awaiting database configuration. Local reading remains available.');
    const db=new NocoDB(env,fetcher);
    // Keep account lookup behind one fixed table; callers cannot select a table.
    const bearer=request.headers.get('authorization')??'';
    const token=/^Bearer ([A-Za-z0-9_-]{43})$/.exec(bearer)?.[1];
    if(!token)throw authFailure();
    const row=oneRow(await db.find(env.READERS_TABLE_ID,{sync_token_hash:await sha256(token)}),authFailure());
    if(row.fields.account_status!=='ACTIVE')throw authFailure();
    const identity=z.uuid().safeParse(row.fields.reader_id);
    if(!identity.success)throw new ApiError(502,'BACKEND_ERROR','Invalid stored reader identity.');
    const readerId=identity.data;
    if(path==='/v1/me'&&request.method==='GET')return json({reader_id:readerId,profile:safeProfile(row.fields),cloud_sync_enabled:booleanValue(row.fields.cloud_sync_enabled),profile_consent_version:row.fields.profile_consent_version??null,reading_consent_version:row.fields.reading_consent_version??null,required_notices:{profile_version:env.PROFILE_NOTICE_VERSION,reading_version:env.READING_NOTICE_VERSION,profile_text:PROFILE_NOTICE,reading_text:READING_NOTICE},request_id:requestId});
    if(path==='/v1/me'&&request.method==='PATCH'){
      const payload=profileRequestSchema.parse(await requestJson(request,16*1024));
      if(payload.profile_notice_version!==env.PROFILE_NOTICE_VERSION||(payload.cloud_sync_enabled&&payload.reading_notice_version!==env.READING_NOTICE_VERSION))throw new ApiError(428,'CONSENT_REQUIRED','Review and accept the current privacy notice.');
      const now=new Date().toISOString();
      const fields:Record<string,unknown>={...payload.profile,cloud_sync_enabled:payload.cloud_sync_enabled,profile_consent_version:env.PROFILE_NOTICE_VERSION,profile_consent_at:row.fields.profile_consent_version===env.PROFILE_NOTICE_VERSION&&row.fields.profile_consent_at?row.fields.profile_consent_at:now,updated_at:now,schema_version:1};
      if(payload.client_metadata)Object.assign(fields,payload.client_metadata);
      if(payload.cloud_sync_enabled){fields.reading_consent_version=env.READING_NOTICE_VERSION;fields.reading_consent_at=row.fields.reading_consent_version===env.READING_NOTICE_VERSION&&row.fields.reading_consent_at&&booleanValue(row.fields.cloud_sync_enabled)?row.fields.reading_consent_at:now;}
      await db.update(env.READERS_TABLE_ID,row.id,fields);
      const saved=await db.get(env.READERS_TABLE_ID,row.id);
      if(JSON.stringify(safeProfile(saved.fields))!==JSON.stringify(payload.profile)||booleanValue(saved.fields.cloud_sync_enabled)!==payload.cloud_sync_enabled)throw new ApiError(502,'BACKEND_ERROR','The profile save could not be verified.');
      if(payload.client_metadata){
        const metadata=clientMetadataSchema.safeParse(Object.fromEntries(Object.keys(payload.client_metadata).map(key=>[key,saved.fields[key]??null])));
        if(!metadata.success||JSON.stringify(metadata.data)!==JSON.stringify(payload.client_metadata))throw new ApiError(502,'BACKEND_ERROR','The client metadata save could not be verified.');
      }
      return json({reader_id:readerId,profile_saved:true,cloud_sync_enabled:payload.cloud_sync_enabled,updated_at:now,request_id:requestId});
    }
    if(path==='/v1/reading/sync'&&request.method==='POST'){
      const payload=syncRequestSchema.parse(await requestJson(request,128*1024));
      if(!booleanValue(row.fields.cloud_sync_enabled))throw new ApiError(403,'UPLOAD_DISABLED','Cloud reading uploads are disabled.');
      if(row.fields.profile_consent_version!==env.PROFILE_NOTICE_VERSION||!row.fields.profile_consent_at||row.fields.reading_consent_version!==env.READING_NOTICE_VERSION||!row.fields.reading_consent_at)throw new ApiError(428,'CONSENT_REQUIRED','Review the current profile and reading notices.');
      const content=oneRow(await db.find(env.CONTENT_TABLE_ID,{content_id:payload.content_id}),new ApiError(404,'CONTENT_NOT_FOUND','This item is not in the approved catalogue.'));
      if(!booleanValue(content.fields.is_active))throw new ApiError(422,'VALIDATION_FAILED','This catalogue item is inactive.');
      const existing=await db.find(env.READING_TABLE_ID,{reader_id:readerId,content_id:payload.content_id});
      if(existing.length>1)throw new ApiError(409,'DUPLICATE_KEY','Duplicate reading records require administrator repair.');
      const hash=await snapshotHash(payload.content_id,payload.values);const now=new Date().toISOString();
      const saved=await db.upsertReading({...readingFields(payload.values),reader_id:readerId,content_id:payload.content_id,client_updated_at:payload.client_updated_at,synced_at:now,snapshot_hash:hash,schema_version:1});
      if(saved.fields.reader_id!==readerId||saved.fields.content_id!==payload.content_id||saved.fields.snapshot_hash!==hash||canonicalSnapshot(payload.content_id,readReading(saved.fields))!==canonicalSnapshot(payload.content_id,payload.values))throw new ApiError(502,'BACKEND_ERROR','The reading save could not be verified.');
      return json({content_id:payload.content_id,status:'saved',snapshot_hash:hash,synced_at:now,request_id:requestId});
    }
    throw new ApiError(405,'METHOD_NOT_ALLOWED','Method not allowed.');
  }catch(error){
    if(error instanceof z.ZodError)return json({error:{code:'VALIDATION_FAILED',message:'Please correct the highlighted fields.',fields:error.issues.map(issue=>({field:issue.path.join('.'),reason:issue.message}))},request_id:requestId},422);
    const known=error instanceof ApiError?error:new ApiError(500,'INTERNAL_ERROR','The request could not be completed.');
    console.warn(JSON.stringify({request_id:requestId,code:known.code,status:known.status}));
    return json({error:{code:known.code,message:known.message},request_id:requestId},known.status);
  }
}
export default {fetch(request,env){return handle(request,env);}} satisfies ExportedHandler<Env>;

import test from 'node:test';
import assert from 'node:assert/strict';
import {handle} from '../worker/src/index';
import {defaults,emptyProfile,sha256} from '../shared/schema';
import type {Fetcher,NocoRow} from '../worker/src/nocodb';

const token='A'.repeat(43);
const readerId='8b73ca2e-44a7-4d6b-b5b9-1f3f2b8ea201';
const env:Env={NOCODB_URL:'https://app.nocodb.com',NOCODB_BASE_ID:'pwxyh62oc4wdhbg',READERS_TABLE_ID:'m0jtd86do2fo2vv',CONTENT_TABLE_ID:'m22h8q52rgo45i8',READING_TABLE_ID:'mmphejly9cd41bk',PROFILE_NOTICE_VERSION:'profile-v2',READING_NOTICE_VERSION:'reading-v1',NOCODB_API_TOKEN:'test-service-token'};
async function backend(){
  const tables:Record<string,NocoRow[]>={
    [env.READERS_TABLE_ID]:[{id:1,fields:{...emptyProfile(),reader_id:readerId,nickname:'Synthetic reader',sync_token_hash:await sha256(token),account_status:'ACTIVE',cloud_sync_enabled:true,profile_consent_version:'profile-v2',profile_consent_at:'2026-10-17T00:00:00Z',reading_consent_version:'reading-v1',reading_consent_at:'2026-10-17T00:00:00Z'}}],
    [env.CONTENT_TABLE_ID]:[{id:1,fields:{content_id:'TBP-154-C00',is_active:true}}],
    [env.READING_TABLE_ID]:[]
  };
  let omitRating=false,omitMetadata=false;const calls:Array<{url:string;method:string;body:unknown}>=[];
  const fetcher:Fetcher=async(input,init)=>{
    assert.equal(new Headers(init?.headers).get('xc-token'),env.NOCODB_API_TOKEN);
    assert.equal(init?.redirect,'manual','authenticated database requests must never follow redirects');
    const url=new URL(input);const tableId=url.pathname.split('/')[5]!;const rows=tables[tableId];assert.ok(rows,'only configured tables may be used');
    const tail=url.pathname.split('/records')[1]??'';const method=init?.method??'GET';const body=typeof init?.body==='string'?JSON.parse(init.body):null;
    calls.push({url:input,method,body});
    if(method==='GET'&&tail===''){
      const filters=[...(url.searchParams.get('where')??'').matchAll(/\(([^,]+),eq,([^)]*)\)/g)];
      return Response.json({records:rows.filter(row=>filters.every(f=>row.fields[f[1]!]===f[2]))});
    }
    if(method==='GET')return Response.json(rows.find(r=>String(r.id)===tail.slice(1)));
    if(method==='PATCH'){
      for(const record of body){const row:NocoRow|undefined=rows.find(r=>r.id===record.id);assert.ok(row);Object.assign(row.fields,record.fields);if(omitMetadata)delete row.fields.Client_version;}
      return Response.json({records:body.map((r:{id:number})=>({id:r.id}))});
    }
    if(method==='POST'&&tail==='/upsert'){
      assert.deepEqual(body.fieldsToMergeOn,['reader_id','content_id']);assert.equal(body.records.length,1);
      const fields=body.records[0].fields;
      let row=rows.find(r=>r.fields.reader_id===fields.reader_id&&r.fields.content_id===fields.content_id);
      if(!row){row={id:rows.length+1,fields:{}};rows.push(row);}
      Object.assign(row.fields,fields);if(omitRating)delete row.fields.my_rating;
      return Response.json({records:[{id:row.id,status:'updated'}]});
    }
    throw new Error(`Unexpected mock operation ${method} ${tail}`);
  };
  return {tables,fetcher,calls,dropRating:()=>{omitRating=true;},dropMetadata:()=>{omitMetadata=true;}};
}
function req(path:string,method='GET',body?:unknown,credential=token){return new Request('https://worker.example'+path,{method,headers:{Authorization:`Bearer ${credential}`,'content-type':'application/json'},body:body===undefined?undefined:JSON.stringify(body)});}
function payload(){return {schema_version:1,content_id:'TBP-154-C00',client_updated_at:'2026-10-17T08:00:00Z',values:{...defaults(),my_rating:5,my_buddhist_level:0,reading_reflection:'中文\n第二行 🌸',my_keywords:['空性','引號"','逗,號']}};}

test('GET profile contains demographics and never credential fields',async()=>{
  const b=await backend();b.tables[env.READERS_TABLE_ID]![0]!.fields.birth_year=1975;b.tables[env.READERS_TABLE_ID]![0]!.fields.organisation='讀書會';
  const response=await handle(req('/v1/me'),env,b.fetcher);assert.equal(response.status,200);const text=await response.text();const body=JSON.parse(text);assert.equal(body.profile.birth_year,1975);assert.equal(body.profile.organisation,'讀書會');assert.equal(text.includes('sync_token_hash'),false);assert.equal(text.includes('test-service-token'),false);
});
test('profile edits and clearing are verified without changing identity',async()=>{
  const b=await backend();const profile={...emptyProfile(),nickname:'Pilot',birth_year:1980,birth_month:8,organisation:'Sample group'};
  const response=await handle(req('/v1/me','PATCH',{schema_version:1,profile,profile_notice_version:'profile-v2',cloud_sync_enabled:true,reading_notice_version:'reading-v1'}),env,b.fetcher);assert.equal(response.status,200);assert.equal(b.tables[env.READERS_TABLE_ID]![0]!.fields.birth_month,8);assert.equal(b.tables[env.READERS_TABLE_ID]![0]!.fields.reader_id,readerId);
  const clear=await handle(req('/v1/me','PATCH',{schema_version:1,profile:{...profile,birth_year:null,birth_month:null,organisation:null},profile_notice_version:'profile-v2',cloud_sync_enabled:false,reading_notice_version:null}),env,b.fetcher);assert.equal(clear.status,200);assert.equal(b.tables[env.READERS_TABLE_ID]![0]!.fields.organisation,null);
});
test('native upsert creates, updates, clears and safely resends one snapshot',async()=>{
  const b=await backend();const p=payload();
  for(let i=0;i<3;i++){const response=await handle(req('/v1/reading/sync','POST',p),env,b.fetcher);assert.equal(response.status,200,await response.clone().text());}
  assert.equal(b.tables[env.READING_TABLE_ID]!.length,1);const fields=b.tables[env.READING_TABLE_ID]![0]!.fields;assert.equal(fields.reading_count,0);assert.equal(fields.planned_reading,false);assert.equal(fields.my_buddhist_level,0);assert.equal(fields.my_keywords,JSON.stringify(p.values.my_keywords));
  const cleared={...p,values:{...defaults()}};const response=await handle(req('/v1/reading/sync','POST',cleared),env,b.fetcher);assert.equal(response.status,200);assert.equal(fields.my_rating,null);assert.equal(fields.reading_reflection,null);assert.equal(fields.my_keywords,'[]');assert.equal(b.tables[env.READING_TABLE_ID]!.length,1);
});
test('forged reader identity and invalid field values never write',async()=>{
  const b=await backend();for(const p of [{...payload(),reader_id:'another-reader'},{...payload(),values:{...payload().values,my_rating:6}},{...payload(),content_id:'bad,(id)'}]){const r=await handle(req('/v1/reading/sync','POST',p),env,b.fetcher);assert.equal(r.status,422);}
  assert.equal(b.tables[env.READING_TABLE_ID]!.length,0);
});
test('disabled permission, stale consent and revoked token block writes',async()=>{
  const b=await backend();const account=b.tables[env.READERS_TABLE_ID]![0]!.fields;
  account.cloud_sync_enabled=false;assert.equal((await handle(req('/v1/reading/sync','POST',payload()),env,b.fetcher)).status,403);
  account.cloud_sync_enabled=true;account.reading_consent_version='old';assert.equal((await handle(req('/v1/reading/sync','POST',payload()),env,b.fetcher)).status,428);
  account.account_status='DISABLED';assert.equal((await handle(req('/v1/me'),env,b.fetcher)).status,401);assert.equal(b.tables[env.READING_TABLE_ID]!.length,0);
});
test('missing credential, unknown content and ambiguous keys fail closed',async()=>{
  const b=await backend();assert.equal((await handle(req('/v1/me','GET',undefined,'B'.repeat(43)),env,b.fetcher)).status,401);
  assert.equal((await handle(req('/v1/reading/sync','POST',{...payload(),content_id:'UNKNOWN'}),env,b.fetcher)).status,404);
  b.tables[env.CONTENT_TABLE_ID]!.push({id:2,fields:{...b.tables[env.CONTENT_TABLE_ID]![0]!.fields}});
  assert.equal((await handle(req('/v1/reading/sync','POST',payload()),env,b.fetcher)).status,409);
});
test('read-back checks values rather than accepting the echoed digest',async()=>{
  const b=await backend();b.dropRating();const response=await handle(req('/v1/reading/sync','POST',payload()),env,b.fetcher);assert.equal(response.status,502);
});
test('oversized input and backend timeouts remain explicit errors',async()=>{
  const b=await backend();assert.equal((await handle(req('/v1/reading/sync','POST',{...payload(),extra:'x'.repeat(140000)}),env,b.fetcher)).status,413);
  const response=await handle(req('/v1/me'),env,async()=>{throw new DOMException('Timeout','TimeoutError');});assert.equal(response.status,504);
});

const metadata={device_type:'desktop',Client_version:'0.1.3',os:'Windows',user_agent:'Obsidian/Electron synthetic test'};
function profilePayload(){return {schema_version:1,profile:{...emptyProfile(),nickname:'Synthetic metadata reader'},profile_notice_version:'profile-v2',cloud_sync_enabled:false,reading_notice_version:null};}
test('profile uploads save and replace all four device fields on the authenticated reader',async()=>{
  const b=await backend();const account=b.tables[env.READERS_TABLE_ID]![0]!;
  for(const value of [metadata,{...metadata,Client_version:'0.1.4',os:'macOS',user_agent:null}]){
    const response=await handle(req('/v1/me','PATCH',{...profilePayload(),client_metadata:value}),env,b.fetcher);
    assert.equal(response.status,200,await response.clone().text());
    for(const [key,expected] of Object.entries(value))assert.equal(account.fields[key],expected);
  }
  assert.equal(account.fields.reader_id,readerId);assert.equal(account.fields.sync_token_hash,await sha256(token));
  assert.equal(b.tables[env.READING_TABLE_ID]!.length,0);
});
test('profile updates without metadata preserve previous device fields and GET never writes',async()=>{
  const b=await backend();const account=b.tables[env.READERS_TABLE_ID]![0]!;Object.assign(account.fields,metadata);
  assert.equal((await handle(req('/v1/me'),env,b.fetcher)).status,200);assert.ok(b.calls.every(call=>call.method==='GET'));
  assert.equal((await handle(req('/v1/me','PATCH',profilePayload()),env,b.fetcher)).status,200);
  for(const [key,value] of Object.entries(metadata))assert.equal(account.fields[key],value);
});
test('old consent, invalid metadata and attempts to override identity never update records',async()=>{
  const b=await backend();
  const stale={...profilePayload(),profile_notice_version:'profile-v1',client_metadata:metadata};
  assert.equal((await handle(req('/v1/me','PATCH',stale),env,b.fetcher)).status,428);
  for(const invalid of [{...metadata,user_agent:'x'.repeat(2049)},{...metadata,device_type:'invalid'},{...metadata,reader_id:'forged'},{...metadata,sync_token_hash:'forged'}]){
    assert.equal((await handle(req('/v1/me','PATCH',{...profilePayload(),client_metadata:invalid}),env,b.fetcher)).status,422);
  }
  assert.ok(b.calls.every(call=>call.method==='GET'));
});
test('metadata read-back must match before a profile save succeeds',async()=>{
  const b=await backend();b.dropMetadata();
  const response=await handle(req('/v1/me','PATCH',{...profilePayload(),client_metadata:metadata}),env,b.fetcher);
  assert.equal(response.status,502);assert.equal((await response.json() as {error:{code:string}}).error.code,'BACKEND_ERROR');
});

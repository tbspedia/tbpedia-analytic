import {DEFAULT_API} from '../shared/api';
import {randomBytes,randomUUID,createHash} from 'node:crypto';
import {mkdir,writeFile} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';

const args=process.argv.slice(2);
const nickname=args[args.indexOf('--nickname')+1];
if(!args.includes('--nickname')||!nickname?.trim()||nickname.length>100)throw new Error('Provide --nickname "Reader nickname"');
const outputIndex=args.indexOf('--out');const output=resolve(outputIndex>=0?args[outputIndex+1]??'private/reader.json':'private/reader.json');
const token=randomBytes(32).toString('base64url');const readerId=randomUUID();const now=new Date().toISOString();
const fields={reader_id:readerId,nickname:nickname.trim(),sync_token_hash:createHash('sha256').update(token).digest('hex'),account_status:'ACTIVE',cloud_sync_enabled:false,sex:'PREFER_NOT_TO_SAY',created_at:now,updated_at:now,schema_version:1};
await mkdir(dirname(output),{recursive:true});
// Never log the credential or accept service tokens in command-line arguments.
await writeFile(output,JSON.stringify({application:'tbpedia-analytics',api_url:DEFAULT_API,reader_id:readerId,nickname,reader_token:token,instructions:'Enter reader_token in the Obsidian plugin, test connection, complete profile and accept notices. Cloud reading upload is disabled until you explicitly enable it.'},null,2),{flag:'wx',mode:0o600});
if(args.includes('--prepare-only')){
  const recordFile=output.replace(/\.json$/,'')+'.record.json';await writeFile(recordFile,JSON.stringify({fields},null,2),{flag:'wx',mode:0o600});
  console.log(JSON.stringify({reader_id:readerId,credential_file:output,record_file:recordFile,created_remotely:false}));
}else{
  const serviceToken=process.env.NOCODB_API_TOKEN;const base=process.env.NOCODB_BASE_ID;const table=process.env.READERS_TABLE_ID;
  if(!serviceToken||!base||!table)throw new Error('Set NOCODB_API_TOKEN, NOCODB_BASE_ID and READERS_TABLE_ID, or use --prepare-only. Credential file was prepared but enrollment did not run.');
  const response=await fetch(`${process.env.NOCODB_URL??'https://app.nocodb.com'}/api/v3/data/${base}/${table}/records`,{method:'POST',headers:{'xc-token':serviceToken,'content-type':'application/json'},body:JSON.stringify([{fields}]),redirect:'error',signal:AbortSignal.timeout(30000)});
  if(!response.ok)throw new Error(`Enrollment failed with HTTP ${response.status}. Credential is not enrolled.`);
  await response.body?.cancel();console.log(JSON.stringify({reader_id:readerId,credential_file:output,created_remotely:true}));
}

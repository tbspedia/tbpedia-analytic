import {DEFAULT_API} from '../shared/api';
import assert from 'node:assert/strict';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {randomBytes,randomUUID,createHash} from 'node:crypto';
import {defaults,emptyProfile} from '../shared/schema';

const service=JSON.parse(await readFile('private/worker-secrets.json','utf8')) as {NOCODB_API_TOKEN:string};
const base='pwxyh62oc4wdhbg',readers='m0jtd86do2fo2vv',readings='mmphejly9cd41bk';
const api=DEFAULT_API;
const token=randomBytes(32).toString('base64url'),readerId=randomUUID();
const checks:Array<{name:string;status:string}>=[];let createdReaderId:string|number|undefined;
const createdReadingIds:Array<string|number>=[];
async function noco(table:string,method='GET',body?:unknown,where?:string){
  const url=new URL(`https://app.nocodb.com/api/v3/data/${base}/${table}/records`);if(where)url.searchParams.set('where',where);
  const response=await fetch(url,{method,headers:{'xc-token':service.NOCODB_API_TOKEN,'content-type':'application/json'},body:body===undefined?undefined:JSON.stringify(body),redirect:'error',signal:AbortSignal.timeout(30000)});
  if(!response.ok){await response.body?.cancel();throw new Error(`NocoDB ${method} failed with HTTP ${response.status}`);}
  return await response.json() as {records:Array<{id:string|number;fields:Record<string,unknown>}>};
}
async function gateway(path:string,method='GET',body?:unknown,credential:string|undefined=token){
  const response=await fetch(api+path,{method,headers:{...(credential?{authorization:`Bearer ${credential}`}:{ }),'content-type':'application/json'},body:body===undefined?undefined:JSON.stringify(body),redirect:'error',signal:AbortSignal.timeout(40000)});
  const data=await response.json() as Record<string,unknown>;
  return {status:response.status,data};
}
function pass(name:string){checks.push({name,status:'passed'});console.log(`PASS ${name}`);}
try{
  const health=await gateway('/health');assert.equal(health.status,200);assert.equal(health.data.configured,true);pass('Worker health and database bindings');
  const anonymous=await gateway('/v1/me','GET',undefined,'');assert.equal(anonymous.status,401);pass('Anonymous access rejected');
  const now=new Date().toISOString();
  const created=await noco(readers,'POST',[{fields:{reader_id:readerId,nickname:'[TEST] Worker smoke',sync_token_hash:createHash('sha256').update(token).digest('hex'),account_status:'ACTIVE',cloud_sync_enabled:false,sex:'PREFER_NOT_TO_SAY',created_at:now,updated_at:now,schema_version:1}}]);
  createdReaderId=created.records[0]?.id;assert.ok(createdReaderId);
  const me=await gateway('/v1/me');assert.equal(me.status,200,JSON.stringify(me.data));assert.equal(me.data.reader_id,readerId);assert.equal(JSON.stringify(me.data).includes('sync_token_hash'),false);pass('Authenticated profile projection');
  const profile={...emptyProfile(),nickname:'[TEST] Worker smoke',birth_year:1984,birth_month:8,sex:'PREFER_NOT_TO_SAY' as const,country_code:'MY',reader_type:['GENERAL','PRACTITIONER'] as const,organisation:'Synthetic test group'};
  const profileBody={schema_version:1,profile,profile_notice_version:'profile-v2',cloud_sync_enabled:true,reading_notice_version:'reading-v1'};
  const savedProfile=await gateway('/v1/me','PATCH',profileBody);assert.equal(savedProfile.status,200,JSON.stringify(savedProfile.data));pass('Demographic profile create/update and consent');
  const multiProfile=await gateway('/v1/me');assert.equal(multiProfile.status,200);assert.deepEqual((multiProfile.data.profile as Record<string,unknown>).reader_type,profile.reader_type);pass('Multiple profile reader types survive database read-back');
  const values={...defaults(),reading_status:'COMPLETED' as const,reading_depth:'BASIC' as const,reading_count:2,completed_date:'2026-10-17',reading_reflection:'合成測試\n第二行 🌸',my_rating:5,my_buddhist_level:0,my_keywords:['空性','字,句','引號"'],my_reader_types:['BUDDHIST_STUDENT' as const],my_subtopics:['測試分類']};
  const snapshot={schema_version:1,content_id:'TBP-154-C00',client_updated_at:now,values};
  for(let i=0;i<3;i++){const saved=await gateway('/v1/reading/sync','POST',snapshot);assert.equal(saved.status,200,JSON.stringify(saved.data));assert.equal(saved.data.status,'saved');}
  const stored=await noco(readings,'GET',undefined,`(reader_id,eq,${readerId})`);assert.equal(stored.records.length,1);createdReadingIds.push(stored.records[0]!.id);assert.equal(stored.records[0]!.fields.reading_count,2);assert.equal(stored.records[0]!.fields.my_buddhist_level,0);assert.equal(stored.records[0]!.fields.my_keywords,JSON.stringify(values.my_keywords));pass('Native v3 upsert, repeated uploads and Unicode/list round-trip');
  const cleared=await gateway('/v1/reading/sync','POST',{...snapshot,values:defaults()});assert.equal(cleared.status,200,JSON.stringify(cleared.data));
  const readClear=await noco(readings,'GET',undefined,`(reader_id,eq,${readerId})`);assert.equal(readClear.records.length,1);const f=readClear.records[0]!.fields;assert.equal(f.my_rating,null);assert.equal(f.completed_date,null);assert.equal(f.reading_reflection,null);assert.equal(f.my_keywords,'[]');assert.equal(f.planned_reading,false);assert.equal(f.reading_count,0);pass('Clearing values and preserving false/zero');
  const forged=await gateway('/v1/reading/sync','POST',{...snapshot,reader_id:'forged'});assert.equal(forged.status,422);pass('Forged identity rejected');
  const disabled=await gateway('/v1/me','PATCH',{...profileBody,profile:{...profile,birth_year:null,birth_month:null,organisation:null,reader_type:null},cloud_sync_enabled:false,reading_notice_version:null});assert.equal(disabled.status,200);const denied=await gateway('/v1/reading/sync','POST',snapshot);assert.equal(denied.status,403);pass('Profile clearing and permission revocation');
  const clearedProfile=await gateway('/v1/me');assert.equal(clearedProfile.status,200);assert.equal((clearedProfile.data.profile as Record<string,unknown>).reader_type,null);pass('Profile reader types can be cleared');
}finally{
  // Delete only this run's clearly synthetic rows, after proving the identity.
  const remaining=createdReaderId===undefined?{records:[]}:await noco(readings,'GET',undefined,`(reader_id,eq,${readerId})`);
  for(const row of remaining.records){assert.equal(row.fields.reader_id,readerId);if(!createdReadingIds.includes(row.id))createdReadingIds.push(row.id);}
  if(createdReadingIds.length)await noco(readings,'DELETE',createdReadingIds.map(id=>({id})));
  if(createdReaderId!==undefined){const account=await noco(readers,'GET',undefined,`(reader_id,eq,${readerId})`);assert.equal(account.records.length,1);assert.equal(account.records[0]!.id,createdReaderId);await noco(readers,'DELETE',[{id:createdReaderId}]);}
  await mkdir('reports',{recursive:true});await writeFile('reports/live-smoke.json',JSON.stringify({tested_at:new Date().toISOString(),api,checks,synthetic_rows_cleaned:true,real_reader_data_uploaded:false},null,2));
}
console.log(`Completed ${checks.length} live checks; synthetic rows removed.`);

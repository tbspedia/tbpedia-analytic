import {completeProfile} from './fixtures/profile';
import test from 'node:test';
import assert from 'node:assert/strict';
import {handle} from '../worker/src/index';
import {defaults,emptyProfile,sha256,snapshotHash} from '../shared/schema';
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
  let omitRating=false,omitMetadata=false,omitRelease=false;const calls:Array<{url:string;method:string;body:unknown}>=[];
  const fetcher:Fetcher=async(input,init)=>{
    assert.equal(new Headers(init?.headers).get('xc-token'),env.NOCODB_API_TOKEN);
    assert.equal(init?.redirect,'manual','authenticated database requests must never follow redirects');
    if(input.includes('/api/v3/meta/')){
      const body=typeof init?.body==='string'?JSON.parse(init.body):null;
      calls.push({url:input,method:init?.method??'GET',body});
      if(init?.method==='GET')return Response.json({fields:['my_keywords','my_subtopics','my_reader_types'].map(title=>({id:title,type:'MultiSelect',title,options:{choices:[]}}))});
      if(init?.method==='POST')return Response.json({});
      throw new Error('Unexpected metadata operation');
    }
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
    if(method==='POST'&&tail===''&&tableId===env.READERS_TABLE_ID){
      for(const record of body)rows.push({id:rows.length+1,fields:{...record.fields}});
      return Response.json({records:[{id:rows.at(-1)!.id}]});
    }
    if(method==='POST'&&tail==='/upsert'){
      assert.deepEqual(body.fieldsToMergeOn,['reader_id','content_id']);assert.equal(body.records.length,1);
      const fields=body.records[0].fields;
      let row=rows.find(r=>r.fields.reader_id===fields.reader_id&&r.fields.content_id===fields.content_id);
      if(!row){row={id:rows.length+1,fields:{}};rows.push(row);}
      Object.assign(row.fields,fields);if(omitRating)delete row.fields.my_rating;if(omitRelease)delete row.fields.releaseId;
      return Response.json({records:[{id:row.id,status:'updated'}]});
    }
    throw new Error(`Unexpected mock operation ${method} ${tail}`);
  };
  return {tables,fetcher,calls,dropRating:()=>{omitRating=true;},dropMetadata:()=>{omitMetadata=true;},dropRelease:()=>{omitRelease=true;}};
}
function req(path:string,method='GET',body?:unknown,credential=token){return new Request('https://worker.example'+path,{method,headers:{Authorization:`Bearer ${credential}`,'content-type':'application/json'},body:body===undefined?undefined:JSON.stringify(body)});}
function payload(){return {schema_version:1,content_id:'TBP-154-C00',client_updated_at:'2026-10-17T08:00:00Z',values:{...defaults(),my_rating:5,my_buddhist_level:0,reading_reflection:'中文\n第二行 🌸',my_keywords:['空性','引號"','逗，號']}};}

test('multi-select uploads reject English commas before any database write',async()=>{
  for(const key of ['my_keywords','my_subtopics'] as const){
    const b=await backend();const p=payload();p.values[key]=['包含,逗號'];
    const response=await handle(req('/v1/reading/sync','POST',p),env,b.fetcher);
    assert.equal(response.status,422);
    assert.match((await response.json() as {error:{message:string}}).error.message,/cannot contain commas/);
    assert.ok(b.calls.every(call=>call.method==='GET'));
    assert.equal(b.tables[env.READING_TABLE_ID]!.length,0);
  }
});

test('connection test works without credentials and never reads or writes reader data',async()=>{
  const b=await backend();
  const response=await handle(new Request('https://worker.example/health'),env,b.fetcher);
  assert.equal(response.status,200);
  assert.equal((await response.json() as {configured:boolean}).configured,true);
  assert.equal(b.calls.length,0);
});

test('first consented profile upload enrolls a reader and retries retain identity',async()=>{
  const b=await backend();const credential='C'.repeat(43);
  const profile={schema_version:1,profile:{...completeProfile(),nickname:'New reader'},profile_notice_version:'profile-v2',cloud_sync_enabled:true,reading_notice_version:'reading-v1'};
  for(let i=0;i<2;i++)assert.equal((await handle(req('/v1/me','PATCH',profile,credential),env,b.fetcher)).status,200);
  assert.equal(b.tables[env.READERS_TABLE_ID]!.length,2);
  const me=await handle(req('/v1/me','GET',undefined,credential),env,b.fetcher);
  assert.equal(me.status,200);
  const value=await me.json() as {reader_id:string;cloud_sync_enabled:boolean};
  assert.notEqual(value.reader_id,readerId);assert.equal(value.cloud_sync_enabled,true);
  assert.equal((await handle(req('/v1/reading/sync','POST',payload(),credential),env,b.fetcher)).status,200);
  assert.equal(b.tables[env.READING_TABLE_ID]![0]!.fields.reader_id,value.reader_id);
});

test('enrollment requires valid profile consent and cannot reactivate revoked readers',async()=>{
  const b=await backend();const credential='C'.repeat(43);
  const profile={schema_version:1,profile:{...completeProfile(),nickname:'New reader'},profile_notice_version:'old',cloud_sync_enabled:false,reading_notice_version:null};
  assert.equal((await handle(req('/v1/me','PATCH',profile,credential),env,b.fetcher)).status,428);
  assert.equal((await handle(req('/v1/me','PATCH',{...profile,profile:{...emptyProfile()}},credential),env,b.fetcher)).status,422);
  assert.equal((await handle(req('/v1/me','GET',undefined,credential),env,b.fetcher)).status,401);
  b.tables[env.READERS_TABLE_ID]![0]!.fields.account_status='DISABLED';
  assert.equal((await handle(req('/v1/me','PATCH',{...profile,profile_notice_version:'profile-v2'}),env,b.fetcher)).status,401);
  assert.equal(b.tables[env.READERS_TABLE_ID]!.length,1);
  assert.equal(b.calls.filter(call=>call.method!=='GET').length,0);
});

test('profile reader types migrate single values and round-trip required multiple selections',async()=>{
  const b=await backend();
  const row=b.tables[env.READERS_TABLE_ID]![0]!;
  row.fields.reader_type='PRACTITIONER';
  const legacy=await handle(req('/v1/me'),env,b.fetcher);
  assert.equal(legacy.status,200);
  assert.deepEqual((await legacy.json() as {profile:{reader_type:unknown}}).profile.reader_type,['PRACTITIONER']);
  for(const [input,expected]of [[['PRACTITIONER','GENERAL','GENERAL'],['GENERAL','PRACTITIONER']],['NEW_REFUGE',['NEW_REFUGE']]] as const){
    const profile={...completeProfile(),nickname:'Pilot',reader_type:input};
    const saved=await handle(req('/v1/me','PATCH',{schema_version:1,profile,profile_notice_version:'profile-v2',cloud_sync_enabled:false,reading_notice_version:null}),env,b.fetcher);
    assert.equal(saved.status,200);
    const response=await handle(req('/v1/me'),env,b.fetcher);
    assert.deepEqual((await response.json() as {profile:{reader_type:unknown}}).profile.reader_type,expected);
  }
  const writes=b.calls.filter(call=>call.method==='PATCH').length;
  const invalid=await handle(req('/v1/me','PATCH',{schema_version:1,profile:{...completeProfile(),nickname:'Pilot',reader_type:['INVALID']},profile_notice_version:'profile-v2',cloud_sync_enabled:false,reading_notice_version:null}),env,b.fetcher);
  assert.equal(invalid.status,422);
  assert.equal(b.calls.filter(call=>call.method==='PATCH').length,writes);
});

test('GET profile contains demographics and never credential fields',async()=>{
  const b=await backend();b.tables[env.READERS_TABLE_ID]![0]!.fields.birth_year=1975;b.tables[env.READERS_TABLE_ID]![0]!.fields.organisation='讀書會';
  const response=await handle(req('/v1/me'),env,b.fetcher);assert.equal(response.status,200);const text=await response.text();const body=JSON.parse(text);assert.equal(body.profile.birth_year,1975);assert.equal(body.profile.organisation,'讀書會');assert.equal(text.includes('sync_token_hash'),false);assert.equal(text.includes('test-service-token'),false);
});
test('complete profile edits preserve identity and required fields cannot be cleared',async()=>{
  const b=await backend();const profile={...completeProfile(),nickname:'Pilot',birth_year:1980,birth_month:8,organisation:'Sample group'};
  const response=await handle(req('/v1/me','PATCH',{schema_version:1,profile,profile_notice_version:'profile-v2',cloud_sync_enabled:true,reading_notice_version:'reading-v1'}),env,b.fetcher);assert.equal(response.status,200);assert.equal(b.tables[env.READERS_TABLE_ID]![0]!.fields.birth_month,8);assert.equal(b.tables[env.READERS_TABLE_ID]![0]!.fields.reader_id,readerId);
  const clear=await handle(req('/v1/me','PATCH',{schema_version:1,profile:{...profile,birth_year:null,birth_month:null,organisation:null},profile_notice_version:'profile-v2',cloud_sync_enabled:false,reading_notice_version:null}),env,b.fetcher);assert.equal(clear.status,422);assert.equal(b.tables[env.READERS_TABLE_ID]![0]!.fields.organisation,'Sample group');
});
test('native upsert creates, updates, clears and safely resends one snapshot',async()=>{
  const b=await backend();const p=payload();
  for(let i=0;i<3;i++){const response=await handle(req('/v1/reading/sync','POST',p),env,b.fetcher);assert.equal(response.status,200,await response.clone().text());}
  assert.equal(b.tables[env.READING_TABLE_ID]!.length,1);const fields=b.tables[env.READING_TABLE_ID]![0]!.fields;assert.equal(fields.reading_count,0);assert.equal(fields.planned_reading,false);assert.equal(fields.my_buddhist_level,0);assert.deepEqual(fields.my_keywords,p.values.my_keywords);
  const cleared={...p,values:{...defaults()}};const response=await handle(req('/v1/reading/sync','POST',cleared),env,b.fetcher);assert.equal(response.status,200);assert.equal(fields.my_rating,null);assert.equal(fields.reading_reflection,null);assert.deepEqual(fields.my_keywords,[]);assert.equal(b.tables[env.READING_TABLE_ID]!.length,1);
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
function profilePayload(){return {schema_version:1,profile:{...completeProfile(),nickname:'Synthetic metadata reader'},profile_notice_version:'profile-v2',cloud_sync_enabled:false,reading_notice_version:null};}
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

const updater={seriesId:'reading',editionId:'standard',tbpedia:'V1',releaseId:'installed-release-1',languageCode:'zh-TW',title:'真佛百科閱讀系列標準版'};
test('reading sync ingests updater context and a release change updates the same reader/content record',async()=>{
  const b=await backend();
  for(const releaseId of ['installed-release-1','installed-release-1','installed-release-2']){
    const metadata={...updater,releaseId};const request={...payload(),updater_metadata:metadata};
    const response=await handle(req('/v1/reading/sync','POST',request),env,b.fetcher);assert.equal(response.status,200,await response.clone().text());
    const body=await response.json() as {snapshot_hash:string};assert.equal(body.snapshot_hash,await snapshotHash(request.content_id,request.values,metadata));
    assert.equal(b.tables[env.READING_TABLE_ID]!.length,1);const row=b.tables[env.READING_TABLE_ID]![0]!;
    for(const [key,value] of Object.entries(metadata))assert.equal(row.fields[key],value);
    assert.equal(row.fields.reader_id,readerId);assert.equal(row.fields.reading_count,0);
  }
});
test('legacy reading requests remain valid and never retain a stale updater attribution',async()=>{
  const b=await backend();
  assert.equal((await handle(req('/v1/reading/sync','POST',{...payload(),updater_metadata:updater}),env,b.fetcher)).status,200);
  const response=await handle(req('/v1/reading/sync','POST',payload()),env,b.fetcher);assert.equal(response.status,200);
  const row=b.tables[env.READING_TABLE_ID]![0]!;for(const key of Object.keys(updater))assert.equal(row.fields[key],null);
  assert.equal((await response.json() as {snapshot_hash:string}).snapshot_hash,await snapshotHash(payload().content_id,payload().values));
});
test('invalid updater metadata and injected reader identity never reach a reading write',async()=>{
  const b=await backend();
  for(const metadata of [{...updater,seriesId:123},{...updater,releaseId:'x'.repeat(257)},{...updater,languageCode:123},{...updater,title:'x'.repeat(1001)},{...updater,reader_id:'forged'},{...updater,snapshot_hash:'forged'}]){
    assert.equal((await handle(req('/v1/reading/sync','POST',{...payload(),updater_metadata:metadata}),env,b.fetcher)).status,422);
  }
  assert.equal(b.tables[env.READING_TABLE_ID]!.length,0);assert.ok(b.calls.every(call=>call.method==='GET'));
});
test('reading sync checks saved updater fields instead of trusting an echoed hash',async()=>{
  const b=await backend();b.dropRelease();
  const response=await handle(req('/v1/reading/sync','POST',{...payload(),updater_metadata:updater}),env,b.fetcher);
  assert.equal(response.status,502);assert.equal((await response.json() as {error:{code:string}}).error.code,'BACKEND_ERROR');
});

 test('incomplete profiles and empty reader types never enroll or update a cloud reader',async()=>{
  for(const field of ['nickname','email','birth_year','birth_month','country_code','reader_type','organisation','sex']){
    for(const credential of [token,'C'.repeat(43)]){
      const b=await backend();const profile:Record<string,unknown>={...completeProfile()};profile[field]=null;
      const response=await handle(req('/v1/me','PATCH',{...profilePayload(),profile},credential),env,b.fetcher);
      assert.equal(response.status,422,field);assert.equal(b.calls.filter(call=>call.method!=='GET').length,0,field);
    }
  }
  const b=await backend();const response=await handle(req('/v1/me','PATCH',{...profilePayload(),profile:{...completeProfile(),reader_type:[]}}),env,b.fetcher);
  assert.equal(response.status,422);assert.equal(b.calls.filter(call=>call.method!=='GET').length,0);
 });

test('Reader ID alone retrieves the profile without rotating legacy credentials or writing data',async()=>{
 const b=await backend();const originalHash=b.tables[env.READERS_TABLE_ID]![0]!.fields.sync_token_hash;
 const response=await handle(req('/v1/me','GET',undefined,readerId),env,b.fetcher);assert.equal(response.status,200);
 const data=await response.json() as {reader_id:string;profile:{nickname:string}};assert.equal(data.reader_id,readerId);assert.equal(data.profile.nickname,'Synthetic reader');
 assert.equal(b.calls.filter(call=>call.method!=='GET').length,0);assert.equal(b.tables[env.READERS_TABLE_ID]![0]!.fields.sync_token_hash,originalHash);
 assert.equal((await handle(req('/v1/me'),env,b.fetcher)).status,200);
});
test('Reader ID authentication supports profile saves and reading sync under the original reader identity',async()=>{
 const b=await backend();assert.equal((await handle(req('/v1/me','PATCH',profilePayload(),readerId),env,b.fetcher)).status,200);
 assert.equal(b.tables[env.READERS_TABLE_ID]!.length,1);
 const row=b.tables[env.READERS_TABLE_ID]![0]!.fields;row.cloud_sync_enabled=true;
 const response=await handle(req('/v1/reading/sync','POST',payload(),readerId),env,b.fetcher);assert.equal(response.status,200);
 assert.equal(b.tables[env.READING_TABLE_ID]![0]!.fields.reader_id,readerId);
});
test('unknown, malformed or disabled Reader IDs never enroll or change readers',async()=>{
 for(const id of ['not-an-id','650e8400-e29b-41d4-a716-446655440000',readerId]){
  const b=await backend();if(id===readerId)b.tables[env.READERS_TABLE_ID]![0]!.fields.account_status='DISABLED';
  for(const [path,method,body] of [['/v1/me','GET',undefined],['/v1/me','PATCH',profilePayload()],['/v1/reading/sync','POST',payload()]] as const){
   const response=await handle(req(path,method,body,id),env,b.fetcher);assert.equal(response.status,401);
  }
  assert.equal(b.calls.filter(call=>call.method!=='GET').length,0);assert.equal(b.tables[env.READERS_TABLE_ID]!.length,1);
 }
});

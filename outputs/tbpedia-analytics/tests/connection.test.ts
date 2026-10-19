import {completeProfile} from './fixtures/profile';
import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {runInNewContext} from 'node:vm';
import type TbpediaAnalytics from '../plugin/main';
import {PROFILE_NOTICE_VERSION,READING_NOTICE_VERSION} from '../shared/schema';

const bundle=await build({entryPoints:['plugin/main.ts'],bundle:true,write:false,platform:'node',format:'cjs',external:['obsidian']});
function plugin(){
  const requests:Array<{url:string;headers:Record<string,string>}>=[];
  const notices:string[]=[];
  const saved:Array<{stored_token:string;remember_token:boolean}>=[];
  let configured=true;
  const module={exports:{}};
  class Empty{}
  runInNewContext(bundle.outputFiles![0]!.text,{
    module,exports:module.exports,URL,crypto,btoa,structuredClone,console,
    require:(name:string)=>{
      assert.equal(name,'obsidian');
      return {Plugin:class{async saveData(data:{stored_token:string;remember_token:boolean}){saved.push(data);}},PluginSettingTab:Empty,Modal:Empty,Setting:Empty,Notice:class{constructor(text:string){notices.push(text);}},Platform:{isDesktop:true},
        requestUrl:async(request:{url:string;headers:Record<string,string>})=>{requests.push(request);return {status:200,json:{application:'tbpedia-analytics',configured}};}};
    }
  });
  const Constructor=(module.exports as {default:typeof TbpediaAnalytics}).default;
  const instance=new Constructor({} as never,{} as never);
  return {instance,requests,saved,notices,unconfigured:()=>{configured=false;}};
}

test('Test connection sends no credential and does not create or save a reader',async()=>{
  const p=plugin();
  assert.equal(p.instance.data.profile_notice_version,PROFILE_NOTICE_VERSION);
  assert.equal(p.instance.data.reading_notice_version,READING_NOTICE_VERSION);
  assert.equal(p.instance.data.local_upload_enabled,true);
  await p.instance.testConnection();
  assert.equal(p.requests.length,1);
  assert.ok(p.requests[0]!.url.endsWith('/health'));
  assert.equal(p.requests[0]!.headers.Authorization,undefined);
  assert.equal(p.saved.length,0);assert.equal(p.instance.token,'');assert.equal(p.instance.data.reader_id,null);
  p.unconfigured();await assert.rejects(p.instance.testConnection(),{code:'NOT_CONFIGURED'});
});

test('automatic identity is persisted before upload and reused after a failed response',async()=>{
  const p=plugin();p.instance.data.profile=completeProfile();p.instance.data.profile_notice_version='profile-v2';
  p.instance.manifest={version:'0.1.10'} as never;
  const tokens:string[]=[];
  p.instance.api=async()=>{
    assert.equal(p.saved.at(-1)!.stored_token,p.instance.token);
    assert.equal(p.saved.at(-1)!.remember_token,true);
    tokens.push(p.instance.token);throw new Error('Connection interrupted');
  };
  const first=p.instance.uploadProfile();
  assert.equal(p.instance.uploadProfile(),first,'double clicks share one upload');
  await assert.rejects(first);
  await assert.rejects(p.instance.uploadProfile());
  assert.match(tokens[0]!,/^[A-Za-z0-9_-]{43}$/);assert.equal(tokens[0],tokens[1]);
});

test('missing consent does not generate a credential or send a profile',async()=>{
  const p=plugin();p.instance.data.profile.nickname='Reader';p.instance.data.profile_notice_version=null;
  await assert.rejects(p.instance.uploadProfile());
  assert.equal(p.instance.token,'');assert.equal(p.saved.length,0);assert.equal(p.requests.length,0);
});

 test('successful connection test greets the locally entered nickname without enrollment',async()=>{
  const p=plugin();p.instance.data.profile.nickname='Lotus';await p.instance.testConnection();
  assert.equal(p.notices.at(-1),'Hi Lotus Connected successfully.');
  assert.equal(p.saved.length,0);assert.equal(p.requests.length,1);
 });
 test('authenticated connection greets the verified cloud nickname',async()=>{
  const p=plugin();p.instance.data.reader_id='550e8400-e29b-41d4-a716-446655440000';p.instance.token='a'.repeat(43);
  p.instance.data.profile.nickname='Local name';
  p.instance.api=async(path)=>path==='/health'?{application:'tbpedia-analytics',configured:true}:{reader_id:p.instance.data.reader_id,profile:{...p.instance.data.profile,nickname:'Cloud name'},cloud_sync_enabled:true,profile_consent_version:PROFILE_NOTICE_VERSION,reading_consent_version:READING_NOTICE_VERSION,required_notices:{profile_version:PROFILE_NOTICE_VERSION,reading_version:READING_NOTICE_VERSION,profile_text:'Profile',reading_text:'Reading'}};
  await p.instance.testConnection();assert.equal(p.notices.at(-1),'Hi Cloud name Connected successfully.');
 });
function cloudProfile(reader_id='550e8400-e29b-41d4-a716-446655440000'){
  return {reader_id,profile:completeProfile(),cloud_sync_enabled:true,profile_consent_version:PROFILE_NOTICE_VERSION,reading_consent_version:READING_NOTICE_VERSION,required_notices:{profile_version:PROFILE_NOTICE_VERSION,reading_version:READING_NOTICE_VERSION,profile_text:'Profile',reading_text:'Reading'}};
}
test('existing reader recovery verifies ID and credential before restoring the local profile',async()=>{
  const p=plugin();const me=cloudProfile();const credential='r'.repeat(43);
  p.instance.api=async(path,method,body,authenticated,providedCredential)=>{
    assert.equal(path,'/v1/me');assert.equal(method,'GET');assert.equal(body,undefined);assert.equal(authenticated,true);assert.equal(providedCredential,credential);
    assert.equal(p.instance.token,'');assert.equal(p.instance.data.reader_id,null);return me;
  };
  await p.instance.restoreExistingReader(me.reader_id,credential);
  assert.equal(p.instance.data.reader_id,me.reader_id);assert.equal(JSON.stringify(p.instance.data.profile),JSON.stringify(me.profile));
  assert.equal(p.instance.token,credential);assert.equal(p.saved.at(-1)?.stored_token,credential);assert.equal(p.instance.data.remember_token,true);
});
test('invalid, mismatched or unauthenticated recovery leaves the local reader unchanged',async()=>{
  const p=plugin();const before=JSON.stringify(p.instance.data);let calls=0;
  p.instance.api=async()=>{calls++;return cloudProfile();};
  await assert.rejects(p.instance.restoreExistingReader('invalid','r'.repeat(43)));
  await assert.rejects(p.instance.restoreExistingReader(cloudProfile().reader_id,''));assert.equal(calls,0);
  await assert.rejects(p.instance.restoreExistingReader('650e8400-e29b-41d4-a716-446655440000','r'.repeat(43)),/does not match/);
  p.instance.api=async()=>{throw new Error('Unauthenticated');};await assert.rejects(p.instance.restoreExistingReader(cloudProfile().reader_id,'r'.repeat(43)));
  assert.equal(JSON.stringify(p.instance.data),before);assert.equal(p.instance.token,'');assert.equal(p.saved.length,0);
});
test('recovery rolls back in-memory identity if saving fails',async()=>{
  const p=plugin();const before=JSON.stringify(p.instance.data);p.instance.api=async()=>cloudProfile();
  p.instance.saveData=async()=>{throw new Error('Disk full');};
  await assert.rejects(p.instance.restoreExistingReader(cloudProfile().reader_id,'r'.repeat(43)),/Disk full/);
  assert.equal(JSON.stringify(p.instance.data),before);assert.equal(p.instance.token,'');assert.equal(p.instance.me,null);
});
test('incomplete profile upload does not generate a credential or make a cloud request',async()=>{
  const p=plugin();let calls=0;p.instance.api=async()=>{calls++;return {};};
  for(const field of ['email','birth_year','birth_month','country_code','organisation','reader_type'] as const){
    p.instance.data.profile={...completeProfile(),[field]:null};await assert.rejects(p.instance.uploadProfile());
  }
  assert.equal(calls,0);assert.equal(p.instance.token,'');assert.equal(p.saved.length,0);
});
test('recovery prevents a simultaneous new-reader enrollment and does not replace a linked reader',async()=>{
  const p=plugin();let resolve!:(value:unknown)=>void;p.instance.api=()=>new Promise(r=>{resolve=r;});
  const recovery=p.instance.restoreExistingReader(cloudProfile().reader_id,'r'.repeat(43));
  await assert.rejects(p.instance.uploadProfile(),/operation is in progress/);
  resolve(cloudProfile());await recovery;
  await assert.rejects(p.instance.restoreExistingReader(cloudProfile().reader_id,'r'.repeat(43)),/already linked/);
});

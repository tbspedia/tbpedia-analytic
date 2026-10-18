import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {runInNewContext} from 'node:vm';
import type TbpediaAnalytics from '../plugin/main';

const bundle=await build({entryPoints:['plugin/main.ts'],bundle:true,write:false,platform:'node',format:'cjs',external:['obsidian']});
function plugin(){
  const requests:Array<{url:string;headers:Record<string,string>}>=[];
  const saved:Array<{stored_token:string;remember_token:boolean}>=[];
  let configured=true;
  const module={exports:{}};
  class Empty{}
  runInNewContext(bundle.outputFiles![0]!.text,{
    module,exports:module.exports,URL,crypto,btoa,structuredClone,console,
    require:(name:string)=>{
      assert.equal(name,'obsidian');
      return {Plugin:class{async saveData(data:{stored_token:string;remember_token:boolean}){saved.push(data);}},PluginSettingTab:Empty,Modal:Empty,Setting:Empty,Notice:Empty,Platform:{isDesktop:true},
        requestUrl:async(request:{url:string;headers:Record<string,string>})=>{requests.push(request);return {status:200,json:{application:'tbpedia-analytics',configured}};}};
    }
  });
  const Constructor=(module.exports as {default:typeof TbpediaAnalytics}).default;
  const instance=new Constructor({} as never,{} as never);
  return {instance,requests,saved,unconfigured:()=>{configured=false;}};
}

test('Test connection sends no credential and does not create or save a reader',async()=>{
  const p=plugin();await p.instance.testConnection();
  assert.equal(p.requests.length,1);
  assert.ok(p.requests[0]!.url.endsWith('/health'));
  assert.equal(p.requests[0]!.headers.Authorization,undefined);
  assert.equal(p.saved.length,0);assert.equal(p.instance.token,'');assert.equal(p.instance.data.reader_id,null);
  p.unconfigured();await assert.rejects(p.instance.testConnection(),{code:'NOT_CONFIGURED'});
});

test('automatic identity is persisted before upload and reused after a failed response',async()=>{
  const p=plugin();p.instance.data.profile.nickname='Reader';p.instance.data.profile_notice_version='profile-v2';
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
  const p=plugin();p.instance.data.profile.nickname='Reader';
  await assert.rejects(p.instance.uploadProfile());
  assert.equal(p.instance.token,'');assert.equal(p.saved.length,0);assert.equal(p.requests.length,0);
});

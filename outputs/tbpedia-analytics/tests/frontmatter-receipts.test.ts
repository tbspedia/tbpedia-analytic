import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {runInNewContext} from 'node:vm';
import type TbpediaAnalytics from '../plugin/main';
import {defaults,snapshotHash} from '../shared/schema';
import {toFrontmatter,type Frontmatter} from '../shared/frontmatter';
import {readUpdaterMetadata} from '../shared/updater-metadata';

const bundle=await build({entryPoints:['plugin/main.ts'],bundle:true,write:false,platform:'node',format:'cjs',external:['obsidian']});
const id='TBP-154-C00',savedAt='2026-10-18T01:00:00.000Z',syncedAt='2026-10-18T02:00:00.000Z';
function setup(){
  const saved:unknown[]=[];const module={exports:{}};
  class Empty{open(){}}
  runInNewContext(bundle.outputFiles![0]!.text,{module,exports:module.exports,URL,crypto,btoa,structuredClone,console,TextEncoder,
    require:()=>({Plugin:class{async saveData(data:unknown){saved.push(data);}},PluginSettingTab:Empty,Modal:Empty,Setting:Empty,Notice:Empty})});
  const Constructor=(module.exports as {default:typeof TbpediaAnalytics}).default;
  const instance=new Constructor({} as never,{} as never);
  const file={path:'articles/test.md',basename:'test'} as never;
  const fm:Frontmatter={...toFrontmatter(defaults()),tbpedia_content_id:id,tbpedia_reading_updated_at:savedAt};
  instance.app={fileManager:{processFrontMatter:async(_file:unknown,change:(fm:Frontmatter)=>void)=>{const next=structuredClone(fm);change(next);Object.assign(fm,next);}}} as never;
  instance.scan=async()=>[{file,fm:structuredClone(fm),id}];
  instance.readNote=async()=>structuredClone(fm);
  instance.metadataForSync=async()=>readUpdaterMetadata(instance.data);
  instance.data.folders=[];
  return {instance,fm,file,saved};
}
test('legacy receipts migrate to frontmatter and settings saves omit the receipts map',async()=>{
  const {instance,fm,saved}=setup();const hash=await snapshotHash(id,defaults(),readUpdaterMetadata(instance.data));
  const loaded={receipts:{[`${instance.data.api_url}|local|${id}`]:{hash,synced_at:syncedAt}}};
  await instance.migrateReceipts(loaded);
  assert.equal(fm.tbpedia_reading_sync_hash,hash);assert.equal(fm.tbpedia_reading_sync_at,syncedAt);
  assert.equal(fm.tbpedia_reading_updated_at,savedAt);
  assert.equal(Object.hasOwn(saved[0] as object,'receipts'),false);
  assert.equal(loaded.receipts[`${instance.data.api_url}|local|${id}`]!.hash,hash);
  assert.equal((await instance.pendingNotes()).unchanged,1);
  // Use a canonical field through the same conversion used by the editor.
  Object.assign(fm,toFrontmatter({...defaults(),reading_reflection:'changed'}));
  assert.equal((await instance.pendingNotes()).pending.length,1);
});
test('migration never overwrites a frontmatter receipt or imports a different destination',async()=>{
  for(const existing of [undefined,'b'.repeat(64)]){
    const {instance,fm}=setup();if(existing)fm.tbpedia_reading_sync_hash=existing;
    await instance.migrateReceipts({receipts:{[`https://other.example|local|${id}`]:{hash:'a'.repeat(64),synced_at:syncedAt}}});
    assert.equal(fm.tbpedia_reading_sync_hash,existing);
  }
  const {instance,fm}=setup();fm.tbpedia_reading_sync_hash='b'.repeat(64);
  await instance.migrateReceipts({receipts:{[`${instance.data.api_url}|local|${id}`]:{hash:'a'.repeat(64),synced_at:syncedAt}}});
  assert.equal(fm.tbpedia_reading_sync_hash,'b'.repeat(64));
});
test('failed migration does not save settings or discard legacy receipts',async()=>{
  const {instance,saved}=setup();
  instance.app.fileManager.processFrontMatter=async()=>{throw new Error('Disk full');};
  await assert.rejects(instance.migrateReceipts({receipts:{[`${instance.data.api_url}|local|${id}`]:{hash:'a'.repeat(64),synced_at:syncedAt}}}),/Disk full/);
  assert.equal(saved.length,0);
});
test('successful upload writes its receipt only to the article; unchanged notes skip upload',async()=>{
  const {instance,fm,file,saved}=setup();instance.data.local_upload_enabled=true;
  instance.connect=async()=>{instance.me={cloud_sync_enabled:true,required_notices:{}} as never;};
  const hash=await snapshotHash(id,defaults(),readUpdaterMetadata(instance.data));let uploads=0;
  instance.api=async()=>{uploads++;return {content_id:id,status:'saved',snapshot_hash:hash,synced_at:syncedAt};};
  await instance.runSync([file],false);
  assert.equal(uploads,1);assert.equal(fm.tbpedia_reading_sync_hash,hash);assert.equal(fm.tbpedia_reading_sync_at,syncedAt);
  assert.equal(saved.length,0);
  await instance.runSync([file],false);assert.equal(uploads,1);
});
test('failed or mismatched uploads never change the frontmatter receipt',async()=>{
  for(const fail of [true,false]){
    const {instance,fm,file,saved}=setup();instance.data.local_upload_enabled=true;
    instance.connect=async()=>{instance.me={cloud_sync_enabled:true,required_notices:{}} as never;};
    instance.api=async()=>{if(fail)throw new Error('Offline');return {content_id:id,status:'saved',snapshot_hash:'f'.repeat(64),synced_at:syncedAt};};
    await instance.runSync([file],false);
    assert.equal(fm.tbpedia_reading_sync_hash,undefined);assert.equal(fm.tbpedia_reading_sync_at,undefined);assert.equal(saved.length,0);
  }
});
test('an article edited during upload retains its old receipt and remains pending',async()=>{
  const {instance,fm,file}=setup();instance.data.local_upload_enabled=true;
  instance.connect=async()=>{instance.me={cloud_sync_enabled:true,required_notices:{}} as never;};
  const hash=await snapshotHash(id,defaults(),readUpdaterMetadata(instance.data));
  instance.api=async()=>{
    Object.assign(fm,toFrontmatter({...defaults(),reading_reflection:'Edited during upload'}));
    return {content_id:id,status:'saved',snapshot_hash:hash,synced_at:syncedAt};
  };
  await instance.runSync([file],false);
  assert.equal(fm.tbpedia_reading_sync_hash,undefined);assert.equal(fm.tbpedia_reading_sync_at,undefined);
  assert.equal((await instance.pendingNotes()).pending.length,1);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {runInNewContext} from 'node:vm';
import type TbpediaAnalytics from '../plugin/main';
import {defaults} from '../shared/schema';
import {trackedFingerprint,type Frontmatter} from '../shared/frontmatter';

const bundle=await build({entryPoints:['plugin/main.ts'],bundle:true,write:false,platform:'node',format:'cjs',external:['obsidian']});
function setup(){
  const notices:string[]=[];let opened=0,writes=0;
  let fm:Frontmatter={tbpedia_content_id:'TBP-154-C00'};
  const file={extension:'md',basename:'Article'};
  const ribbons:Array<{title:string;callback:()=>void}>=[];
  const events=new Map<string,()=>void>();const cleanups:Array<()=>void>=[];
  class View{
    file=file;
    actions:Array<{title:string;callback:()=>void;removed:boolean}>=[];
    addAction(_icon:string,title:string,callback:()=>void){const action={title,callback,removed:false};this.actions.push(action);return {remove:()=>{action.removed=true;}};}
  }
  let views=[new View()];
  const app={workspace:{getActiveFile:()=>file,onLayoutReady:(cb:()=>void)=>cb(),on:(name:string,cb:()=>void)=>{events.set(name,cb);return {};},iterateAllLeaves:(cb:(leaf:{view:View})=>void)=>views.forEach(view=>cb({view}))},
    fileManager:{processFrontMatter:async(_file:unknown,cb:(value:Frontmatter)=>void)=>{const next={...fm};cb(next);fm=next;writes++;}}};
  const module={exports:{}};class Empty{}
  runInNewContext(bundle.outputFiles![0]!.text,{module,exports:module.exports,URL,crypto,btoa,structuredClone,console,require:()=>({
    Plugin:class{app=app;async loadData(){return {};}addSettingTab(){}addRibbonIcon(_icon:string,title:string,callback:()=>void){ribbons.push({title,callback});}addCommand(){}registerEvent(){}register(cb:()=>void){cleanups.push(cb);}},
    PluginSettingTab:Empty,MarkdownView:View,Modal:class{open(){opened++;}},Setting:Empty,Notice:class{constructor(text:string){notices.push(text);}},getLanguage:()=> 'en'
  })});
  const Constructor=(module.exports as {default:typeof TbpediaAnalytics}).default;
  const instance=new Constructor({} as never,{} as never);
  instance.readNote=async()=>fm;instance.migrateReceipts=async()=>{};instance.refreshUpdaterMetadata=async()=>({seriesId:null,editionId:null,tbpedia:null,releaseId:null,languageCode:null,title:null});
  return {instance,file,notices,ribbons,events,cleanups,View,get views(){return views;},set views(value:View[]){views=value;},get fm(){return fm;},set fm(value:Frontmatter){fm=value;},get opened(){return opened;},get writes(){return writes;}};
}

test('recording rejects missing and invalid IDs without opening or writing',async()=>{
  for(const fm of [{},{tbpedia_content_id:null},{tbpedia_content_id:''},{tbpedia_content_id:123},{tbpedia_content_id:'bad id'}]){
    const p=setup();p.fm=fm;
    await p.instance.openReading();await p.instance.quickStatus('READING');
    await assert.rejects(p.instance.saveReading(p.file as never,defaults(),trackedFingerprint(fm)),/tbpedia_content_id/);
    assert.equal(p.opened,0);assert.equal(p.writes,0);assert.equal(p.notices.length,2);
    assert.ok(p.notices.every(message=>message.includes('tbpedia_content_id')));
  }
});

test('identified notes open and save, but removing the ID while a form is open blocks saving',async()=>{
  const p=setup();await p.instance.openReading();assert.equal(p.opened,1);
  await p.instance.saveReading(p.file as never,defaults(),trackedFingerprint(p.fm));assert.equal(p.writes,1);
  const expected=trackedFingerprint(p.fm);delete p.fm.tbpedia_content_id;
  await assert.rejects(p.instance.saveReading(p.file as never,defaults(),expected),/tbpedia_content_id/);assert.equal(p.writes,1);
});

test('ribbon and tab actions share existing flows and clean up without duplicates',async()=>{
  const p=setup();await p.instance.onload();
  assert.deepEqual(p.ribbons.map(r=>r.title),['Record my reading data','Sync reading data to cloud']);
  let syncs=0;p.instance.previewSync=async()=>{syncs++;};p.ribbons[1]!.callback();assert.equal(syncs,1);
  const first=p.views[0]!;assert.equal(first.actions[0]!.title,'Record my reading data');
  p.events.get('layout-change')!();assert.equal(first.actions.length,1);
  let target:unknown;p.instance.openReading=async(file)=>{target=file;};first.actions[0]!.callback();assert.equal(target,first.file);
  const second=new p.View();p.views=[second];p.events.get('layout-change')!();assert.equal(first.actions[0]!.removed,true);assert.equal(second.actions.length,1);
  p.cleanups.forEach(cb=>cb());assert.equal(second.actions[0]!.removed,true);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {runInNewContext} from 'node:vm';
import type TbpediaAnalytics from '../plugin/main';
import {completeProfile} from './fixtures/profile';

const bundle=await build({entryPoints:['plugin/main.ts'],bundle:true,write:false,platform:'node',format:'cjs',external:['obsidian']});
class Element{
  children:Element[]=[];listeners=new Map<string,()=>void>();checked=false;validity='';type='';required=false;readOnly=false;
  constructor(public tag='',public options:Record<string,unknown>={}){this.type=String(options.type??'');}
  empty(){this.children=[];}
  createEl(tag:string,options:Record<string,unknown>={}){const child=new Element(tag,options);this.children.push(child);return child;}
  createSpan(options:Record<string,unknown>){return this.createEl('span',options);}
  querySelectorAll(tag:string):Element[]{return this.children.flatMap(child=>[...(child.tag===tag?[child]:[]),...child.querySelectorAll(tag)]);}
  addEventListener(event:string,callback:()=>void){this.listeners.set(event,callback);}
  setCustomValidity(message:string){this.validity=message;}
}
class Control{
  inputEl=new Element('input');selectEl=new Element('select');value:unknown;options:Record<string,string>={};text='';change?:(v:string)=>void;click?:()=>void;
  setValue(value:unknown){this.value=value;return this;}
  onChange(callback:(value:string)=>void){this.change=callback;return this;}
  addOption(key:string,label:string){this.options[key]=label;return this;}
  addOptions(options:Record<string,string>){Object.assign(this.options,options);return this;}
  setButtonText(text:string){this.text=text;return this;}
  setDisabled(){return this;}setCta(){return this;}
  onClick(callback:()=>void){this.click=callback;return this;}
}
async function setup(){
  const settings:Array<{name:string;kind:string;control:Control}>=[];const notices:string[]=[];let saves=0;
  let tab!:{display:()=>void;containerEl:Element};
  class Setting{
    name='';constructor(_el:Element){}setName(name:string){this.name=name;return this;}setDesc(){return this;}
    control(kind:string,cb:(c:Control)=>void){const control=new Control();cb(control);settings.push({name:this.name,kind,control});return this;}
    addText(cb:(c:Control)=>void){return this.control('text',cb);}addDropdown(cb:(c:Control)=>void){return this.control('dropdown',cb);}
    addToggle(cb:(c:Control)=>void){return this.control('toggle',cb);}addButton(cb:(c:Control)=>void){return this.control('button',cb);}
  }
  const module={exports:{}};
  runInNewContext(bundle.outputFiles![0]!.text,{module,exports:module.exports,URL,crypto,btoa,structuredClone,console,require:()=>({
    Plugin:class{app={workspace:{onLayoutReady(){},on(){return {};}}};async loadData(){return {};}async saveData(){saves++;}addSettingTab(value:typeof tab){tab=value;}addRibbonIcon(){}addCommand(){}registerEvent(){}register(){}},
    PluginSettingTab:class{containerEl=new Element();},Modal:class{},Setting,Notice:class{constructor(message:string){notices.push(message);}},getLanguage:()=> 'en'
  })});
  const Constructor=(module.exports as {default:typeof TbpediaAnalytics}).default;const instance=new Constructor({} as never,{} as never);
  instance.migrateReceipts=async()=>{};instance.refreshUpdaterMetadata=async()=>({seriesId:null,editionId:null,tbpedia:null,releaseId:null,languageCode:null,title:null});
  await instance.onload();
  const display=()=>{settings.length=0;tab.display();};
  return {instance,settings,notices,display,get root(){return tab.containerEl;},get saves(){return saves;}};
}
test('settings omit the cloud summary and load option; all profile inputs are required',async()=>{
  const p=await setup();p.instance.data.reader_id='550e8400-e29b-41d4-a716-446655440000';p.display();
  assert.ok(!p.settings.some(s=>/Load cloud profile|Use existing cloud profile/.test(s.name+s.control.text)));
  assert.ok(!p.root.querySelectorAll('p').some(el=>/Connected:|Cloud reading permission:/.test(String(el.options.text))));
  const fields=p.settings.filter(s=>s.name.includes('(required)'));
  assert.equal(fields.length,7);assert.ok(fields.every(s=>s.control.inputEl.required||s.control.selectEl.required));
  assert.ok(p.settings.find(s=>s.name==='Reader ID')?.control.inputEl.readOnly);
});
test('reader type checkboxes permit multiple selections and require at least one',async()=>{
  const p=await setup();p.display();const inputs=p.root.querySelectorAll('input');
  assert.equal(inputs.length,5);assert.ok(inputs.every(input=>input.type==='checkbox'&&input.validity));
  inputs[0]!.checked=true;inputs[0]!.listeners.get('change')!();inputs[1]!.checked=true;inputs[1]!.listeners.get('change')!();
  assert.equal(JSON.stringify(p.instance.data.profile.reader_type),JSON.stringify(['GENERAL','NEW_REFUGE']));assert.ok(inputs.every(input=>!input.validity));
  for(const input of inputs){input.checked=false;input.listeners.get('change')!();}
  assert.equal(p.instance.data.profile.reader_type,null);assert.ok(inputs.every(input=>input.validity));
});
test('unlinked readers can choose credential recovery instead of registering a new profile',async()=>{
  const p=await setup();p.display();
  assert.ok(p.settings.some(s=>s.control.text==='Save and upload profile'));
  const mode=p.settings.find(s=>s.name==='Reader setup')!;assert.equal(mode.control.options.existing,'Connect an existing reader');
  p.settings.length=0;mode.control.change!('existing');
  assert.ok(p.settings.some(s=>s.name==='Reader ID'));assert.equal(p.settings.find(s=>s.name==='Sync credential')?.control.inputEl.type,'password');
  assert.ok(p.settings.some(s=>s.control.text==='Connect existing reader'));assert.ok(!p.settings.some(s=>s.control.text==='Save and upload profile'));
});
test('local profile saving rejects empty required fields and accepts a complete profile',async()=>{
  const p=await setup();p.display();const before=p.saves;
  p.settings.find(s=>s.control.text==='Save profile locally')!.control.click!();await new Promise(setImmediate);
  assert.equal(p.saves,before);assert.ok(p.notices.length);
  p.instance.data.profile=completeProfile();p.settings.length=0;p.display();
  p.settings.find(s=>s.control.text==='Save profile locally')!.control.click!();await new Promise(setImmediate);
  assert.equal(p.saves,before+1);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {runInNewContext} from 'node:vm';
import {readFileSync} from 'node:fs';
import type TbpediaAnalytics from '../plugin/main';
import {defaults} from '../shared/schema';
import {trackedFingerprint,type Frontmatter} from '../shared/frontmatter';

const bundle=await build({entryPoints:['plugin/main.ts'],bundle:true,write:false,platform:'browser',format:'cjs',external:['obsidian'],metafile:true});
const reflection=await build({entryPoints:['plugin/reading-reflection.ts'],bundle:true,write:false,platform:'browser',format:'cjs'});

test('mobile manifests and browser bundle require only the Obsidian host API',()=>{
  for(const path of ['plugin/manifest.json','../../manifest.json'])assert.equal(JSON.parse(readFileSync(path,'utf8')).isDesktopOnly,false);
  assert.deepEqual(bundle.metafile!.outputs['main.js']!.imports.map(item=>item.path),['obsidian']);
});

for(const os of ['iOS','Android'])test(`${os} loads, records offline and uses Obsidian networking without Node or Intl.Segmenter`,async()=>{
  const mobileIntl=Object.create(Intl);Object.defineProperty(mobileIntl,'Segmenter',{value:undefined});
  let fm:Frontmatter={tbpedia_content_id:'TBP-154-C00'};let opened=0,writes=0,requests=0;const notices:string[]=[];
  const commands:Array<{id:string;callback:()=>void}>=[];
  const file={extension:'md',basename:'Article'};
  const app={vault:{configDir:'.mobile-config',adapter:{read:async()=>{throw new Error('File does not exist');},exists:async()=>false},read:async()=> '---\ntbpedia_content_id: TBP-154-C00\n---\nArticle'},
    workspace:{getActiveFile:()=>file,onLayoutReady:(cb:()=>void)=>cb(),on:()=>({}),iterateAllLeaves(){}},
    fileManager:{processFrontMatter:async(_file:unknown,cb:(fields:Frontmatter)=>void)=>{const next={...fm};cb(next);fm=next;writes++;}}};
  class Empty{}
  const module={exports:{}};
  runInNewContext(bundle.outputFiles![0]!.text,{module,exports:module.exports,URL,crypto,btoa,structuredClone,console,Intl:mobileIntl,
    require:(name:string)=>{assert.equal(name,'obsidian');return {
      Plugin:class{app=app;async loadData(){return {};}async saveData(){}addSettingTab(){}addRibbonIcon(){}addCommand(command:typeof commands[number]){commands.push(command);}registerEvent(){}register(){}},
      PluginSettingTab:Empty,MarkdownView:Empty,Modal:class{open(){opened++;}},Setting:Empty,
      Notice:class{constructor(text:string){notices.push(text);}},getLanguage:()=> 'en',
      Platform:{isMobileApp:true,isPhone:true,isDesktopApp:false,isIosApp:os==='iOS',isAndroidApp:os==='Android'},
      getFrontMatterInfo:()=>({exists:true,frontmatter:'id'}),parseYaml:()=>({...fm}),
      requestUrl:async()=>{requests++;return {status:200,json:{application:'tbpedia-analytics',configured:true}};}
    };}});
  const Constructor=(module.exports as {default:typeof TbpediaAnalytics}).default;const plugin=new Constructor({} as never,{} as never);
  await plugin.onload();assert.deepEqual(notices,[]);assert.ok(commands.some(command=>command.id==='open-reading'));
  await plugin.openReading();assert.equal(opened,1);
  await plugin.saveReading(file as never,{...defaults(),my_reader_types:['GENERAL','PRACTITIONER'],reading_reflection:'手機閱讀 🌸'},trackedFingerprint(fm));
  assert.equal(writes,1);assert.equal(fm['閱讀感想'],'手機閱讀 🌸');assert.equal(requests,0);
  await plugin.testConnection();assert.equal(requests,1);
});

test('reflection counting works in a WebView without native Intl.Segmenter',()=>{
  const module={exports:{}};
  runInNewContext(reflection.outputFiles![0]!.text,{module,exports:module.exports,Intl:{}});
  const api=module.exports as {reflectionLength:(value:string)=>number};
  assert.equal(api.reflectionLength('學👩‍👩‍👧‍👦e\u0301🇲🇾'),4);
});

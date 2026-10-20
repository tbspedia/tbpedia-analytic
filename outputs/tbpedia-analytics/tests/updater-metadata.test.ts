import test from 'node:test';
import assert from 'node:assert/strict';
import {emptyUpdaterMetadata,extractUpdaterMetadata,readUpdaterMetadata} from '../shared/updater-metadata';
import {loadUpdaterMetadata,loadSavedUpdaterMetadata} from '../plugin/updater';
import {setLocale,t,UiError} from '../plugin/i18n';
import {canonicalSnapshot,defaults,snapshotHash} from '../shared/schema';

const metadata={seriesId:'reading',editionId:'standard',tbpedia:'V1',releaseId:'zh-tw-reading-standard-2026-11-22.5',languageCode:'zh-TW',title:'真佛百科閱讀系列標準版'};
test('updater capture selects only requested fields and prefers the installed release',()=>{
  const result=extractUpdaterMetadata({...metadata,baseRelease:{releaseId:'2026-9-30.1'},releaseId:'old-flat-release',installed:{releaseId:metadata.releaseId,privateValue:'not copied'},unrelated:'not copied'});
  assert.deepEqual(result,metadata);assert.deepEqual(Object.keys(result),['seriesId','editionId','tbpedia','releaseId','languageCode','title']);
});
test('flat updater releases are supported and baseline releases are never mistaken for installed releases',()=>{
  assert.deepEqual(extractUpdaterMetadata(metadata),metadata);
  assert.deepEqual(extractUpdaterMetadata({baseRelease:{releaseId:'baseline'}}),emptyUpdaterMetadata());
  assert.deepEqual(readUpdaterMetadata({seriesId:undefined,editionId:null}),emptyUpdaterMetadata());
});
test('malformed identifiers and updater structures are rejected rather than coerced',()=>{
  for(const value of [null,[],{seriesId:1},{editionId:''},{tbpedia:'x'.repeat(257)},{installed:'bad'},{installed:{releaseId:123}},{languageCode:123},{languageCode:'x'.repeat(65)},{title:{invalid:true}},{title:'x'.repeat(1001)}])assert.throws(()=>extractUpdaterMetadata(value));
});
test('updater loading uses the vault config directory and tolerates an absent companion plugin',async()=>{
  const paths:string[]=[];
  const result=await loadUpdaterMetadata({exists:async()=>false,read:async path=>{paths.push(path);throw Object.assign(new Error('Missing file'),{code:'ENOENT'});}},'.custom-config/');
  assert.deepEqual(paths,['.custom-config/plugins/tbpedia-update/data.json']);assert.equal(result,null);
});
test('a false config-file existence result does not discard readable updater settings',async()=>{
  const result=await loadUpdaterMetadata({exists:async()=>false,read:async()=>JSON.stringify(metadata)},'.obsidian');
  assert.deepEqual(result,metadata);
});

test('mobile adapters can report an absent updater without an ENOENT code',async()=>{
  assert.equal(await loadUpdaterMetadata({exists:async()=>false,read:async()=>{throw new Error('File does not exist');}},'.mobile-config'),null);
  await assert.rejects(loadUpdaterMetadata({exists:async()=>{throw new Error('Storage unavailable');},read:async()=>{throw new Error('Read failed');}},'.mobile-config'),UiError);
});
test('reading sync metadata comes from the saved analytics data and excludes private settings',async()=>{
  const saved={...metadata,interface_language:'en',stored_token:'private-placeholder',reader_id:'reader',receipts:{note:{hash:'old'}}};
  const result=await loadSavedUpdaterMetadata(async()=>JSON.parse(JSON.stringify(saved)));
  assert.deepEqual(result,metadata);assert.equal(Object.hasOwn(result,'stored_token'),false);
  assert.equal(result.languageCode,'zh-TW');
});
test('invalid or unreadable analytics data stops sync with a localized error',async()=>{
  setLocale('zh-TW');
  for(const read of [async()=>null,async()=>[],async()=>({...metadata,title:123}),async()=>{throw new Error('Read failed');}]){
    await assert.rejects(loadSavedUpdaterMetadata(read),e=>e instanceof UiError&&e.message===t('analyticsMetadataReadError'));
  }
});
test('updater loading supports UTF-8 BOM and ignores unrelated settings',async()=>{
  const result=await loadUpdaterMetadata({exists:async()=>true,read:async()=> '\uFEFF'+JSON.stringify({...metadata,unrelated:{token:'not copied'}})},'.obsidian');
  assert.deepEqual(result,metadata);
});
test('unreadable, invalid or oversized updater settings produce a localized error',async()=>{
  setLocale('zh-TW');
  for(const read of [async()=>'{bad json',async()=>JSON.stringify({seriesId:42}),async()=> 'x'.repeat(1024*1024+1),async()=>{throw new Error('Filesystem details');}]){
    await assert.rejects(loadUpdaterMetadata({exists:async()=>true,read},'.obsidian'),e=>e instanceof UiError&&e.message===t('updaterReadError'));
  }
});
test('sync fingerprints include updater context while preserving legacy fingerprints',async()=>{
  const values=defaults();const id='TBP-154-C00';
  assert.equal(canonicalSnapshot(id,values),JSON.stringify({schema_version:1,content_id:id,values}));
  assert.notEqual(await snapshotHash(id,values,metadata),await snapshotHash(id,values));
  assert.notEqual(await snapshotHash(id,values,emptyUpdaterMetadata()),await snapshotHash(id,values));
  assert.notEqual(await snapshotHash(id,values,metadata),await snapshotHash(id,values,{...metadata,releaseId:'next-release'}));
  assert.notEqual(await snapshotHash(id,values,metadata),await snapshotHash(id,values,{...metadata,languageCode:'en'}));
  assert.notEqual(await snapshotHash(id,values,metadata),await snapshotHash(id,values,{...metadata,title:'Updated collection title'}));
  assert.equal(await snapshotHash(id,values,metadata),await snapshotHash(id,values,{title:metadata.title,languageCode:metadata.languageCode,releaseId:metadata.releaseId,tbpedia:metadata.tbpedia,editionId:metadata.editionId,seriesId:metadata.seriesId}));
});

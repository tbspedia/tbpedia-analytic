import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { defaults, profileSchema, readingSchema, snapshotHash, statusAction, dateSchema } from '../shared/schema';
import { fromFrontmatter, toFrontmatter } from '../shared/frontmatter';
import { inspectVault, DEFAULT_VAULT, parseNote } from '../scripts/vault';

test('17 fields round-trip through Chinese YAML representation',()=>{
  const values={...defaults(),planned_reading:true,reading_status:'COMPLETED' as const,reading_depth:'BASIC' as const,reading_count:2,my_rating:5,my_keywords:['空性','字,句','引號"'],my_reader_types:['BUDDHIST_STUDENT' as const],my_buddhist_level:0,reading_reflection:'第一行\n第二行 🌸'};
  assert.equal(Object.keys(values).length,17);assert.deepEqual(fromFrontmatter(toFrontmatter(values)),values);
});
test('legacy values preserve their meaning without using publisher classification',()=>{
  const values=fromFrontmatter({'閱讀狀態':'沒讀','閱讀層次':['基礎閱讀'],'閱讀推薦':['沒推薦'],'評分':0,'閱讀感想':['沒推薦'],'關鍵詞':['publisher'],'佛學級別':'初級'});
  assert.equal(values.reading_status,'UNREAD');assert.equal(values.reading_depth,'BASIC');assert.equal(values.my_rating,null);assert.equal(values.my_recommendation,'UNDECIDED');assert.equal(values.reading_reflection,'沒推薦');assert.deepEqual(values.my_keywords,[]);assert.equal(values.my_buddhist_level,null);
});
test('clearing a canonical value does not revive a legacy alias',()=>{assert.equal(fromFrontmatter({'我的評分':null,'評分':5}).my_rating,null);assert.equal(fromFrontmatter({'我的閱讀推薦':null,'閱讀推薦':'推薦'}).my_recommendation,null);});
test('completion is a deliberate transition and never a repeated increment',()=>{
  const completed=statusAction(defaults(),'COMPLETED','2026-10-17');assert.equal(completed.reading_count,1);
  assert.deepEqual(statusAction(completed,'COMPLETED','2026-10-18'),completed);
  const reread=statusAction(completed,'READING','2026-10-18');assert.equal(reread.reading_count,1);assert.equal(reread.completed_date,'2026-10-17');
  assert.equal(statusAction(reread,'COMPLETED','2026-10-19').reading_count,2);
});
test('fingerprints ignore object order and preserve meaningful zero and false',async()=>{
  const a={...defaults(),my_buddhist_level:0};const b=Object.fromEntries(Object.entries(a).reverse());
  assert.equal(await snapshotHash('TBP-154-C00',a),await snapshotHash('TBP-154-C00',readingSchema.parse(b)));
  assert.notEqual(await snapshotHash('TBP-154-C00',a),await snapshotHash('TBP-154-C00',defaults()));
});
test('calendar dates and optional demographics validate',()=>{
  assert.equal(dateSchema.safeParse('2025-02-29').success,false);assert.equal(dateSchema.safeParse('2024-02-29').success,true);
  const profile={nickname:'Pilot',email:null,birth_year:1975,birth_month:8,sex:'PREFER_NOT_TO_SAY',country_code:'MY',reader_type:null,organisation:'讀書會'};
  assert.equal(profileSchema.safeParse(profile).success,true);assert.equal(profileSchema.safeParse({...profile,birth_month:13}).success,false);assert.equal(profileSchema.safeParse({...profile,birth_year:null}).success,false);assert.equal(profileSchema.safeParse({...profile,birth_year:2100}).success,false);
});
test('invalid values are rejected instead of changing stored meaning',()=>{
  assert.throws(()=>fromFrontmatter({'我的評分':0}));assert.throws(()=>fromFrontmatter({'我的關鍵詞':'not a list'}));assert.throws(()=>fromFrontmatter({'計劃閱讀':'false'}));
});
test('birth-year bound uses the request clock, not the module initialization clock',()=>{
  const RealDate=Date;
  class FutureDate extends RealDate{constructor(value?:string|number){super(value??'2030-01-01T00:00:00Z');}}
  Object.defineProperty(globalThis,'Date',{value:FutureDate,configurable:true,writable:true});
  try{const p={nickname:'Pilot',email:null,birth_year:2030,birth_month:null,sex:'PREFER_NOT_TO_SAY',country_code:null,reader_type:null,organisation:null};assert.equal(profileSchema.safeParse(p).success,true);assert.equal(profileSchema.safeParse({...p,birth_year:2031}).success,false);}
  finally{Object.defineProperty(globalThis,'Date',{value:RealDate,configurable:true,writable:true});}
});
test('actual MVP catalogue has stable IDs, unique keys and readable legacy values',async()=>{
  const audit=await inspectVault(DEFAULT_VAULT);assert.deepEqual(audit.errors,[]);assert.equal(audit.entries.length,245);assert.equal(audit.entries.filter(e=>e.row.content_type==='BOOK').length,4);assert.equal(audit.entries.filter(e=>e.row.chapter_number===0).length,3);assert.ok(audit.entries.every(e=>e.readingValid&&!e.needsId));
  for(const item of audit.entries){const text=await readFile(`${DEFAULT_VAULT}/${item.path}`,'utf8');assert.equal(parseNote(text).fm.tbpedia_content_id,item.row.content_id);}
});

import { readFile, writeFile, readdir, mkdir, copyFile } from 'node:fs/promises';
import { resolve, relative, dirname, basename, join, sep } from 'node:path';
import { parseDocument } from 'yaml';
import { fromFrontmatter } from '../shared/frontmatter';
import { contentIdSchema } from '../shared/schema';

export const DEFAULT_VAULT = 'C:\\Users\\lotus\\OneDrive - SJKC Yu Hua Kajang\\Obsidian\\AnalyticsV1';
export const SCOPE_FOLDERS = ['01 文集部','02 開示部'];
export type CatalogueRow = {content_id:string;content_type:'BOOK'|'CHAPTER';parent_content_id:string|null;book_number:number;book_title:string;chapter_number:number|null;chapter_title:string|null;is_active:boolean;created_at:string;updated_at:string};
export type CatalogueEntry = {path:string;row:CatalogueRow;needsId:boolean;readingValid:boolean;readingError?:string};
export function parseNote(text:string): {fm:Record<string,unknown>;end:number;newline:string} {
  const match = /^(?:\uFEFF)?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(text);
  if(!match) throw new Error('Missing frontmatter block');
  const document = parseDocument(match[1]!, {uniqueKeys:true});
  if(document.errors.length) throw new Error(document.errors.map(e=>e.message).join('; '));
  const fm:unknown=document.toJSON();
  if(typeof fm!=='object'||fm===null||Array.isArray(fm)) throw new Error('Frontmatter is not an object');
  return {fm:fm as Record<string,unknown>,end:match[0].length,newline:text.includes('\r\n')?'\r\n':'\n'};
}
async function walk(root:string):Promise<string[]> {
  const entries=await readdir(root,{withFileTypes:true});
  const files:string[]=[];
  for(const entry of entries) {
    if(entry.name.startsWith('.')) continue;
    const file=join(root,entry.name);
    if(entry.isDirectory()) files.push(...await walk(file));
    else if(entry.isFile()&&entry.name.endsWith('.md')) files.push(file);
  }
  return files.sort();
}
export async function inspectVault(vault:string):Promise<{entries:CatalogueEntry[];errors:Array<{path:string;error:string}>;legacy:Record<string,number>;excluded:Array<{path:string;reason:string}>}> {
  const entries:CatalogueEntry[]=[]; const errors:Array<{path:string;error:string}>=[]; const legacy:Record<string,number>={}; const excluded:Array<{path:string;reason:string}>=[];
  const now=new Date().toISOString();
  for(const folder of SCOPE_FOLDERS) {
    for(const file of await walk(join(vault,folder))) {
      const path=relative(vault,file).split(sep).join('/');
      try {
        const {fm}=parseNote(await readFile(file,'utf8'));
        const parts=path.split('/');
        const bookFolder=parts[1]??'';
        const bookNumber=Number(/^(\d+)/.exec(bookFolder)?.[1]);
        if(!Number.isInteger(bookNumber)||bookNumber<=0) continue;
        if(fm['內容歸類']!=='書籍'&&fm['內容歸類']!=='文章') continue;
        const stem=basename(file,'.md');
        const chapter=stem!==bookFolder && fm['內容歸類']==='文章';
        if(chapter && !fm.tbpedia_content_id && typeof fm['文章標題']==='string' && stem.startsWith(fm['文章標題']+' (')) {excluded.push({path,reason:'Translated/variant copy; canonical original is used'});continue;}
        const chapterNumber=chapter?Number(fm['章號']):null;
        if(chapter && (typeof chapterNumber!=='number'||!Number.isInteger(chapterNumber)||chapterNumber<0||fm['章號']===null||fm['章號']===undefined)) throw new Error('Missing or invalid chapter number');
        const prefix=folder==='01 文集部'?'TBP':'TBS';
        const parent=`${prefix}-${String(bookNumber).padStart(3,'0')}`;
        const id=typeof fm.tbpedia_content_id==='string'?fm.tbpedia_content_id:chapter?`${parent}-C${String(chapterNumber).padStart(2,'0')}`:parent;
        contentIdSchema.parse(id);
        let readingValid=true; let readingError:string|undefined;
        try {fromFrontmatter(fm);} catch(error) {readingValid=false;readingError=error instanceof Error?error.message:'Invalid reading fields';}
        for(const name of ['閱讀狀態','閱讀層次','閱讀推薦','文章評分','評分']) if(fm[name]!==undefined) {const key=`${name}: ${JSON.stringify(fm[name])}`;legacy[key]=(legacy[key]??0)+1;}
        entries.push({path,needsId:fm.tbpedia_content_id===undefined,readingValid,readingError,row:{content_id:id,content_type:chapter?'CHAPTER':'BOOK',parent_content_id:chapter?parent:null,book_number:bookNumber,book_title:bookFolder,chapter_number:chapterNumber,chapter_title:chapter?String(fm['文章標題']??''):null,is_active:true,created_at:now,updated_at:now}});
      } catch(error) {errors.push({path,error:error instanceof Error?error.message:String(error)});}
    }
  }
  const seen=new Map<string,string>();
  for(const entry of entries) {const prior=seen.get(entry.row.content_id);if(prior)errors.push({path:entry.path,error:`Duplicate ID ${entry.row.content_id}; also ${prior}`});seen.set(entry.row.content_id,entry.path);}
  const ids=new Set(entries.map(e=>e.row.content_id));
  for(const entry of entries) if(entry.row.parent_content_id&&!ids.has(entry.row.parent_content_id)) errors.push({path:entry.path,error:`Missing parent ${entry.row.parent_content_id}`});
  return {entries,errors,legacy,excluded};
}
async function main() {
  const mode=process.argv[2]??'audit';
  if(!['audit','prepare'].includes(mode)) throw new Error('Use audit or prepare');
  const vault=resolve(process.argv[3]??DEFAULT_VAULT);
  const result=await inspectVault(vault);
  await mkdir('reports',{recursive:true});
  await writeFile('reports/vault-audit.json',JSON.stringify({vault,folders:SCOPE_FOLDERS,...result},null,2));
  await writeFile('reports/catalogue.json',JSON.stringify(result.entries.map(e=>({fields:e.row})),null,2));
  await writeFile('reports/content-map.json',JSON.stringify(Object.fromEntries(result.entries.map(e=>[e.path,e.row.content_id])),null,2));
  const invalidReading=result.entries.filter(e=>!e.readingValid);
  console.log(JSON.stringify({mode,vault,eligible:result.entries.length,books:result.entries.filter(e=>e.row.content_type==='BOOK').length,chapters:result.entries.filter(e=>e.row.content_type==='CHAPTER').length,needsIds:result.entries.filter(e=>e.needsId).length,invalidReading:invalidReading.map(e=>({path:e.path,error:e.readingError})),catalogueErrors:result.errors,excluded:result.excluded,legacy:result.legacy},null,2));
  if(mode==='audit') return;
  if(result.errors.length) throw new Error('Catalogue has errors; no notes were modified. See reports/vault-audit.json');
  const backup=resolve('private',`vault-backup-${new Date().toISOString().replace(/[:.]/g,'-')}`);
  for(const entry of result.entries.filter(e=>e.needsId)) {
    const file=resolve(vault,entry.path);
    if(!file.startsWith(vault+sep)) throw new Error('Path escaped vault');
    const original=await readFile(file,'utf8');
    const current=parseNote(original);
    if(current.fm.tbpedia_content_id!==undefined) throw new Error(`Note changed during preparation: ${entry.path}`);
    const backupPath=resolve(backup,entry.path);
    if(!backupPath.startsWith(backup+sep)) throw new Error('Path escaped backup');
    await mkdir(dirname(backupPath),{recursive:true});await copyFile(file,backupPath);
    const opening=/^(?:\uFEFF)?---[ \t]*\r?\n/.exec(original)![0];
    const updated=opening+`tbpedia_content_id: ${entry.row.content_id}${current.newline}`+original.slice(opening.length);
    if(parseNote(updated).fm.tbpedia_content_id!==entry.row.content_id) throw new Error('ID verification failed');
    await writeFile(file,updated,'utf8');
  }
  console.log(`Stable IDs assigned. Original notes backed up at ${backup}`);
}
if(basename(process.argv[1]??'')==='vault.ts') await main();

import {readFile,writeFile,readdir} from 'node:fs/promises';
import {resolve,join,sep} from 'node:path';
import assert from 'node:assert/strict';
import {DEFAULT_VAULT} from './vault';

const vault=resolve(DEFAULT_VAULT);
const dirs=(await readdir('private',{withFileTypes:true})).filter(d=>d.isDirectory()&&d.name.startsWith('vault-backup-')).map(d=>d.name).sort();
assert.ok(dirs[0],'Original note backup is required');
const backup=resolve('private',dirs[0]);
const map=JSON.parse(await readFile('reports/content-map.json','utf8')) as Record<string,string>;
let checked=0;
for(const [path,id]of Object.entries(map)){
  const source=resolve(backup,path),target=resolve(vault,path);
  assert.ok(source.startsWith(backup+sep)&&target.startsWith(vault+sep));
  const original=await readFile(source),current=await readFile(target);
  const end=original.indexOf(10)+1;assert.ok(end>0);
  const newline=original[end-2]===13?'\r\n':'\n';
  const expected=Buffer.concat([original.subarray(0,end),Buffer.from(`tbpedia_content_id: ${id}${newline}`,'utf8'),original.subarray(end)]);
  assert.ok(current.equals(expected),`Unexpected modification beyond ID insertion: ${path}`);checked++;
}
const report={checked_notes:checked,all_original_bytes_preserved:true,only_change:'Inserted tbpedia_content_id line after opening YAML marker',backup_directory:backup,verified_at:new Date().toISOString()};
await writeFile('reports/vault-preservation.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));

import {DEFAULT_API,migrateApiUrl} from '../shared/api';
import {readFile,writeFile,copyFile,mkdir,access} from 'node:fs/promises';
import {resolve,join,sep} from 'node:path';
import {z} from 'zod';
import {DEFAULT_VAULT} from './vault';
import {emptyProfile,PROFILE_NOTICE_VERSION,READING_NOTICE_VERSION} from '../shared/schema';

const vault=resolve(process.argv.slice(2).find(value=>!value.startsWith('--'))??DEFAULT_VAULT);
if(vault!==resolve(DEFAULT_VAULT))throw new Error('This installation script is restricted to the explicitly named AnalyticsV1 vault.');
const target=resolve(vault,'.obsidian','plugins','tbpedia-analytics');
if(!target.startsWith(vault+sep))throw new Error('Plugin path escaped the intended vault.');
const backup=resolve('private',`plugin-install-backup-${new Date().toISOString().replace(/[:.]/g,'-')}`);
await mkdir(target,{recursive:true});await mkdir(backup,{recursive:true});
const exists=async(path:string)=>{try{await access(path);return true;}catch{return false;}};
for(const name of ['main.js','manifest.json','styles.css']){const dest=join(target,name);if(await exists(dest))await copyFile(dest,join(backup,name));await copyFile(resolve('dist/plugin',name),dest);}
const dataPath=join(target,'data.json');
if(!await exists(dataPath))await writeFile(dataPath,JSON.stringify({api_url:DEFAULT_API,reader_id:null,profile:emptyProfile(),profile_notice_version:PROFILE_NOTICE_VERSION,reading_notice_version:READING_NOTICE_VERSION,local_upload_enabled:true,remember_token:false,stored_token:''},null,2));
else{
  const original=await readFile(dataPath,'utf8');
  const migrated=migrateApiUrl(JSON.parse(original));
  if(migrated.changed){await writeFile(join(backup,'data.json'),original);await writeFile(dataPath,JSON.stringify(migrated.data,null,2));}
}
if(process.argv.includes('--enable')){
  const listPath=join(vault,'.obsidian','community-plugins.json');
  const original=await readFile(listPath,'utf8');const enabled=z.array(z.string()).parse(JSON.parse(original));
  if(!enabled.includes('tbpedia-analytics')){await writeFile(join(backup,'community-plugins.json'),original);await writeFile(listPath,JSON.stringify([...enabled,'tbpedia-analytics'],null,2));}
}
console.log(JSON.stringify({installed:true,plugin_directory:target,enabled_on_next_load:process.argv.includes('--enable'),backup,local_upload_enabled:z.object({local_upload_enabled:z.boolean().default(true)}).parse(JSON.parse(await readFile(dataPath,'utf8'))).local_upload_enabled}));

import type {DataAdapter} from 'obsidian';
import {extractUpdaterMetadata,readUpdaterMetadata,type UpdaterMetadata} from '../shared/updater-metadata';
import {t,UiError} from './i18n';

export async function loadUpdaterMetadata(adapter:Pick<DataAdapter,'exists'|'read'>,configDir:string):Promise<UpdaterMetadata|null>{
  const path=`${configDir.replace(/\/+$/,'')}/plugins/tbpedia-update/data.json`;
  try{
    // Read directly: adapters can report a hidden config file as absent even
    // when it is readable. A missing updater must not erase saved attribution.
    let text:string;
    try{text=await adapter.read(path);}catch(error){
      if(typeof error==='object'&&error!==null&&'code' in error&&error.code==='ENOENT')return null;
      // Mobile adapters may report missing files without Node's ENOENT code.
      // Check only after the read fails: hidden config files can be readable
      // even when the adapter's existence check incorrectly reports false.
      if(!await adapter.exists(path))return null;
      throw error;
    }
    if(text.length>1024*1024)throw new Error('Updater settings exceed the read limit');
    return extractUpdaterMetadata(JSON.parse(text.replace(/^\uFEFF/,'')) as unknown);
  }catch{throw new UiError(t('updaterReadError'));}
}

export async function loadSavedUpdaterMetadata(loadData:()=>Promise<unknown>):Promise<UpdaterMetadata>{
  try{
    const saved=await loadData();
    if(typeof saved!=='object'||saved===null||Array.isArray(saved))throw new Error('Invalid analytics settings');
    return readUpdaterMetadata(saved as Record<string,unknown>);
  }catch{throw new UiError(t('analyticsMetadataReadError'));}
}

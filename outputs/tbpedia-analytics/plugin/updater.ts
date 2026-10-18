import type {DataAdapter} from 'obsidian';
import {emptyUpdaterMetadata,extractUpdaterMetadata,type UpdaterMetadata} from '../shared/updater-metadata';
import {t,UiError} from './i18n';

export async function loadUpdaterMetadata(adapter:Pick<DataAdapter,'exists'|'read'>,configDir:string):Promise<UpdaterMetadata>{
  const path=`${configDir.replace(/\/+$/,'')}/plugins/tbpedia-update/data.json`;
  try{
    if(!await adapter.exists(path))return emptyUpdaterMetadata();
    const text=await adapter.read(path);
    if(text.length>1024*1024)throw new Error('Updater settings exceed the read limit');
    return extractUpdaterMetadata(JSON.parse(text.replace(/^\uFEFF/,'')) as unknown);
  }catch{throw new UiError(t('updaterReadError'));}
}

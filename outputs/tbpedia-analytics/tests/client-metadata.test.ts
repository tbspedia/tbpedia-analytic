import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {clientMetadataSchema,collectClientMetadata,type ClientPlatform} from '../shared/client-metadata';
import {catalogs} from '../plugin/i18n';
import {PROFILE_NOTICE,PROFILE_NOTICE_VERSION} from '../shared/schema';

const platform:ClientPlatform={isDesktopApp:true,isMobileApp:false,isPhone:false,isTablet:false,isIosApp:false,isAndroidApp:false,isWin:false,isMacOS:false,isLinux:false};

test('device metadata identifies desktop OS and uses the plugin version',()=>{
  for(const [flag,os] of [['isWin','Windows'],['isMacOS','macOS'],['isLinux','Linux']] as const){
    assert.deepEqual(collectClientMetadata({...platform,[flag]:true},'0.1.3','Obsidian/Electron test'),{device_type:'desktop',Client_version:'0.1.3',os,user_agent:'Obsidian/Electron test'});
  }
});
test('mobile OS detection takes priority over desktop flags',()=>{
  const ios=collectClientMetadata({...platform,isDesktopApp:false,isMobileApp:true,isTablet:true,isIosApp:true,isMacOS:true},'0.1.3','iPad test');
  assert.equal(ios.device_type,'tablet');assert.equal(ios.os,'iOS');
  const android=collectClientMetadata({...platform,isDesktopApp:false,isMobileApp:true,isPhone:true,isAndroidApp:true,isLinux:true},'0.1.3','Android test');
  assert.equal(android.device_type,'mobile');assert.equal(android.os,'Android');
});
test('missing device details remain unknown and user-agent size is bounded',()=>{
  assert.deepEqual(collectClientMetadata({...platform,isDesktopApp:false},'0.1.3'),{device_type:'unknown',Client_version:'0.1.3',os:null,user_agent:null});
  assert.equal(collectClientMetadata(platform,'0.1.3','x'.repeat(3000)).user_agent?.length,2048);
  assert.equal(collectClientMetadata(platform,'0.1.3','  ').user_agent,null);
});
test('client metadata rejects oversized, invalid and unexpected properties',()=>{
  const value=collectClientMetadata(platform,'0.1.3');
  for(const invalid of [{...value,user_agent:'x'.repeat(2049)},{...value,Client_version:''},{...value,Client_version:'x'.repeat(65)},{...value,os:'x'.repeat(101)},{...value,device_type:'forged'},{...value,reader_id:'forged'}])assert.equal(clientMetadataSchema.safeParse(invalid).success,false);
});
test('metadata is attached only to explicit profile upload, with a versioned translated notice',()=>{
  const source=readFileSync(new URL('../plugin/main.ts',import.meta.url),'utf8');
  const calls=[...source.matchAll(/collectClientMetadata\(/g)];assert.equal(calls.length,1);
  assert.ok(calls[0]!.index!>source.indexOf('async uploadProfile()'));
  assert.ok(calls[0]!.index!<source.indexOf('async readNote('));
  assert.equal(PROFILE_NOTICE_VERSION,'profile-v2');
  assert.equal(catalogs['zh-TW'].profileNotice,PROFILE_NOTICE);
  for(const catalog of Object.values(catalogs))assert.ok(catalog.profileNotice?.length);
});

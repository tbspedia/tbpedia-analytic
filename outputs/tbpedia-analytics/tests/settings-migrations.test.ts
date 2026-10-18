import test from 'node:test';
import assert from 'node:assert/strict';
import {migrateInterfaceLanguage} from '../plugin/settings-migrations';

test('renaming the UI language preserves its value, collection metadata and other reader settings',()=>{
  const previous={language:'en',languageCode:'zh-TW',title:'真佛百科閱讀系列標準版',reader_id:'reader',stored_token:'placeholder',remember_token:true,receipts:{note:{hash:'previous-hash'}}};
  const snapshot=structuredClone(previous);
  const migrated=migrateInterfaceLanguage(previous);
  assert.equal(migrated.changed,true);
  assert.deepEqual(migrated.data,{interface_language:'en',languageCode:'zh-TW',title:previous.title,reader_id:'reader',stored_token:'placeholder',remember_token:true,receipts:previous.receipts});
  assert.deepEqual(previous,snapshot,'migration must not mutate the original settings');
  assert.equal(Object.hasOwn(migrated.data as object,'language'),false);
});
test('the canonical setting wins and migration is idempotent with Follow system as the default',()=>{
  assert.deepEqual(migrateInterfaceLanguage({language:'en',interface_language:'system',languageCode:'ja'}),{data:{interface_language:'system',languageCode:'ja'},changed:true});
  assert.deepEqual(migrateInterfaceLanguage({}),{data:{interface_language:'system'},changed:true});
  assert.deepEqual(migrateInterfaceLanguage({language:'system'}),{data:{interface_language:'system'},changed:true});
  const current={interface_language:'fr',languageCode:'zh-TW'};
  assert.deepEqual(migrateInterfaceLanguage(current),{data:current,changed:false});
  assert.deepEqual(migrateInterfaceLanguage([]),{data:[],changed:false});
});

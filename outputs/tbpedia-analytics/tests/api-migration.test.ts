import test from 'node:test';
import assert from 'node:assert/strict';
import {DEFAULT_API,LEGACY_API,migrateApiUrl} from '../shared/api';

test('API migration preserves reader settings and verified receipts without mutating input',()=>{
  const receipt={hash:'verified',synced_at:'2026-10-18T00:00:00Z'};
  const source={api_url:LEGACY_API+'/',reader_id:'reader',stored_token:'placeholder',local_upload_enabled:false,receipts:{[LEGACY_API+'|reader|note']:receipt,'https://other.example|reader|note':receipt}};
  const original=structuredClone(source);
  const result=migrateApiUrl(source);
  assert.deepEqual(result,{changed:true,data:{...source,api_url:DEFAULT_API,receipts:{[DEFAULT_API+'|reader|note']:receipt,'https://other.example|reader|note':receipt}}});
  assert.deepEqual(source,original);
  assert.equal(migrateApiUrl(result.data).changed,false);
});

test('API migration preserves custom endpoints and existing canonical receipts',()=>{
  for(const value of [{api_url:'https://custom.example'},{api_url:LEGACY_API+'/unexpected'},{},null,[]])assert.deepEqual(migrateApiUrl(value),{data:value,changed:false});
  const current={hash:'new'};
  const result=migrateApiUrl({api_url:LEGACY_API,receipts:{[LEGACY_API+'|reader|note']:{hash:'old'},[DEFAULT_API+'|reader|note']:current}});
  assert.deepEqual((result.data as {receipts:unknown}).receipts,{[DEFAULT_API+'|reader|note']:current});
});

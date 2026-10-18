import test from 'node:test';
import assert from 'node:assert/strict';
import {SCAN_FOLDERS,inScanScope} from '../plugin/scan-scope';

test('all collection folders and nested notes are included in both scripts',()=>{
  assert.equal(SCAN_FOLDERS.length,18);
  assert.equal(new Set(SCAN_FOLDERS).size,18);
  for(const folder of SCAN_FOLDERS){
    assert.equal(inScanScope(`${folder}/article.md`),true,folder);
    assert.equal(inScanScope(`${folder}/book/chapter.md`),true,folder);
    assert.equal(inScanScope(`${folder}\\book\\chapter.md`),true,folder);
  }
  assert.equal(inScanScope('09 莲香上师\u200b\u200b/article.md'),true);
  for(const path of ['article.md','03 經藏部','03 經藏部備份/article.md','archive/03 經藏部/article.md','11 私人筆記/article.md']){
    assert.equal(inScanScope(path),false,path);
  }
});

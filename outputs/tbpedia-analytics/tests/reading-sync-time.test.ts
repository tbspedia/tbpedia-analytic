import test from 'node:test';
import assert from 'node:assert/strict';
import {readingUpdatedAt,markReadingSynced,trackedFingerprint,fromFrontmatter,toFrontmatter} from '../shared/frontmatter';
import {defaults,snapshotHash} from '../shared/schema';
const savedAt='2026-10-18T01:00:00.000Z',syncedAt='2026-10-18T02:00:00.000Z';
function note(){return {...toFrontmatter(defaults()),tbpedia_content_id:'TBP-154-C00',tbpedia_reading_updated_at:savedAt};}
test('successful sync records server time separately and keeps local save time and reading hash',async()=>{
 const fm:Record<string,unknown>=note();const fingerprint=trackedFingerprint(fm);const before=await snapshotHash('TBP-154-C00',defaults());
 assert.equal(readingUpdatedAt(fm),savedAt);
 assert.equal(markReadingSynced(fm,fingerprint,savedAt,syncedAt),true);
 assert.equal(fm.tbpedia_reading_updated_at,savedAt);assert.equal(fm.tbpedia_reading_sync_at,syncedAt);
 assert.equal(trackedFingerprint(fm),fingerprint);assert.equal(await snapshotHash('TBP-154-C00',fromFrontmatter(fm)),before);
});
test('a local edit or re-save during upload is never marked as synchronized',()=>{
 for(const change of [toFrontmatter({...defaults(),reading_reflection:'New reflection'}),{tbpedia_reading_updated_at:'2026-10-18T01:30:00.000Z'}]){
 const fm:Record<string,unknown>=note();const fingerprint=trackedFingerprint(fm);Object.assign(fm,change);
 assert.equal(markReadingSynced(fm,fingerprint,savedAt,syncedAt),false);assert.equal(Object.hasOwn(fm,'tbpedia_reading_sync_at'),false);
 }
});
test('missing and invalid save timestamps cannot be sent; parsed YAML dates are supported',()=>{
 for(const v of [undefined,null,'','invalid'])assert.throws(()=>readingUpdatedAt({tbpedia_reading_updated_at:v}));
 assert.equal(readingUpdatedAt({tbpedia_reading_updated_at:new Date(savedAt)}),savedAt);
});


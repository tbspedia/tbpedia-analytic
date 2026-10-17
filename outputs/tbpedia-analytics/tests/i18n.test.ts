import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { backendMessage, catalogs, fieldLabel, LANGUAGES, labels, monthName, resolveLocale, languagePreference, getLocale, setLocale, t, validationReason } from '../plugin/i18n';
import { DEPTH_LABELS, FRONTMATTER_KEYS, READER_LABELS, RECOMMENDATION_LABELS, SEX_LABELS, STATUS_LABELS, defaults, readingSchema, profileSchema } from '../shared/schema';
import { fromFrontmatter, toFrontmatter } from '../shared/frontmatter';

const keys=Object.keys(catalogs.en).sort();
const placeholders=(text:string)=>[...text.matchAll(/\{([a-zA-Z]+)\}/g)].map(m=>m[1]).sort();

test('all fourteen catalogs are complete and preserve interpolation parameters',()=>{
  assert.deepEqual(Object.keys(LANGUAGES),['en','ja','fr','es','de','nl','sv','ko','zh-TW','zh-CN','vi','id','th','bo']);
  for(const [locale,catalog] of Object.entries(catalogs)){
    assert.deepEqual(Object.keys(catalog).sort(),keys,locale);
    for(const key of keys){
      assert.ok(catalog[key]?.trim(),`${locale}: ${key}`);
      assert.deepEqual(placeholders(catalog[key]!),placeholders(catalogs.en[key]!),`${locale}: ${key}`);
      assert.doesNotMatch(catalog[key]!,/ZXQ\d+QXZ/i);
    }
  }
});

test('locale resolution handles Obsidian codes, regions, scripts and unknown languages',()=>{
  for(const [input,expected] of Object.entries({'zh-TW':'zh-TW','zh_HK':'zh-TW','zh-Hant':'zh-TW','zh':'zh-CN','zh-SG':'zh-CN','zh-Hans':'zh-CN','en-GB':'en','ja-JP':'ja','bo-CN':'bo','xx':'en'}))assert.equal(resolveLocale(input),expected);
  assert.equal(resolveLocale(null),'en');
});

test('follow system remains a saved preference and manual choices override the system language',()=>{
  assert.equal(languagePreference(undefined),'system');
  assert.equal(languagePreference('system'),'system');
  const saved=JSON.parse(JSON.stringify({language:languagePreference('system')}));
  assert.equal(setLocale(saved.language,'ja'),'ja');
  assert.equal(setLocale(saved.language,'zh-Hant'),'zh-TW');
  assert.equal(setLocale(saved.language,'unsupported'),'en');
  assert.equal(setLocale(undefined,'fr-FR'),'fr');
  assert.equal(languagePreference('de'),'de');
  assert.equal(setLocale('de','ja'),'de');
  assert.equal(getLocale(),'de');
});

test('all option and property labels are localized without changing saved values',()=>{
  const original=toFrontmatter({...defaults(),reading_status:'COMPLETED',my_reader_types:['PRACTITIONER']});
  for(const locale of Object.keys(LANGUAGES)){
    setLocale(locale);
    for(const options of [STATUS_LABELS,DEPTH_LABELS,READER_LABELS,RECOMMENDATION_LABELS,SEX_LABELS]){
      assert.deepEqual(Object.keys(labels(options)),Object.keys(options));
      for(const [code,label] of Object.entries(options))assert.equal(labels(options)[code],catalogs[resolveLocale(locale)][label]);
    }
    for(const label of Object.values(FRONTMATTER_KEYS))assert.ok(t(label));
    assert.deepEqual(toFrontmatter(fromFrontmatter(original)),original);
    for(let month=1;month<=12;month++)assert.ok(monthName(month));
  }
});

test('literal UI translation calls exist in every catalog',()=>{
  const source=readFileSync(new URL('../plugin/main.ts',import.meta.url),'utf8');
  for(const match of source.matchAll(/\btr\(['"]([^'"\n]+)['"]/g))assert.ok(Object.hasOwn(catalogs.en,match[1]!),match[1]!);
  assert.doesNotMatch(source,/\.addOptions\((?:STATUS|DEPTH|READER|RECOMMENDATION|SEX)_LABELS\)/);
  assert.doesNotMatch(source,/\btext:\s*['"][\u3400-\u9fff]/u);
  assert.doesNotMatch(source,/\.set(?:Name|Desc|ButtonText)\(['"][\u3400-\u9fff]/u);
});

test('all backend error codes have localized messages and unknown codes stay safe',()=>{
  const files=['../worker/src/index.ts','../worker/src/errors.ts','../worker/src/nocodb.ts'];
  const codes=new Set(files.flatMap(file=>[...readFileSync(new URL(file,import.meta.url),'utf8').matchAll(/new ApiError\(\d+,'([^']+)'/g)].map(m=>m[1]!)));
  for(const code of codes)assert.ok(Object.hasOwn(catalogs.en,`backend.${code}`),code);
  for(const locale of Object.keys(LANGUAGES)){
    setLocale(locale);
    for(const code of codes)assert.equal(backendMessage(code),t(`backend.${code}`));
    assert.equal(backendMessage('unknown backend details'),t('backend.INTERNAL_ERROR'));
  }
});

test('validation messages do not expose raw Zod English or internal property paths',()=>{
  for(const locale of ['ja','fr','zh-TW','bo']){
    setLocale(locale);
    const result=readingSchema.safeParse({...defaults(),reading_count:-1,completed_date:'2026-02-30'});
    assert.equal(result.success,false);
    if(!result.success){
      const reasons=result.error.issues.map(validationReason);
      assert.deepEqual(reasons,[t('tooSmall',{limit:0}),t('invalidDate')]);
    }
    const profile=profileSchema.safeParse({});
    if(!profile.success)for(const issue of profile.error.issues)assert.ok(validationReason(issue));
    assert.equal(fieldLabel(['profile','birth_year']),t('field.birth_year'));
    assert.equal(fieldLabel(['unknown_internal_property']),t('validation'));
    assert.equal(validationReason({code:'invalid_format',message:'Invalid email',format:'email'}),t('invalidEmail'));
  }
});

test('interpolated values are preserved verbatim and only numeric counters are formatted',()=>{
  for(const locale of Object.keys(LANGUAGES)){
    setLocale(locale);
    const nickname='{total} <reader> $&';
    assert.ok(t('connected',{name:nickname}).includes(nickname));
    assert.doesNotMatch(t('summary',{saved:1,unchanged:2,invalid:3,remaining:4}),/\{(?:saved|unchanged|invalid|remaining)\}/);
  }
});

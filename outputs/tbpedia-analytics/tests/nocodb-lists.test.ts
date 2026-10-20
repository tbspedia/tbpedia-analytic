import test from 'node:test';
import assert from 'node:assert/strict';
import {defaults} from '../shared/schema';
import {readingFields,readReading} from '../worker/src/nocodb';

test('multi-select lists round-trip as native arrays, including Chinese and quotes',()=>{
  const values={...defaults(),my_keywords:['空性','引號"','逗，號'],my_subtopics:['口訣','菩提心'],my_reader_types:['GENERAL' as const,'PRACTITIONER' as const]};
  const fields=readingFields(values);
  assert.deepEqual(fields.my_keywords,values.my_keywords);
  assert.deepEqual(readReading(fields),values);
});
test('empty multi-select cells support null and arrays, with legacy JSON compatibility',()=>{
  const fields=readingFields(defaults());
  for(const empty of [null,[],'[]'])assert.deepEqual(readReading({...fields,my_keywords:empty,my_subtopics:empty,my_reader_types:empty}),defaults());
  assert.deepEqual(readReading({...fields,my_keywords:'["菩提心"]'}).my_keywords,['菩提心']);
  for(const invalid of [undefined,'not JSON','{}',[123]])assert.throws(()=>readReading({...fields,my_keywords:invalid}));
});

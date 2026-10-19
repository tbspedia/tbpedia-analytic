import test from 'node:test';
import assert from 'node:assert/strict';
import {bindReflectionInput, reflectionLength} from '../plugin/reading-reflection';

function editor(initial='') {
  const listeners=new Map<string,()=>void>();
  const input={value:initial,selectionStart:initial.length,selectionEnd:initial.length,
    addEventListener:(event:string,callback:()=>void)=>listeners.set(event,callback),
    setSelectionRange(start:number,end:number){this.selectionStart=start;this.selectionEnd=end;}};
  let remaining=0,saved='';
  bindReflectionInput(input as unknown as HTMLTextAreaElement,(value,count)=>{saved=value;remaining=count;});
  return {input,fire:(event='input')=>listeners.get(event)!(),get remaining(){return remaining;},get saved(){return saved;}};
}

test('reflection counter handles Chinese, Latin, whitespace and whole Unicode characters',()=>{
  const p=editor();assert.equal(p.remaining,300);
  p.input.value='中文 A\n';p.fire();assert.equal(p.remaining,295);
  const combined='學👩‍👩‍👧‍👦e\u0301𠀀';assert.equal(reflectionLength(combined),4);
  p.input.value=combined.repeat(75);p.fire();assert.equal(p.remaining,0);assert.equal(p.saved,combined.repeat(75));
  p.input.value+='新';p.fire();assert.equal(p.remaining,0);assert.equal(p.saved,combined.repeat(75));
  p.input.value='';p.fire();assert.equal(p.remaining,300);assert.equal(p.saved,'');
});

test('typing and pasting beyond 300 characters are limited without breaking a grapheme',()=>{
  for(const character of ['字','a','🌸','e\u0301']){
    const p=editor();p.input.value=character.repeat(301);p.input.selectionStart=p.input.selectionEnd=p.input.value.length;p.fire();
    assert.equal(p.saved,character.repeat(300));assert.equal(p.remaining,0);
    assert.equal(p.input.selectionStart,p.saved.length);
  }
});

test('Chinese input composition finishes before applying the limit',()=>{
  const p=editor('字'.repeat(299));p.fire('compositionstart');
  p.input.value+='拼音';p.fire();assert.equal(p.input.value,'字'.repeat(299)+'拼音');
  p.input.value='字'.repeat(299)+'中';p.fire('compositionend');assert.equal(p.remaining,0);assert.equal(p.saved,'字'.repeat(299)+'中');
  p.fire('compositionstart');p.input.value+='文';p.fire('compositionend');assert.equal(p.remaining,0);assert.equal(p.saved,'字'.repeat(299)+'中');
});

test('opening an older long reflection preserves its text until the user edits',()=>{
  const p=editor('字'.repeat(350));assert.equal(p.saved,'字'.repeat(350));assert.equal(p.remaining,-50);
  p.input.value='修改';p.fire();assert.equal(p.saved,'修改');assert.equal(p.remaining,298);
});

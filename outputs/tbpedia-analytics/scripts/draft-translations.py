"""Regenerate translation drafts from public UI copy only; no runtime network dependency."""
import concurrent.futures
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / 'plugin' / 'locales'
BASE = json.loads((ROOT / 'en.json').read_text(encoding='utf-8'))
LANGUAGES = {'ja':'ja','fr':'fr','es':'es','de':'de','nl':'nl','sv':'sv','ko':'ko','zh-TW':'zh-TW','zh-CN':'zh-CN','vi':'vi','id':'id','th':'th','bo':'bo'}

def translate(text, language):
    placeholders = list(dict.fromkeys(re.findall(r'\{[a-zA-Z]+\}', text)))
    for i, token in enumerate(placeholders):
        text = text.replace(token, f'ZXQ{i}QXZ')
    query = urllib.parse.urlencode({'client':'gtx','sl':'en','tl':language,'dt':'t','q':text})
    for attempt in range(4):
        try:
            with urllib.request.urlopen('https://translate.googleapis.com/translate_a/single?'+query, timeout=30) as response:
                data = json.load(response)
            result = ''.join(part[0] for part in data[0] if part[0])
            for i, token in enumerate(placeholders):
                marker=f'ZXQ{i}QXZ'
                if marker.lower() not in result.lower():
                    raise ValueError('Translation lost interpolation marker')
                result = re.sub(marker, lambda _:token, result, flags=re.I)
            return result
        except Exception:
            if attempt==3: raise
            time.sleep(attempt+1)

def language_job(pair):
    locale, language = pair
    dest=ROOT / f'{locale}.json'
    values=json.loads(dest.read_text(encoding='utf-8')) if dest.exists() else {}
    missing=[]
    for key,value in BASE.items():
        if locale=='zh-TW' and re.search('[\u3400-\u9fff]',key): values[key]=key
        elif key not in values: missing.append((key,value))
    # Newlines separate independent UI messages, with placeholders protected above.
    for start in range(0,len(missing),10):
        batch=missing[start:start+10]
        result=translate('\n'.join(value for _,value in batch),language).split('\n')
        if len(result)!=len(batch):
            result=[translate(value,language) for _,value in batch]
        for (key,_),value in zip(batch,result): values[key]=value.strip()
        dest.write_text(json.dumps(values,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(f'{locale}: {len(values)} messages',flush=True)

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
    list(executor.map(language_job, LANGUAGES.items()))

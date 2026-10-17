import en from './locales/en.json';
import ja from './locales/ja.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import de from './locales/de.json';
import nl from './locales/nl.json';
import sv from './locales/sv.json';
import ko from './locales/ko.json';
import zhTW from './locales/zh-TW.json';
import zhCN from './locales/zh-CN.json';
import vi from './locales/vi.json';
import id from './locales/id.json';
import th from './locales/th.json';
import bo from './locales/bo.json';

export const LANGUAGES = {
  en:'English', ja:'日本語', fr:'Français', es:'Español', de:'Deutsch',
  nl:'Nederlands', sv:'Svenska', ko:'한국어', 'zh-TW':'繁體中文',
  'zh-CN':'简体中文', vi:'Tiếng Việt', id:'Bahasa Indonesia', th:'ไทย', bo:'བོད་ཡིག'
} as const;
export type Locale = keyof typeof LANGUAGES;
export type LanguagePreference = Locale | 'system';
export type MessageKey = keyof typeof en;
export const catalogs: Record<Locale, Record<string,string>> = {en,ja,fr,es,de,nl,sv,ko,'zh-TW':zhTW,'zh-CN':zhCN,vi,id,th,bo};
let locale:Locale='en';
export function resolveLocale(value:unknown):Locale {
  if(typeof value!=='string')return 'en';
  const code=value.replaceAll('_','-').toLowerCase();
  if(/^zh(?:-|$)/.test(code))return /(?:tw|hk|mo|hant)/.test(code)?'zh-TW':'zh-CN';
  return (Object.keys(LANGUAGES) as Locale[]).find(key=>key.toLowerCase()===code)
    ?? (Object.keys(LANGUAGES) as Locale[]).find(key=>key===code.split('-')[0]) ?? 'en';
}
export function languagePreference(value:unknown):LanguagePreference {
  return value===undefined||value===null||value==='system'?'system':resolveLocale(value);
}
export function setLocale(value:unknown,systemLanguage?:string){
  const preference=languagePreference(value);
  locale=resolveLocale(preference==='system'?systemLanguage:preference);
  return locale;
}
export function getLocale(){return locale;}
export function intlLocale(){return locale==='zh-TW'?'zh-Hant':locale==='zh-CN'?'zh-Hans':locale;}
export function number(value:number){return new Intl.NumberFormat(intlLocale()).format(value);}
export function t(key:MessageKey|string,params:Record<string,string|number>={}):string {
  const text=catalogs[locale][key]??catalogs.en[key];
  if(text===undefined)throw new Error(`Unknown translation key: ${key}`);
  return text.replace(/\{([a-zA-Z]+)\}/g,(token,name:string)=>{
    const value=params[name];
    return value===undefined?token:typeof value==='number'?number(value):value;
  });
}
export function labels(values:Record<string,string>):Record<string,string>{
  return Object.fromEntries(Object.entries(values).map(([code,label])=>[code,t(label)]));
}
export function monthName(month:number):string {
  return new Intl.DateTimeFormat(intlLocale(),{month:'long',timeZone:'UTC'}).format(new Date(Date.UTC(2000,month-1,1)));
}
export function regionName(code:string):string {
  // Older Obsidian/Electron builds may lack a requested ICU locale.
  try{return new Intl.DisplayNames([intlLocale()],{type:'region'}).of(code)??code;}catch{return code;}
}

export class UiError extends Error {}
export function backendMessage(code:string):string {
  const key=`backend.${code}`;
  return t(Object.hasOwn(en,key)?key:'backend.INTERNAL_ERROR');
}
export function fieldLabel(path:readonly PropertyKey[]):string {
  const field=String(path.filter(part=>typeof part!=='number').at(-1)??'');
  return t(Object.hasOwn(en,`field.${field}`)?`field.${field}`:'validation');
}
export function validationReason(issue:{code:string;message:string;minimum?:number|bigint;maximum?:number|bigint;format?:string}):string {
  const custom:Record<string,MessageKey>={
    'Invalid calendar date':'invalidDate',
    'Birth year cannot be in the future':'futureBirthYear',
    'Unknown country code':'unknownCountry',
    'Birth year is required when birth month is supplied':'birthYearRequired'
  };
  if(custom[issue.message])return t(custom[issue.message]!);
  if(issue.code==='too_small')return t('tooSmall',{limit:Number(issue.minimum)});
  if(issue.code==='too_big')return t('tooLarge',{limit:Number(issue.maximum)});
  if(issue.code==='invalid_value')return t('invalidChoice');
  if(issue.code==='invalid_type')return t('invalidType');
  if(issue.format==='email')return t('invalidEmail');
  return t('invalidField');
}

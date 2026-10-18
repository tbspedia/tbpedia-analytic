export function migrateInterfaceLanguage(value:unknown):{data:unknown;changed:boolean}{
  if(typeof value!=='object'||value===null||Array.isArray(value))return {data:value,changed:false};
  const source=value as Record<string,unknown>;
  const data={...source};
  const legacy=Object.hasOwn(source,'language');
  const canonical=Object.hasOwn(source,'interface_language');
  if(!canonical)data.interface_language=source.language??'system';
  delete data.language;
  return {data,changed:legacy||!canonical};
}

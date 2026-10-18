export const DEFAULT_API='https://cfanalytics.tbpedia.org';
export const LEGACY_API='https://tbpedia-analytics.tbspedia.workers.dev';

// Both hostnames serve the same Worker and database. Preserve verified receipts.
export function migrateApiUrl(value:unknown):{data:unknown;changed:boolean}{
  if(typeof value!=='object'||value===null||Array.isArray(value))return {data:value,changed:false};
  const source=value as Record<string,unknown>;
  if(typeof source.api_url!=='string'||source.api_url.replace(/\/$/,'')!==LEGACY_API)return {data:value,changed:false};
  const data={...source,api_url:DEFAULT_API};
  if(typeof source.receipts==='object'&&source.receipts!==null&&!Array.isArray(source.receipts)){
    const receipts={...source.receipts as Record<string,unknown>};
    for(const key of Object.keys(receipts)){
      if(!key.startsWith(LEGACY_API+'|'))continue;
      const replacement=DEFAULT_API+key.slice(LEGACY_API.length);
      if(!Object.hasOwn(receipts,replacement))receipts[replacement]=receipts[key];
      delete receipts[key];
    }
    Object.assign(data,{receipts});
  }
  return {data,changed:true};
}

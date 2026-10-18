import { readingSchema, READING_KEYS, type ReadingValues } from '../../shared/schema';
import { ApiError, boundedJson, object } from './errors';

export type NocoRow={id:string|number;fields:Record<string,unknown>};
export type Fetcher=(input:string,init?:RequestInit)=>Promise<Response>;
export class NocoDB {
  private signal=AbortSignal.timeout(25000);
  constructor(private env:Env,private fetcher:Fetcher=(input,init)=>fetch(input,init)){}
  private async call(method:string,table:string,suffix='',body?:unknown,query?:URLSearchParams):Promise<unknown>{
    if(!/^[a-zA-Z0-9]+$/.test(table))throw new ApiError(503,'NOT_CONFIGURED','The database is not configured.');
    const url=new URL(`/api/v3/data/${this.env.NOCODB_BASE_ID}/${table}/records${suffix}`,this.env.NOCODB_URL);
    if(query)url.search=query.toString();
    let response:Response;
    try {response=await this.fetcher(url.toString(),{method,headers:{'xc-token':this.env.NOCODB_API_TOKEN,'content-type':'application/json'},body:body===undefined?undefined:JSON.stringify(body),redirect:'manual',signal:this.signal});}
    catch(error){if(this.signal.aborted||(error instanceof Error&&['AbortError','TimeoutError'].includes(error.name)))throw new ApiError(504,'BACKEND_TIMEOUT','The database response is uncertain. Retry manually after recovery.');const detail=error instanceof Error?error.message.replace(/https?:\/\/\S+/g,'[url]').replace(/[A-Za-z0-9_-]{28,}/g,'[redacted]').slice(0,160):'unknown';console.warn(JSON.stringify({code:'NOCODB_FETCH_ERROR',detail}));throw new ApiError(502,'BACKEND_ERROR','The database could not be reached.');}
    if(!response.ok){await response.body?.cancel();if(response.status===429)throw new ApiError(429,'RATE_LIMITED','The database is busy. Retry manually later.');throw new ApiError(502,'BACKEND_ERROR','The database rejected the operation.');}
    try{return await boundedJson(response,2*1024*1024);}catch{if(this.signal.aborted)throw new ApiError(504,'BACKEND_TIMEOUT','The database response timed out. Retry manually later.');throw new ApiError(502,'BACKEND_ERROR','The database returned an invalid or oversized response.');}
  }
  async find(table:string,conditions:Record<string,string>):Promise<NocoRow[]>{
    // All equality values come from validated IDs or a hexadecimal token digest.
    for(const [key,value]of Object.entries(conditions))if(!/^[a-z_]+$/.test(key)||!/^[A-Za-z0-9_-]+$/.test(value))throw new ApiError(400,'BAD_REQUEST','Invalid lookup.');
    const where=Object.entries(conditions).map(([key,value])=>`(${key},eq,${value})`).join('~and');
    const data=await this.call('GET',table,'',undefined,new URLSearchParams({where,pageSize:'2'}));
    if(!object(data)||!Array.isArray(data.records))throw new ApiError(502,'BACKEND_ERROR','Unexpected database response.');
    return data.records.map(parseRow);
  }
  async get(table:string,id:string|number):Promise<NocoRow>{return parseRow(await this.call('GET',table,`/${encodeURIComponent(String(id))}`));}
  async update(table:string,id:string|number,fields:Record<string,unknown>):Promise<void>{await this.call('PATCH',table,'',[{id,fields}]);}
  async createReader(fields:Record<string,unknown>):Promise<void>{await this.call('POST',this.env.READERS_TABLE_ID,'',[{fields}]);}
  async upsertReading(fields:Record<string,unknown>):Promise<NocoRow>{
    const result=await this.call('POST',this.env.READING_TABLE_ID,'/upsert',{fieldsToMergeOn:['reader_id','content_id'],records:[{fields}]});
    if(!object(result)||!Array.isArray(result.records)||result.records.length!==1)throw new ApiError(502,'BACKEND_ERROR','The save could not be verified.');
    const row=result.records[0];
    if(!object(row)||(typeof row.id!=='string'&&typeof row.id!=='number'))throw new ApiError(502,'BACKEND_ERROR','The saved record has no ID.');
    return this.get(this.env.READING_TABLE_ID,row.id);
  }
}
function parseRow(value:unknown):NocoRow{
  if(!object(value)||(typeof value.id!=='number'&&typeof value.id!=='string')||!object(value.fields))throw new ApiError(502,'BACKEND_ERROR','Unexpected database record.');
  return {id:value.id,fields:value.fields};
}
export function oneRow(rows:NocoRow[],missing:ApiError):NocoRow{
  if(rows.length>1)throw new ApiError(409,'DUPLICATE_KEY','Duplicate database keys require administrator repair.');
  if(!rows[0])throw missing;
  return rows[0];
}
export function booleanValue(value:unknown):boolean{
  if(value===true||value===1)return true;
  if(value===false||value===0||value===null||value===undefined)return false;
  throw new ApiError(502,'BACKEND_ERROR','Unexpected database checkbox.');
}
export function readingFields(values:ReadingValues):Record<string,unknown>{
  return Object.fromEntries(READING_KEYS.map(key=>[key,Array.isArray(values[key])?JSON.stringify(values[key]):values[key]]));
}
export function readReading(fields:Record<string,unknown>):ReadingValues{
  const normalized:Record<string,unknown>={};
  for(const key of READING_KEYS){
    let value=fields[key];
    if(['my_keywords','my_reader_types','my_subtopics'].includes(key)){
      if(typeof value!=='string')throw new ApiError(502,'BACKEND_ERROR','A saved list could not be verified.');
      try{value=JSON.parse(value) as unknown;}catch{throw new ApiError(502,'BACKEND_ERROR','A saved list could not be parsed.');}
    }else if(key==='planned_reading')value=booleanValue(value);
    else if(value===''||value===undefined)value=null;
    if(key.endsWith('_date')&&typeof value==='string'&&value.includes('T'))value=value.slice(0,10);
    normalized[key]=value;
  }
  const parsed=readingSchema.safeParse(normalized);
  if(!parsed.success)throw new ApiError(502,'BACKEND_ERROR','Saved reading fields did not verify.');
  return parsed.data;
}

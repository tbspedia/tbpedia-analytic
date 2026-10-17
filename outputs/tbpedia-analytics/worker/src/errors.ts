export class ApiError extends Error {
  constructor(public status:number,public code:string,message:string){super(message);}
}
export function object(value:unknown): value is Record<string,unknown> { return typeof value==='object'&&value!==null&&!Array.isArray(value); }
export async function boundedJson(response:Response,maxBytes:number):Promise<unknown> {
  if(Number(response.headers.get('content-length'))>maxBytes) throw new ApiError(413,'PAYLOAD_TOO_LARGE','The payload exceeds the size limit.');
  if(!response.body) throw new ApiError(400,'BAD_REQUEST','JSON body is required.');
  const reader=response.body.getReader();let size=0;const chunks:Uint8Array[]=[];
  try {while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>maxBytes){await reader.cancel();throw new ApiError(413,'PAYLOAD_TOO_LARGE','The payload exceeds the size limit.');}chunks.push(value);}}
  finally{reader.releaseLock();}
  const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
  try{return JSON.parse(new TextDecoder().decode(bytes)) as unknown;}catch{throw new ApiError(400,'BAD_REQUEST','Malformed JSON.');}
}
export async function requestJson(request:Request,maxBytes:number):Promise<unknown> {
  if(!request.headers.get('content-type')?.toLowerCase().startsWith('application/json'))throw new ApiError(415,'JSON_REQUIRED','Use application/json.');
  return boundedJson(new Response(request.body,{headers:request.headers}),maxBytes);
}

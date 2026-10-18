import { Plugin, PluginSettingTab, Modal, Setting, Notice, TFile, Platform, getFrontMatterInfo, getLanguage, parseYaml, requestUrl, type App } from 'obsidian';
import * as z from 'zod';
import { t as tr, labels, LANGUAGES, setLocale, languagePreference, intlLocale, monthName, number, regionName, UiError, backendMessage, fieldLabel, validationReason } from './i18n';
import { contentIdSchema, COUNTRY_CODES, defaults, DEPTH_LABELS, emptyProfile, FRONTMATTER_KEYS, PROFILE_NOTICE_VERSION, profileSchema, READER_LABELS, READING_NOTICE_VERSION, readingSchema, RECOMMENDATION_LABELS, SEX_LABELS, snapshotHash, statusAction, STATUS_LABELS, type ReadingValues, type ReadingKey, type ReaderProfile } from '../shared/schema';
import { fromFrontmatter, toFrontmatter, trackedFingerprint, type Frontmatter } from '../shared/frontmatter';
import { collectClientMetadata } from '../shared/client-metadata';
import {readUpdaterMetadata,updaterMetadataSchema} from '../shared/updater-metadata';
import {loadUpdaterMetadata,loadSavedUpdaterMetadata} from './updater';
import {migrateInterfaceLanguage} from './settings-migrations';

const DEFAULT_API='https://tbpedia-analytics.tbspedia.workers.dev';
const receiptSchema=z.object({hash:z.string(),synced_at:z.string()});
const dataSchema=z.object({...updaterMetadataSchema.shape,interface_language:z.string().default('system'),api_url:z.string().default(DEFAULT_API),reader_id:z.string().nullable().default(null),profile:profileSchema.safeExtend({nickname:z.string().max(100)}).default(emptyProfile),profile_notice_version:z.string().nullable().default(null),reading_notice_version:z.string().nullable().default(null),local_upload_enabled:z.boolean().default(false),remember_token:z.boolean().default(false),stored_token:z.string().default(''),folders:z.array(z.string()).default(['01 文集部','02 開示部']),receipts:z.record(z.string(),receiptSchema).default({}),profile_uploaded_hash:z.string().nullable().default(null)});
type PluginData=z.infer<typeof dataSchema>;
const meSchema=z.object({reader_id:z.uuid(),profile:profileSchema,cloud_sync_enabled:z.boolean(),profile_consent_version:z.string().nullable(),reading_consent_version:z.string().nullable(),required_notices:z.object({profile_version:z.string(),reading_version:z.string(),profile_text:z.string(),reading_text:z.string()})});
type Me=z.infer<typeof meSchema>;
const savedSchema=z.object({content_id:contentIdSchema,status:z.literal('saved'),snapshot_hash:z.string().regex(/^[a-f0-9]{64}$/),synced_at:z.iso.datetime()});
type NoteInfo={file:TFile;fm?:Frontmatter;id?:string;error?:string};
export class GatewayError extends Error{constructor(public status:number,public code:string){super(backendMessage(code));}}
function noticeSupported(version:string|undefined,current:string){return version===undefined||version===current;}
function record(value:unknown):value is Record<string,unknown>{return typeof value==='object'&&value!==null&&!Array.isArray(value);}
function noteFrontmatter(text:string):Frontmatter{
  const info=getFrontMatterInfo(text);if(!info.exists)return {};
  const parsed:unknown=parseYaml(info.frontmatter);
  if(parsed===null||parsed===undefined)return {};
  if(!record(parsed))throw new UiError(tr("文章屬性必須是 YAML 物件。"));
  return parsed;
}
function message(error:unknown):string{
  if(error instanceof z.ZodError)return error.issues.map(i=>`${FRONTMATTER_KEYS[i.path.at(-1) as ReadingKey]?tr(FRONTMATTER_KEYS[i.path.at(-1) as ReadingKey]):fieldLabel(i.path)}: ${validationReason(i)}`).join('\n');
  return error instanceof GatewayError?backendMessage(error.code):error instanceof UiError?error.message:tr("操作未完成，資料仍保存在本機。");
}

export default class TbpediaAnalytics extends Plugin{
  data:PluginData=dataSchema.parse({});token='';me:Me|null=null;busy=false;status!:HTMLElement;private persistTail:Promise<void>=Promise.resolve();
  async onload(){
    const loaded:unknown=await this.loadData();
    const migration=migrateInterfaceLanguage(loaded??{});
    this.data=dataSchema.parse(migration.data);setLocale(this.data.interface_language,getLanguage());this.token=this.data.remember_token?this.data.stored_token:'';
    this.status=this.addStatusBarItem();this.setStatus(tr("本機閱讀"));
    this.addSettingTab(new AnalyticsSettings(this.app,this));
    this.addRibbonIcon('book-open-check',tr("Tbpedia 閱讀資料"),()=>{void this.openReading();});
    this.addCommand({id:'open-reading',name:tr("開啟閱讀資料"),callback:()=>{void this.openReading();}});
    this.addCommand({id:'mark-reading',name:tr("標記為在讀"),callback:()=>{void this.quickStatus('READING');}});
    this.addCommand({id:'mark-completed',name:tr("標記為已讀"),callback:()=>{void this.quickStatus('COMPLETED');}});
    this.addCommand({id:'reread',name:tr("開始重讀"),callback:()=>{void this.quickStatus('READING');}});
    this.addCommand({id:'sync-note',name:tr("同步目前文章"),callback:()=>{const f=this.app.workspace.getActiveFile();if(f)void this.runSync([f],true);}});
    this.addCommand({id:'sync-changed',name:tr("同步已變更文章"),callback:()=>{void this.previewSync();}});
    try{if(migration.changed)await this.persist();await this.refreshUpdaterMetadata();}catch(e){new Notice(message(e),10000);}
  }
  async refreshUpdaterMetadata(){
    const metadata=await loadUpdaterMetadata(this.app.vault.adapter,this.app.vault.configDir);
    if(metadata!==null&&JSON.stringify(readUpdaterMetadata(this.data))!==JSON.stringify(metadata)){
      Object.assign(this.data,metadata);await this.persist();
    }
    return readUpdaterMetadata(this.data);
  }
  async metadataForSync(){
    const current=await this.refreshUpdaterMetadata();
    await this.persistTail;
    const saved=await loadSavedUpdaterMetadata(()=>this.loadData());
    if(JSON.stringify(saved)!==JSON.stringify(current))throw new UiError(tr('analyticsMetadataReadError'));
    return saved;
  }
  setStatus(text:string){this.status?.setText(`Tbpedia · ${text}`);}
  async persist(){const snapshot=structuredClone({...this.data,stored_token:this.data.remember_token?this.token:''});const task=this.persistTail.then(()=>this.saveData(snapshot));this.persistTail=task.catch(()=>undefined);await task;}
  persistQuiet(){void this.persist().catch(()=>new Notice(tr("外掛設定無法儲存，請檢查 Vault 的寫入權限。")));}
  async api(path:string,method='GET',body?:unknown):Promise<unknown>{
    let url:URL;try{url=new URL(this.data.api_url);}catch{throw new UiError(tr('API 請填寫主機網址，不含路徑或查詢參數。'));}
    if(url.protocol!=='https:'&&!(url.protocol==='http:'&&['localhost','127.0.0.1'].includes(url.hostname)))throw new UiError(tr("API 必須使用 HTTPS。"));
    if(url.username||url.password||url.search||url.hash||url.pathname!=='/')throw new UiError(tr("API 請填寫主機網址，不含路徑或查詢參數。"));
    if(!/^[A-Za-z0-9_-]{43}$/.test(this.token))throw new UiError(tr("請輸入有效的讀者連線金鑰。"));
    let response;
    try{response=await requestUrl({url:new URL(path,url).toString(),method,headers:{Authorization:`Bearer ${this.token}`,'Content-Type':'application/json'},body:body===undefined?undefined:JSON.stringify(body),throw:false});}
    catch{throw new UiError(tr("無法連線；本機資料已保留。請稍後手動再試。"));}
    let value:unknown;try{value=response.json as unknown;}catch{throw new UiError(tr("伺服器未回傳有效資料。"));}
    if(response.status<200||response.status>=300){
      const error=record(value)&&record(value.error)?value.error:{};
      throw new GatewayError(response.status,typeof error.code==='string'?error.code:'API_ERROR');
    }
    return value;
  }
  async connect(){
    const me=meSchema.parse(await this.api('/v1/me'));
    if(this.data.reader_id&&this.data.reader_id!==me.reader_id)throw new UiError(tr("此 Vault 已連結另一位讀者。請使用獨立 Vault。"));
    this.data.reader_id=me.reader_id;this.me=me;await this.persist();
    new Notice(tr('connected',{name:me.profile.nickname}));
  }
  async uploadProfile(){
    if(!this.me)await this.connect();
    const required=this.me!.required_notices;
    if(!noticeSupported(required.profile_version,PROFILE_NOTICE_VERSION)||!noticeSupported(required.reading_version,READING_NOTICE_VERSION))throw new UiError(tr('noticeUnavailable'));
    if(this.data.profile_notice_version!==required.profile_version)throw new UiError(tr("請先閱讀並同意個人資料說明。"));
    if(this.data.local_upload_enabled&&this.data.reading_notice_version!==required.reading_version)throw new UiError(tr("請先同意閱讀資料上傳說明。"));
    const profile=profileSchema.parse(this.data.profile);await this.persist();
    const client_metadata=collectClientMetadata(Platform,this.manifest.version,typeof navigator==='undefined'?undefined:navigator.userAgent);
    await this.api('/v1/me','PATCH',{schema_version:1,profile,profile_notice_version:this.data.profile_notice_version,cloud_sync_enabled:this.data.local_upload_enabled,reading_notice_version:this.data.reading_notice_version,client_metadata});
    this.data.profile_uploaded_hash=JSON.stringify(profile);await this.persist();
    this.me=null;await this.connect();new Notice(tr("個人資料及雲端權限已更新。"));
  }
  async readNote(file:TFile){return noteFrontmatter(await this.app.vault.read(file));}
  async openReading(){
    try{const file=this.app.workspace.getActiveFile();if(!file||file.extension!=='md')throw new UiError(tr("請先開啟 Markdown 文章。"));const fm=await this.readNote(file);new ReadingModal(this,file,fm).open();}
    catch(e){new Notice(message(e),10000);}
  }
  async saveReading(file:TFile,values:ReadingValues,expected:string){
    const normalized=readingSchema.parse(values);
    await this.app.fileManager.processFrontMatter(file,fm=>{
      const current:Frontmatter=record(fm)?fm:{};
      if(trackedFingerprint(current)!==expected)throw new UiError(tr("文章閱讀資料已被其他操作修改，請重新開啟表單。"));
      Object.assign(fm,toFrontmatter(normalized));fm.tbpedia_reading_updated_at=new Date().toISOString();
    });
    this.setStatus(this.data.local_upload_enabled?tr("待上傳"):tr("已儲存於本機"));
  }
  async quickStatus(status:ReadingValues['reading_status']){
    try{const file=this.app.workspace.getActiveFile();if(!file||file.extension!=='md')throw new UiError(tr("請先開啟文章。"));const fm=await this.readNote(file);const values=fromFrontmatter(fm);const next=statusAction(values,status);if(JSON.stringify(next)===JSON.stringify(values)){new Notice(tr("此文章已是此閱讀狀態；如要再次完成，請先開始重讀。"));return;}await this.saveReading(file,next,trackedFingerprint(fm));new Notice(tr("閱讀資料已儲存於本機。"));}
    catch(e){new Notice(message(e),10000);}
  }
  inScope(path:string){return this.data.folders.length===0||this.data.folders.some(folder=>path.startsWith(folder.replace(/\/+$/,'')+'/'));}
  async scan():Promise<NoteInfo[]>{
    const result:NoteInfo[]=[];
    for(const file of this.app.vault.getMarkdownFiles()){
      const text=await this.app.vault.read(file);
      if(!text.includes('tbpedia_content_id:'))continue;
      try{const fm=noteFrontmatter(text);const id=contentIdSchema.parse(fm.tbpedia_content_id);result.push({file,fm,id});}
      catch(e){result.push({file,error:message(e)});}
    }
    return result;
  }
  receiptKey(id:string){return `${this.data.api_url.replace(/\/$/,'')}|${this.data.reader_id??'local'}|${id}`;}
  async pendingNotes(){
    const updaterMetadata=await this.metadataForSync();
    const notes=(await this.scan()).filter(n=>this.inScope(n.file.path));const pending:TFile[]=[];let unchanged=0,invalid=0;
    for(const note of notes){try{if(!note.id||!note.fm)throw new UiError(note.error);const hash=await snapshotHash(note.id,fromFrontmatter(note.fm),updaterMetadata);if(this.data.receipts[this.receiptKey(note.id)]?.hash===hash)unchanged++;else pending.push(note.file);}catch{invalid++;}}
    return {pending,unchanged,invalid};
  }
  async previewSync(){
    try{if(this.busy)throw new UiError(tr("同步正在進行。"));const result=await this.pendingNotes();new ConfirmModal(this.app,tr("手動上傳閱讀資料"),`${tr('preview',{pending:result.pending.length,unchanged:result.unchanged,invalid:result.invalid})} ${tr('updaterSyncNotice')}`,()=>this.runSync(result.pending,false)).open();}
    catch(e){new Notice(message(e),10000);}
  }
  async runSync(files:TFile[],force:boolean){
    if(this.busy){new Notice(tr("同步正在進行。"));return;}
    this.busy=true;let saved=0,unchanged=0,invalid=0,attempted=0;const issues:string[]=[];
    try{
      if(!this.data.local_upload_enabled)throw new UiError(tr("雲端上傳已停用。閱讀資料仍保存在本機。"));
      await this.connect();if(!noticeSupported(this.me?.required_notices.profile_version,PROFILE_NOTICE_VERSION)||!noticeSupported(this.me?.required_notices.reading_version,READING_NOTICE_VERSION))throw new UiError(tr('noticeUnavailable'));if(!this.me?.cloud_sync_enabled)throw new UiError(tr("請先在設定中儲存並上傳個人資料，以套用雲端權限。"));
      const uploadTarget=this.data.api_url;const uploadReader=this.data.reader_id;
      const updaterMetadata=await this.metadataForSync();
      const all=await this.scan();const counts=new Map<string,number>();for(const n of all)if(n.id)counts.set(n.id,(counts.get(n.id)??0)+1);
      for(const file of files){
        if(!this.data.local_upload_enabled||this.data.api_url!==uploadTarget||this.data.reader_id!==uploadReader){issues.push(tr("上傳權限或連線已變更；已停止後續上傳。"));break;}
        if(JSON.stringify(await this.metadataForSync())!==JSON.stringify(updaterMetadata)){issues.push(tr('updaterChanged'));break;}
        let id:string,values:ReadingValues,hash:string;
        try{const fm=await this.readNote(file);id=contentIdSchema.parse(fm.tbpedia_content_id);if(counts.get(id)!==1)throw new UiError(tr("Vault 中有重複內容編號，請先修正。"));values=fromFrontmatter(fm);hash=await snapshotHash(id,values,updaterMetadata);}
        catch(e){invalid++;attempted++;issues.push(`${file.basename}: ${message(e)}`);continue;}
        if(!force&&this.data.receipts[this.receiptKey(id)]?.hash===hash){unchanged++;attempted++;continue;}
        this.setStatus(tr('progress',{current:saved+1,total:files.length}));
        try{
          const result=savedSchema.parse(await this.api('/v1/reading/sync','POST',{schema_version:1,content_id:id,client_updated_at:new Date().toISOString(),values,updater_metadata:updaterMetadata}));
          if(result.content_id!==id||result.snapshot_hash!==hash)throw new UiError(tr("伺服器確認與送出的版本不同；尚未標記完成。"));
          this.data.receipts[this.receiptKey(id)]={hash,synced_at:result.synced_at};
          try{await this.persist();}catch{throw new UiError(tr("雲端已儲存，但本機同步記錄無法儲存；下次可以重新同步。"));}
          saved++;attempted++;
          if(await snapshotHash(id,fromFrontmatter(await this.readNote(file)),await this.metadataForSync())!==hash)issues.push(`${file.basename}: ${tr('changedDuringUpload')}`);
        }catch(e){issues.push(`${file.basename}: ${message(e)}`);break;}
      }
      const summary=tr('summary',{saved,unchanged,invalid,remaining:files.length-attempted});
      this.setStatus(issues.length?tr("需要檢查"):tr("手動同步完成"));
      new ResultModal(this.app,summary,issues).open();
    }catch(e){this.setStatus(tr("同步未完成"));new Notice(message(e),12000);}
    finally{this.busy=false;}
  }
}

class ConfirmModal extends Modal{
  constructor(app:App,private titleText:string,private detail:string,private action:()=>Promise<void>){super(app);}
  onOpen(){this.contentEl.lang=intlLocale();this.contentEl.createEl('h2',{text:this.titleText});this.contentEl.createEl('p',{text:this.detail});new Setting(this.contentEl).addButton(b=>b.setButtonText(tr("取消")).onClick(()=>this.close())).addButton(b=>b.setCta().setButtonText(tr("開始上傳")).onClick(()=>{this.close();void this.action();}));}
}
class ResultModal extends Modal{
  constructor(app:App,private summary:string,private issues:string[]){super(app);}
  onOpen(){this.contentEl.lang=intlLocale();this.contentEl.createEl('h2',{text:tr("同步結果")});this.contentEl.createEl('p',{text:this.summary});for(const issue of this.issues)this.contentEl.createEl('p',{text:issue,cls:'tbpa-error'});new Setting(this.contentEl).addButton(b=>b.setButtonText(tr("關閉")).onClick(()=>this.close()));}
}
class ReadingModal extends Modal{
  private values:ReadingValues;private expected:string;private saving=false;private countEdited=false;private explicitDates=new Set<ReadingKey>();
  constructor(private plugin:TbpediaAnalytics,private file:TFile,fm:Frontmatter){super(plugin.app);this.values=fromFrontmatter(fm);this.expected=trackedFingerprint(fm);}
  onOpen(){this.modalEl.addClass('tbpa-reading-modal');this.render();}
  private render(){
    const el=this.contentEl;el.empty();el.lang=intlLocale();el.addClass('tbpa-reading');el.createEl('h2',{text:this.file.basename});el.createEl('p',{text:tr("閱讀資料先儲存於本機。只有手動同步才會上傳。"),cls:'setting-item-description'});
    const error=el.createDiv({cls:'tbpa-error'});
    new Setting(el).setName(tr("計劃閱讀")).addToggle(t=>t.setValue(this.values.planned_reading).onChange(v=>{this.values.planned_reading=v;}));
    new Setting(el).setName(tr("閱讀狀態")).addDropdown(d=>{d.addOptions(labels(STATUS_LABELS)).setValue(this.values.reading_status).onChange(v=>{const before=this.values;const status=readingSchema.shape.reading_status.parse(v);const next=statusAction(before,status);if(this.countEdited)next.reading_count=before.reading_count;for(const key of this.explicitDates)Object.assign(next,{[key]:before[key]});this.values=next;this.render();});});
    new Setting(el).setName(tr("閱讀層次")).addDropdown(d=>d.addOption('',tr("未設定")).addOptions(labels(DEPTH_LABELS)).setValue(this.values.reading_depth??'').onChange(v=>{this.values.reading_depth=v?readingSchema.shape.reading_depth.parse(v):null;}));
    new Setting(el).setName(tr("閱讀次數")).setDesc(tr("已完成的閱讀次數。開始重讀不會增加；完成時增加一次。")).addText(t=>{t.inputEl.type='number';t.inputEl.min='0';t.inputEl.step='1';t.setValue(String(this.values.reading_count)).onChange(v=>{this.values.reading_count=Number(v);this.countEdited=true;});});
    el.createEl('h3',{text:tr("閱讀日期")});
    for(const key of ['want_to_read_date','reading_start_date','completed_date','not_reading_date','abandoned_date'] as const)new Setting(el).setName(tr(FRONTMATTER_KEYS[key])).addText(t=>{t.inputEl.type='date';t.setValue(this.values[key]??'').onChange(v=>{this.values[key]=v||null;this.explicitDates.add(key);});});
    el.createEl('h3',{text:tr("感想與評價")});
    new Setting(el).setName(tr("閱讀感想")).addTextArea(t=>t.setValue(this.values.reading_reflection??'').onChange(v=>{this.values.reading_reflection=v||null;}));
    new Setting(el).setName(tr("我的閱讀推薦")).addDropdown(d=>d.addOption('',tr("未設定")).addOptions(labels(RECOMMENDATION_LABELS)).setValue(this.values.my_recommendation??'').onChange(v=>{this.values.my_recommendation=v?readingSchema.shape.my_recommendation.parse(v):null;}));
    new Setting(el).setName(tr("我的評分")).addDropdown(d=>{d.addOption('',tr("未評分"));for(let n=1;n<=5;n++)d.addOption(String(n),`${number(n)} / ${number(5)}`);d.setValue(this.values.my_rating===null?'':String(this.values.my_rating)).onChange(v=>{this.values.my_rating=v?Number(v):null;});});
    el.createEl('h3',{text:tr("我的分類")});
    for(const key of ['my_keywords','my_subtopics'] as const)new Setting(el).setName(tr(FRONTMATTER_KEYS[key])).setDesc(tr("每行一項。")).addTextArea(t=>t.setValue(this.values[key].join('\n')).onChange(v=>{this.values[key]=v.split('\n').map(s=>s.trim()).filter(Boolean);}));
    el.createEl('p',{text:tr("我的讀者類型：此文章適合哪些讀者？"),cls:'setting-item-description'});
    for(const [code,label]of Object.entries(labels(READER_LABELS)))new Setting(el).setName(label).addToggle(t=>{const parsed=readingSchema.shape.my_reader_types.parse([code])[0]!;t.setValue(this.values.my_reader_types.includes(parsed)).onChange(on=>{this.values.my_reader_types=on?[...new Set([...this.values.my_reader_types,parsed])]:this.values.my_reader_types.filter(c=>c!==parsed);});});
    for(const key of ['my_buddhist_level','my_practice_level'] as const)new Setting(el).setName(tr(FRONTMATTER_KEYS[key])).addDropdown(d=>{d.addOption('',tr("未設定"));for(let n=0;n<=3;n++)d.addOption(String(n),number(n));d.setValue(this.values[key]===null?'':String(this.values[key])).onChange(v=>{this.values[key]=v?Number(v):null;});});
    const save=async(sync:boolean)=>{if(this.saving)return;this.saving=true;try{const values=readingSchema.parse(this.values);await this.plugin.saveReading(this.file,values,this.expected);this.close();new Notice(tr("閱讀資料已儲存於本機。"));if(sync)await this.plugin.runSync([this.file],true);}catch(e){error.setText(message(e));}finally{this.saving=false;}};
    new Setting(el).addButton(b=>b.setButtonText(tr("取消")).onClick(()=>this.close())).addButton(b=>b.setButtonText(tr("儲存並同步")).setDisabled(!this.plugin.data.local_upload_enabled).onClick(()=>{void save(true);})).addButton(b=>b.setCta().setButtonText(tr("儲存於本機")).onClick(()=>{void save(false);}));
  }
}

class AnalyticsSettings extends PluginSettingTab{
  constructor(app:App,private plugin:TbpediaAnalytics){super(app,plugin);}
  display(){
    setLocale(this.plugin.data.interface_language,getLanguage());
    const el=this.containerEl;el.empty();el.lang=intlLocale();el.createEl('h2',{text:'Tbpedia Analytics'});
    const p=this.plugin;
    new Setting(el).setName(tr('language')).setDesc(`${tr('languageHelp')} ${tr('followSystemHelp')}`).addDropdown(d=>d.addOption('system',tr('followSystem')).addOptions(LANGUAGES).setValue(languagePreference(p.data.interface_language)).onChange(v=>{p.data.interface_language=languagePreference(v);setLocale(p.data.interface_language,getLanguage());p.persistQuiet();p.setStatus(tr('本機閱讀'));this.display();}));
    const run=(action:()=>Promise<void>)=>{void action().then(()=>this.display()).catch(e=>new Notice(message(e),12000));};
    el.createEl('h3',{text:tr("連線")});
    new Setting(el).setName(tr("API 網址")).addText(t=>t.setValue(p.data.api_url).onChange(v=>{if(v===p.data.api_url)return;p.data.api_url=v.trim();p.token='';p.me=null;p.persistQuiet();}));
    new Setting(el).setName(tr("讀者連線金鑰")).setDesc(tr("由管理員提供；不是 NocoDB 管理金鑰。")).addText(t=>{t.inputEl.type='password';t.setValue(p.token).onChange(v=>{p.token=v.trim();p.me=null;if(p.data.remember_token)p.persistQuiet();});});
    new Setting(el).setName(tr("在本機記住連線金鑰")).setDesc(tr("預設不儲存。啟用後會存於未加密的外掛資料檔，可能被 Vault 同步或備份複製。")).addToggle(t=>t.setValue(p.data.remember_token).onChange(v=>{p.data.remember_token=v;p.persistQuiet();}));
    new Setting(el).addButton(b=>b.setButtonText(tr("測試連線")).onClick(()=>run(()=>p.connect())));
    if(p.me){el.createEl('p',{text:tr('connectionStatus',{name:p.me.profile.nickname,permission:tr(p.me.cloud_sync_enabled?'已開啟':'已停用')})});new Setting(el).setName(tr("使用現有雲端個人資料")).setDesc(tr("按下後才會取代目前的本機草稿。")).addButton(b=>b.setButtonText(tr("載入雲端資料")).onClick(()=>run(async()=>{p.data.profile={...p.me!.profile};await p.persist();})));}
    el.createEl('h3',{text:tr("讀者個人資料")});
    const profile=p.data.profile;
    for(const [key,label]of [['nickname',tr("暱稱（必填）")],['email',tr("電郵（選填，不需驗證）")],['organisation',tr("所屬機構（選填）")]] as const)new Setting(el).setName(label).addText(t=>{if(key==='email')t.inputEl.type='email';t.setValue(profile[key]??'').onChange(v=>{if(key==='nickname')profile.nickname=v;else profile[key]=v.trim()||null;});});
    new Setting(el).setName(tr("出生年份（選填）")).addText(t=>{t.inputEl.type='number';t.inputEl.min='1900';t.inputEl.max=String(new Date().getFullYear());t.setValue(profile.birth_year===null?'':String(profile.birth_year)).onChange(v=>{profile.birth_year=v===''?null:Number(v);});});
    new Setting(el).setName(tr("出生月份（選填）")).addDropdown(d=>{d.addOption('',tr("未提供"));for(let m=1;m<=12;m++)d.addOption(String(m),monthName(m));d.setValue(profile.birth_month===null?'':String(profile.birth_month)).onChange(v=>{profile.birth_month=v?Number(v):null;});});
    new Setting(el).setName(tr("性別")).addDropdown(d=>d.addOptions(labels(SEX_LABELS)).setValue(profile.sex).onChange(v=>{profile.sex=profileSchema.shape.sex.parse(v);}));
    new Setting(el).setName(tr("國家／地區（選填）")).addDropdown(d=>{d.addOption('',tr("未提供"));for(const code of [...COUNTRY_CODES].sort((a,b)=>regionName(a).localeCompare(regionName(b),intlLocale())))d.addOption(code,`${regionName(code)} (${code})`);d.setValue(profile.country_code??'').onChange(v=>{profile.country_code=v||null;});});
    new Setting(el).setName(tr("我的讀者類型（選填）")).addDropdown(d=>d.addOption('',tr("未提供")).addOptions(labels(READER_LABELS)).setValue(profile.reader_type??'').onChange(v=>{profile.reader_type=v?profileSchema.shape.reader_type.parse(v):null;}));
    const required=p.me?.required_notices;
    el.createEl('p',{text:noticeSupported(required?.profile_version,PROFILE_NOTICE_VERSION)?tr('profileNotice'):tr('noticeUnavailable'),cls:'tbpa-notice'});
    const profileVersion=required?.profile_version??PROFILE_NOTICE_VERSION;const profileSupported=noticeSupported(profileVersion,PROFILE_NOTICE_VERSION);
    new Setting(el).setName(tr("我同意個人資料說明")).addToggle(t=>t.setDisabled(!profileSupported).setValue(profileSupported&&p.data.profile_notice_version===profileVersion).onChange(v=>{p.data.profile_notice_version=v?profileVersion:null;}));
    el.createEl('h3',{text:tr("手動上傳權限")});el.createEl('p',{text:noticeSupported(required?.reading_version,READING_NOTICE_VERSION)?tr('readingNotice'):tr('noticeUnavailable'),cls:'tbpa-notice'});
    const readingVersion=required?.reading_version??READING_NOTICE_VERSION;const readingSupported=noticeSupported(readingVersion,READING_NOTICE_VERSION);
    new Setting(el).setName(tr("我同意閱讀資料上傳說明")).addToggle(t=>t.setDisabled(!readingSupported).setValue(readingSupported&&p.data.reading_notice_version===readingVersion).onChange(v=>{p.data.reading_notice_version=v?readingVersion:null;if(!v)p.data.local_upload_enabled=false;p.persistQuiet();}));
    new Setting(el).setName(tr("允許手動上傳閱讀資料")).setDesc(tr("關閉會立即停止本機上傳；按下方「儲存並上傳個人資料」才套用雲端設定。")).addToggle(t=>t.setValue(p.data.local_upload_enabled).onChange(v=>{if(v&&p.data.reading_notice_version!==readingVersion){t.setValue(false);new Notice(tr("請先同意閱讀資料上傳說明。"));return;}p.data.local_upload_enabled=v;p.persistQuiet();}));
    if(!p.me||p.me.cloud_sync_enabled!==p.data.local_upload_enabled)el.createEl('p',{text:tr("雲端權限尚待確認或套用。"),cls:'setting-item-description'});
    new Setting(el).setName(tr("掃描資料夾")).setDesc(tr("每行一個 Vault 相對路徑；空白會掃描所有有內容編號的文章。")).addTextArea(t=>t.setValue(p.data.folders.join('\n')).onChange(v=>{p.data.folders=v.split('\n').map(s=>s.trim().replace(/\\/g,'/').replace(/\/+$/,'')).filter(Boolean);p.persistQuiet();}));
    new Setting(el).addButton(b=>b.setButtonText(tr("儲存個人資料於本機")).onClick(()=>run(async()=>{profileSchema.parse(p.data.profile);await p.persist();new Notice(tr("個人資料已儲存於本機。"));}))).addButton(b=>b.setCta().setButtonText(tr("儲存並上傳個人資料")).onClick(()=>run(()=>p.uploadProfile())));
    new Setting(el).setName(tr("手動同步")).addButton(b=>b.setButtonText(tr("同步已變更文章")).onClick(()=>{void p.previewSync();}));
    el.createEl('p',{text:tr("關閉上傳不會刪除已有的雲端記錄。如需刪除，請聯絡管理員。"),cls:'setting-item-description'});
  }
}

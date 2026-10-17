import * as z from 'zod';
import { clientMetadataSchema } from './client-metadata';

export const APP_NAME = 'tbpedia-analytics';
export const PROFILE_NOTICE_VERSION = 'profile-v2';
export const READING_NOTICE_VERSION = 'reading-v1';
export const STATUS_LABELS = { UNREAD: '還沒閱讀', WANT_TO_READ: '想讀', READING: '在讀', COMPLETED: '已讀', NOT_READING: '不讀', ABANDONED: '棄讀' } as const;
export const DEPTH_LABELS = { SKIM: '略讀', FULL: '通讀', CLOSE: '精讀', STUDY: '深入研讀', BASIC: '基礎閱讀', INSPECTIONAL: '檢視閱讀', ANALYTICAL: '分析閱讀', SYNTOPICAL: '主題閱讀' } as const;
export const RECOMMENDATION_LABELS = { RECOMMEND: '推薦', NOT_RECOMMEND: '不推薦', UNDECIDED: '未決定' } as const;
export const READER_LABELS = { GENERAL: '一般讀者', NEW_REFUGE: '初皈依者', BUDDHIST_STUDENT: '學佛者', PRACTITIONER: '修行者', TBS_PRACTITIONER: '真佛行者' } as const;
export const SEX_LABELS = { FEMALE: '女', MALE: '男', OTHER: '其他', PREFER_NOT_TO_SAY: '不願透露' } as const;
export const PROFILE_NOTICE = '讀者資料保存在本機，只有按「儲存並上傳個人資料」才會傳送至 Tbpedia 的 NocoDB。資料包括暱稱，以及自願填寫的電郵、出生年/月、性別、國家、讀者類型和機構，用於管理讀者及未來的閱讀統計。每次上傳個人資料亦會傳送裝置類型、外掛版本、作業系統及使用者代理字串，用於相容性與問題排查；每位讀者只保留最近一次上傳的裝置資料，不收集硬體識別碼。這些欄位不會寫入文章。您可以修改資料，或聯絡管理員要求刪除雲端資料。';
export const READING_NOTICE = '開啟雲端權限後，只有您手動同步的閱讀資料會傳送至 Tbpedia 的 NocoDB，包括閱讀進度、日期、評分、分類及閱讀感想。文章正文及無關屬性不會上傳。停用會停止後續上傳，但不會刪除既有雲端資料。';

const codeEnum = <T extends Record<string, string>>(values: T) => z.enum(Object.keys(values) as [keyof T & string, ...(keyof T & string)[]]);
export const contentIdSchema = z.string().regex(/^[A-Za-z0-9_-]{1,80}$/);
export const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => {
  const d = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === value;
}, 'Invalid calendar date');
const nullableText = (max: number) => z.string().max(max).nullable();
const wordList = z.array(z.string().trim().min(1).max(100)).max(50).transform(items => [...new Set(items)]);
export const readingSchema = z.object({
  planned_reading: z.boolean(),
  reading_status: codeEnum(STATUS_LABELS),
  reading_depth: codeEnum(DEPTH_LABELS).nullable(),
  reading_count: z.number().int().min(0).max(2147483647),
  want_to_read_date: dateSchema.nullable(),
  reading_start_date: dateSchema.nullable(),
  completed_date: dateSchema.nullable(),
  not_reading_date: dateSchema.nullable(),
  abandoned_date: dateSchema.nullable(),
  reading_reflection: nullableText(10000),
  my_recommendation: codeEnum(RECOMMENDATION_LABELS).nullable(),
  my_rating: z.number().int().min(1).max(5).nullable(),
  my_keywords: wordList,
  my_reader_types: z.array(codeEnum(READER_LABELS)).max(5).transform(items => [...new Set(items)]),
  my_buddhist_level: z.number().int().min(0).max(3).nullable(),
  my_practice_level: z.number().int().min(0).max(3).nullable(),
  my_subtopics: wordList
}).strict();
export type ReadingValues = z.infer<typeof readingSchema>;
export type ReadingKey = keyof ReadingValues;
export const READING_KEYS = Object.keys(readingSchema.shape) as ReadingKey[];
export const FRONTMATTER_KEYS: Record<ReadingKey, string> = {
  planned_reading: '計劃閱讀', reading_status: '閱讀狀態', reading_depth: '閱讀層次', reading_count: '閱讀次數',
  want_to_read_date: '想讀日期', reading_start_date: '在讀日期', completed_date: '已讀日期', not_reading_date: '不讀日期', abandoned_date: '棄讀日期',
  reading_reflection: '閱讀感想', my_recommendation: '我的閱讀推薦', my_rating: '我的評分', my_keywords: '我的關鍵詞', my_reader_types: '我的讀者類型', my_buddhist_level: '我的佛學級別', my_practice_level: '我的修行級別', my_subtopics: '我的子主題'
};
export const defaults = (): ReadingValues => ({ planned_reading: false, reading_status: 'UNREAD', reading_depth: null, reading_count: 0, want_to_read_date: null, reading_start_date: null, completed_date: null, not_reading_date: null, abandoned_date: null, reading_reflection: null, my_recommendation: null, my_rating: null, my_keywords: [], my_reader_types: [], my_buddhist_level: null, my_practice_level: null, my_subtopics: [] });
export const COUNTRY_CODES = new Set('AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW'.split(' '));
export const profileSchema = z.object({
  nickname: z.string().trim().min(1).max(100), email: z.email().max(254).nullable(),
  // Workers can freeze the module-initialization clock; evaluate the year per validation.
  birth_year: z.number().int().min(1900).refine(year=>year<=new Date().getUTCFullYear(),'Birth year cannot be in the future').nullable(), birth_month: z.number().int().min(1).max(12).nullable(),
  sex: codeEnum(SEX_LABELS), country_code: z.string().refine(s => COUNTRY_CODES.has(s), 'Unknown country code').nullable(), reader_type: codeEnum(READER_LABELS).nullable(), organisation: z.string().trim().max(200).nullable()
}).strict().refine(p => p.birth_month === null || p.birth_year !== null, { path: ['birth_month'], message: 'Birth year is required when birth month is supplied' });
export type ReaderProfile = z.infer<typeof profileSchema>;
export const emptyProfile = (): ReaderProfile => ({ nickname: '', email: null, birth_year: null, birth_month: null, sex: 'PREFER_NOT_TO_SAY', country_code: null, reader_type: null, organisation: null });
export const profileRequestSchema = z.object({ schema_version: z.literal(1), profile: profileSchema, profile_notice_version: z.string().max(40), cloud_sync_enabled: z.boolean(), reading_notice_version: z.string().max(40).nullable(), client_metadata:clientMetadataSchema.optional() }).strict();
export const syncRequestSchema = z.object({ schema_version: z.literal(1), content_id: contentIdSchema, client_updated_at: z.iso.datetime({offset:true}), values: readingSchema }).strict();
export type SyncRequest = z.infer<typeof syncRequestSchema>;

export function canonicalSnapshot(contentId: string, values: ReadingValues): string {
  const normalized = readingSchema.parse(values);
  const ordered = Object.fromEntries(READING_KEYS.map(key => [key, normalized[key]]));
  return JSON.stringify({ schema_version: 1, content_id: contentIdSchema.parse(contentId), values: ordered });
}
export async function sha256(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  return [...new Uint8Array(await crypto.subtle.digest('SHA-256', data))].map(b => b.toString(16).padStart(2, '0')).join('');
}
export const snapshotHash = (id: string, values: ReadingValues) => sha256(canonicalSnapshot(id, values));
export function localDate(d = new Date()): string { return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
export function statusAction(current: ReadingValues, status: ReadingValues['reading_status'], day = localDate()): ReadingValues {
  if (current.reading_status === status) return { ...current };
  const next = { ...current, reading_status: status };
  const dates = { WANT_TO_READ: 'want_to_read_date', READING: 'reading_start_date', COMPLETED: 'completed_date', NOT_READING: 'not_reading_date', ABANDONED: 'abandoned_date' } as const;
  if (status !== 'UNREAD') next[dates[status]] = day;
  if (status === 'COMPLETED') next.reading_count += 1;
  return readingSchema.parse(next);
}

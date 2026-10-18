import { syncRequestSchema, defaults, DEPTH_LABELS, FRONTMATTER_KEYS, READER_LABELS, readingSchema, READING_KEYS, RECOMMENDATION_LABELS, STATUS_LABELS, type ReadingValues, type ReadingKey } from './schema';

export type Frontmatter = Record<string, unknown>;
function one(value: unknown): unknown { return Array.isArray(value) && value.length === 1 ? value[0] : value; }
function mapped(value: unknown, labels: Record<string,string>, aliases: Record<string,string> = {}): unknown {
  value = one(value);
  if (value === undefined || value === null || value === '') return null;
  if (typeof value !== 'string') return value;
  return aliases[value] ?? Object.entries(labels).find(([,label])=>label === value)?.[0] ?? value;
}
const aliases: Partial<Record<ReadingKey,string[]>> = { my_recommendation: ['閱讀推薦','文章推薦'], my_rating: ['閱讀評分','文章評分','評分'] };
export function fromFrontmatter(fm: Frontmatter): ReadingValues {
  const base: Record<string,unknown> = { ...defaults() };
  for (const key of READING_KEYS) {
    const canonical = FRONTMATTER_KEYS[key];
    const alias = aliases[key]?.find(name => fm[name] !== undefined && fm[name] !== null && fm[name] !== '');
    const isLegacy = !Object.hasOwn(fm, canonical) && alias !== undefined;
    const raw = fm[canonical] ?? (isLegacy && alias ? fm[alias] : undefined);
    if (raw === undefined || raw === null || raw === '') continue;
    let value: unknown = raw;
    if (key === 'reading_status') value = mapped(raw, STATUS_LABELS, {'沒讀':'UNREAD','未讀':'UNREAD'});
    if (key === 'reading_depth') value = mapped(raw, DEPTH_LABELS);
    if (key === 'my_recommendation') value = mapped(raw, RECOMMENDATION_LABELS, {'沒推薦':'UNDECIDED','未推薦':'UNDECIDED'});
    if (key === 'my_rating' && isLegacy && raw === 0) value = null;
    if (key === 'my_reader_types' && Array.isArray(raw)) value = raw.map(v=>mapped(v, READER_LABELS));
    if (key === 'reading_reflection' && Array.isArray(raw) && raw.every(v=>typeof v==='string')) value = raw.join('\n') || null;
    if (key.endsWith('_date') && raw instanceof Date && !Number.isNaN(raw.getTime())) value = raw.toISOString().slice(0,10);
    base[key] = value;
  }
  return readingSchema.parse(base);
}
export function toFrontmatter(values: ReadingValues): Frontmatter {
  const parsed = readingSchema.parse(values);
  const result: Frontmatter = {};
  for (const key of READING_KEYS) result[FRONTMATTER_KEYS[key]] = parsed[key];
  result['閱讀狀態'] = STATUS_LABELS[parsed.reading_status];
  result['閱讀層次'] = parsed.reading_depth === null ? null : DEPTH_LABELS[parsed.reading_depth];
  result['我的閱讀推薦'] = parsed.my_recommendation === null ? null : RECOMMENDATION_LABELS[parsed.my_recommendation];
  result['我的讀者類型'] = parsed.my_reader_types.map(code => READER_LABELS[code]);
  return result;
}
export function trackedFingerprint(fm: Frontmatter): string {
  return JSON.stringify({id:fm.tbpedia_content_id ?? null, values: fromFrontmatter(fm)});
}

export function readingUpdatedAt(fm: Frontmatter): string {
  const value=fm.tbpedia_reading_updated_at;
  return syncRequestSchema.shape.client_updated_at.parse(value instanceof Date?value.toISOString():value);
}
export function markReadingSynced(fm: Frontmatter, expectedFingerprint:string, expectedUpdatedAt:string, syncedAt:string, hash:string): boolean {
  if(trackedFingerprint(fm)!==expectedFingerprint||readingUpdatedAt(fm)!==expectedUpdatedAt)return false;
  const timestamp=syncRequestSchema.shape.client_updated_at.parse(syncedAt);
  // Validate both receipt fields before changing either property.
  if(!/^[a-f0-9]{64}$/.test(hash))throw new Error('Invalid sync receipt hash');
  fm.tbpedia_reading_sync_at=timestamp;
  fm.tbpedia_reading_sync_hash=hash;
  return true;
}

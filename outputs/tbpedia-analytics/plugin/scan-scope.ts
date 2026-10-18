// Root collection folders, including Traditional and Simplified Chinese names.
export const SCAN_FOLDERS = [
  '01 文集部',
  '02 開示部', '02 开示部',
  '03 經藏部', '03 经藏部',
  '04 頌與戒律', '04 颂与戒律',
  '05 傳法部', '05 传法部',
  '06 密法儀軌', '06 密法仪轨',
  '07 佛語典藏', '07 佛语典藏',
  '08 其他類別', '08 其他类别',
  '09 蓮香上師', '09 莲香上师',
  '10 真佛宗',
] as const;

const folders = new Set<string>(SCAN_FOLDERS);
export function inScanScope(path:string):boolean {
  const [root,...parts]=path.replace(/\\/g,'/').split('/');
  // Pasted folder names can contain invisible formatting characters.
  return parts.length>0 && folders.has((root??'').replace(/[\u200B-\u200D\uFEFF]/g,'').trim());
}

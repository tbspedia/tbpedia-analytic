import * as z from 'zod';

// Keep database field names (including Client_version's capital C) exact.
export const clientMetadataSchema=z.object({
  device_type:z.enum(['desktop','tablet','mobile','unknown']),
  Client_version:z.string().trim().min(1).max(64),
  os:z.string().trim().min(1).max(100).nullable(),
  user_agent:z.string().trim().min(1).max(2048).nullable()
}).strict();
export type ClientMetadata=z.infer<typeof clientMetadataSchema>;

export interface ClientPlatform {
  isDesktopApp:boolean;isMobileApp:boolean;isPhone:boolean;isTablet:boolean;
  isIosApp:boolean;isAndroidApp:boolean;isWin:boolean;isMacOS:boolean;isLinux:boolean;
}
export function collectClientMetadata(platform:ClientPlatform,version:string,userAgent?:string):ClientMetadata {
  // Mobile checks precede desktop OS flags: iOS can also report itself as macOS.
  const os=platform.isIosApp?'iOS':platform.isAndroidApp?'Android':platform.isWin?'Windows':platform.isMacOS?'macOS':platform.isLinux?'Linux':null;
  const device_type=platform.isTablet?'tablet':platform.isPhone||platform.isMobileApp?'mobile':platform.isDesktopApp?'desktop':'unknown';
  return clientMetadataSchema.parse({device_type,Client_version:version,os,user_agent:userAgent?.trim().slice(0,2048)||null});
}

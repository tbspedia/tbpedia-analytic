import * as z from 'zod';

const identifier=z.string().trim().min(1).max(256).nullable().default(null);
const languageCode=z.string().trim().min(1).max(64).nullable().default(null);
const title=z.string().trim().min(1).max(1000).nullable().default(null);
export const updaterMetadataSchema=z.object({seriesId:identifier,editionId:identifier,tbpedia:identifier,releaseId:identifier,languageCode,title}).strict();
export type UpdaterMetadata=z.infer<typeof updaterMetadataSchema>;
export const UPDATER_METADATA_KEYS=['seriesId','editionId','tbpedia','releaseId','languageCode','title'] as const;
export const emptyUpdaterMetadata=():UpdaterMetadata=>updaterMetadataSchema.parse({});

const updaterDataSchema=z.object({
  seriesId:identifier,editionId:identifier,tbpedia:identifier,releaseId:identifier,languageCode,title,
  installed:z.object({releaseId:identifier}).nullish()
});
export function extractUpdaterMetadata(value:unknown):UpdaterMetadata {
  const parsed=updaterDataSchema.parse(value);
  // The base release describes the updater's baseline, not the installed vault.
  return updaterMetadataSchema.parse({seriesId:parsed.seriesId,editionId:parsed.editionId,tbpedia:parsed.tbpedia,releaseId:parsed.installed?.releaseId??parsed.releaseId,languageCode:parsed.languageCode,title:parsed.title});
}
export function readUpdaterMetadata(fields:Record<string,unknown>):UpdaterMetadata {
  return updaterMetadataSchema.parse(Object.fromEntries(UPDATER_METADATA_KEYS.map(key=>[key,fields[key]??null])));
}

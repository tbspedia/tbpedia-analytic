# True Buddha Pedia Analytics

An Obsidian plugin for local reading progress and deliberate, authenticated uploads to NocoDB.

**Latest release: [v0.1.12](https://github.com/tbspedia/tbpedia-analytic/releases/tag/v0.1.12)** — stores per-article sync hashes in frontmatter and removes the growing receipts map from plugin settings.

## Install or upgrade

1. Download the plugin ZIP or `main.js`, `manifest.json` and `styles.css` from the release assets.
2. Place the three files in your vault’s `.obsidian/plugins/tbpedia-analytics/` folder. Preserve the existing `data.json` when upgrading.
3. Reload the plugin or restart Obsidian. Open **Settings → True Buddha Pedia Analytics**.
4. Choose **Test connection** to check server availability. Complete your profile, accept the notices and choose **Save and upload profile** to set up your reader automatically. Explicitly enable manual uploads if desired.

The configured API is `https://cfanalytics.tbpedia.org`. Cloud uploads are disabled on new installations; upgrades preserve existing permissions. Reading data stays local until you choose to sync.

## Sync receipts in article frontmatter

Successful uploads save `tbpedia_reading_sync_hash` and `tbpedia_reading_sync_at` together in each article. The plugin compares that hash when checking for changed articles, without rewriting all receipts in `data.json` after every upload. Server, reader, credentials and collection settings remain in `data.json`.

On the first reload after upgrading, matching legacy receipts migrate to existing articles before the `receipts` map is removed from settings. Keep your existing `data.json` during installation. Receipts travel with notes when those notes sync between devices; devices whose notes have not synced may upload again. This change does not add multi-device conflict resolution.

## Collection metadata in reading sync

The plugin captures only these fields from `plugins/tbpedia-update/data.json`, saves them in `plugins/tbpedia-analytics/data.json`, and reads that saved copy when uploading each reading record:

| Analytics field | Updater source |
| --- | --- |
| `seriesId` | `seriesId` |
| `editionId` | `editionId` |
| `tbpedia` | `tbpedia` |
| `releaseId` | `installed.releaseId`, or a flat `releaseId` |
| `languageCode` | `languageCode` |
| `title` | `title` |

The updater’s `baseRelease.releaseId` is not used as the installed release. Unrelated updater settings and credentials are not copied into reading records.

The six values are included in sync fingerprints, so collection changes make affected notes eligible for upload again. Missing updater files do not erase previously saved collection information. Invalid or inconsistent saved metadata stops sync with a localized message.

After upgrading, reload the plugin and choose **Sync changed articles** to refresh affected records. **Sync current article** forces a resend for a selected note. Neither action increments the reading count.

## Interface language

The analytics UI choice is saved as `interface_language`; the previous `language` key is migrated automatically. This is independent of the collection’s `languageCode`.

Choose **Follow system** to follow Obsidian’s language setting, with English as fallback. Supported locales: `en`, `ja`, `fr`, `es`, `de`, `nl`, `sv`, `ko`, `zh-TW`, `zh-CN`, `vi`, `id`, `th`, `bo`.

## Other features

- Multiple reader types in your profile, with existing single selections preserved.
- Local editing of 17 reading fields with safe frontmatter writes and deliberate rereading transitions.
- Scrollable pending-article preview with titles and vault paths before manual uploads.
- Resizable reading popup with a responsive form.
- Profile uploads with device type, plugin version, operating system and user-agent information after consent.
- Authenticated reader ownership, verified cloud saves and local sync receipts.

## Development and documentation

The implementation lives in [`outputs/tbpedia-analytics`](outputs/tbpedia-analytics/). From that directory:

```powershell
npm ci
npm run check
```

The v0.1.12 release passes type checking and production builds. **67 of 68 automated tests pass**; the local vault catalogue test reports a missing parent `TBP-275`. Native interactive Obsidian QA has not been performed.

- [Detailed setup, reader provisioning and API configuration](outputs/tbpedia-analytics/README.md)
- [Release notes](outputs/tbpedia-analytics/RELEASE_NOTES.md)
- [Phase 1 and 2 design specification](outputs/Tbpedia-Phase-1-and-2-Detailed-Design-Specification.md)

Private credentials, vault backups, build caches and logs remain excluded from Git and release ZIPs.

Manual reading uploads require the note frontmatter to contain `tbpedia_reading_updated_at`. Notes without this field are excluded from the pending preview and skipped by both changed-article and current-article sync, even when forced. Saving reading data through the plugin adds this timestamp automatically. Existing cloud records are not deleted.

Reading timestamps: `client_updated_at` uses the note's `tbpedia_reading_updated_at` (last local save). After a verified upload, the plugin writes the returned server `synced_at` into `tbpedia_reading_sync_at` and the verified snapshot hash into `tbpedia_reading_sync_hash` in the same frontmatter update. Failed uploads do not update these fields; notes edited during upload are not marked as synced for the newer local version.

Per-article sync receipts live in note frontmatter, rather than `data.json`. Changed-article sync compares the current reading snapshot with `tbpedia_reading_sync_hash`; current-article sync still forces an upload. On the first load after upgrading, matching legacy receipts for the configured server and reader migrate to existing, uniquely identified articles. Existing frontmatter hashes are preserved. The legacy `receipts` map is removed from settings after migration succeeds; a failed article write leaves the original settings file available for retry. Missing articles and receipts for other destinations are not imported. This layout assumes one reader and server per vault, and receipts travel between devices when the notes sync.

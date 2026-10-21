# True Buddha Pedia Analytics

An Obsidian plugin for local reading progress and deliberate, authenticated uploads to NocoDB.

**Latest release: [v0.1.22](https://github.com/tbspedia/tbpedia-analytic/releases/tag/v0.1.22)** — Self-hosted NocoDB migration with existing reader identities and plugin settings preserved.

## Install or upgrade

1. Download the plugin ZIP or `main.js`, `manifest.json` and `styles.css` from the release assets.
2. Place the three files in your vault’s `.obsidian/plugins/tbpedia-analytics/` folder. Preserve the existing `data.json` when upgrading.
3. Reload the plugin or restart Obsidian. Open **Settings → True Buddha Pedia Analytics**.
4. Choose **Test connection** to check server availability. Complete your profile, accept the notices and choose **Save and upload profile** to set up your reader automatically. Review the three enabled notice/upload options and turn them off if desired.

The configured API is `https://cfanalytics.tbpedia.org`. The profile notice, reading-data notice and manual upload permission are enabled by default on new installations. Upgrades preserve existing choices. Use **Save and upload profile** to apply cloud permissions; reading data uploads only when you choose to sync.

The reading ribbon action is **Record my reading data**, with the same icon in each Markdown tab header. The **Sync reading data to cloud** ribbon icon opens the same changed-reading preview as the settings button. Recording and quick-status actions require a valid `tbpedia_content_id` in the note’s frontmatter; saves recheck this requirement. These interface changes are included in v0.1.18.

## Reading form

Under **My classification → My reader type**, select any combination of reader types using checkboxes. **Reading reflection** allows up to 300 visible characters, with a live remaining count. Spaces, punctuation and line breaks count; combined characters and emoji count as one. Chinese input composition finishes before the limit is applied. Existing longer reflections remain readable and must be shortened before saving through the form.

## NocoDB multi-select storage

The reading-record fields `my_keywords`, `my_subtopics` and `my_reader_types` are native multi-select fields. Cloud sync adds new choices and verifies saved selections; all 28 original records were preserved during migration. NocoDB options cannot contain an English comma: use `，` within an option. This server update works with the existing plugin installation.

## Mobile setup

Version 0.1.20 enables Obsidian on **Android, iPhone and iPad** (`isDesktopOnly: false`). Install the release's `main.js`, `manifest.json` and `styles.css` in your mobile vault's configured `plugins/tbpedia-analytics/` directory (normally `.obsidian/plugins/tbpedia-analytics/`), preserve an existing `data.json`, then enable or reload the plugin on that device. Plugin files and settings may need separate syncing from your notes.

Use the command palette to run **Record my reading data**, **Sync current article**, or **Sync changed reading data to cloud**. The ribbon actions remain available where Obsidian displays them. Reading and profile forms stack controls on mobile, provide larger touch targets and keep long forms scrollable.

To use the same reader in a separate mobile vault, open **Settings → True Buddha Pedia Analytics → Connect an existing reader** and enter your existing Reader ID. Reading can be recorded offline; cloud uploads remain manual and require a connection. The companion Tbpedia updater is optional: missing updater settings do not block startup or sync and do not erase saved collection attribution.

Mobile support has automated Android/iOS host-API coverage; physical phone/tablet and virtual-keyboard testing has not been performed. Use one active uploader at a time: this release does not add cross-device conflict merging. Sync your latest notes before uploading from another device.

## Reader profile setup

- For a new account, choose **Register a new reader**, complete every required profile field, select at least one reader type, then choose **Save and upload profile**. The cloud assigns a new Reader ID.
- To retrieve an existing account on an unlinked vault, choose **Connect an existing reader**, enter the **Reader ID**, then choose **Connect existing reader**. The profile is retrieved from the cloud and saved in this vault. No separate sync credential is required.
- In the original connected vault, the **Reader ID** is read-only and masked with asterisks by default; choose **Show Reader ID** to reveal it and **Hide Reader ID** to mask it again. Closing or refreshing settings hides it automatically. Find it under **Settings → True Buddha Pedia Analytics**. Copy that ID to the new vault. The credential field and copy-credential button have been removed.
- The Reader ID is an account access key: it permits profile retrieval, profile updates and reading uploads, subject to active-account, consent and upload-permission checks. Keep it private. Unknown or disabled IDs cannot register a new reader.
- Recovery performs only a cloud profile read and leaves existing device credentials valid. Existing incomplete profiles remain readable; complete missing fields before saving or uploading. Email ownership is unverified.

The cloud service now supports Reader-ID-only access and enforces required fields on profile uploads. Plugin release v0.1.18 includes this update. The compatible cloud service is already deployed.

## Interface and upload defaults

The settings page heading is **True Buddha Pedia Analytics**. The profile and reading notices name the **True Buddha Pedia Analytics database** and describe the current uploaded data. The plugin no longer adds a status bar message or the final cloud-record deletion reminder in settings. The manual sync button and command are named **Sync changed reading data to cloud**, with corresponding translations in all 14 interface languages. Both notice options and manual upload permission default to enabled for new setups; saved choices remain unchanged on upgrades. Profile uploads and reading sync still require manual actions.

### Notice and upload switches

All three switches default to enabled on a new setup; existing saved choices are preserved. Turning off **Allow manual reading data uploads** immediately blocks reading uploads on that device. Turning off the reading-data notice also turns off that permission. Turning off the profile notice blocks profile uploads, but does not revoke server consent or automatically stop previously enabled reading uploads. Use **Save and upload profile** to apply cloud permission changes; local saving remains available.

## Automatic collection scanning

The folder selector has been removed. Bulk reading sync scans these root folders and their subfolders automatically, supporting both Traditional and Simplified Chinese names:

| Collection | Folder names |
| --- | --- |
| 01 | 文集部 |
| 02 | 開示部 / 开示部 |
| 03 | 經藏部 / 经藏部 |
| 04 | 頌與戒律 / 颂与戒律 |
| 05 | 傳法部 / 传法部 |
| 06 | 密法儀軌 / 密法仪轨 |
| 07 | 佛語典藏 / 佛语典藏 |
| 08 | 其他類別 / 其他类别 |
| 09 | 蓮香上師 / 莲香上师 |
| 10 | 真佛宗 |

Each folder name includes its two-digit number and a space, such as `03 經藏部`. Duplicate names are listed once. Notes outside these roots are excluded from scanning; articles still need a valid `tbpedia_content_id`, and manual uploads require `tbpedia_reading_updated_at`. Legacy folder settings no longer control scanning and are removed on reload. Both bulk and current-article sync use this fixed scope for catalogue-ID checks. Automatic scanning does not create missing IDs or enroll new cloud catalogue items.

## Sync receipts in article frontmatter

Successful uploads save `tbpedia_reading_sync_hash` and `tbpedia_reading_sync_at` together in each article. The plugin compares that hash when checking for changed articles, without rewriting all receipts in `data.json` after every upload. Server, reader, credentials and collection settings remain in `data.json`. This receipt layout assumes one reader and one server per vault. Receipt hashes and sync times are not included in the reading snapshot hash. `tbpedia_reading_updated_at` records the last local save and is required for uploads, including forced current-article sync. Missing timestamps are skipped, and invalid timestamps require correction. Server `synced_at` becomes `tbpedia_reading_sync_at`; the hash and timestamp are written together only when the note still matches the submitted reading data and local save time.

On the first reload after upgrading, matching legacy receipts migrate to existing articles before the `receipts` map is removed from settings. Keep your existing `data.json` during installation. A failed migration write leaves the original settings file for retry; existing frontmatter hashes are preserved. Missing, ambiguous or out-of-scope notes and receipts for other destinations are not imported. Receipts travel with notes when those notes sync between devices; devices whose notes have not synced may upload again. This change does not add multi-device conflict resolution.

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

After upgrading, reload the plugin and choose **Sync changed reading data to cloud** to refresh affected records. **Sync current article** forces a resend for a selected note. Neither action increments the reading count.

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

The v0.1.21 release passes type checking and production builds. **100 of 101 automated tests pass**; the local vault catalogue test reports a missing parent `TBP-275`. The current audit finds 247 items (four books and 243 chapters), including two chapters without that parent; the test still expects the original 245-item pilot fixture. Native interactive Obsidian QA has not been performed.

- [Detailed setup, reader provisioning and API configuration](outputs/tbpedia-analytics/README.md)
- [Release notes](outputs/tbpedia-analytics/RELEASE_NOTES.md)
- [Phase 1 and 2 design specification](outputs/Tbpedia-Phase-1-and-2-Detailed-Design-Specification.md)

Private credentials, vault backups, build caches and logs remain excluded from Git and release ZIPs.

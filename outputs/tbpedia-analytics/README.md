# True Buddha Pedia Analytics

An offline-first Obsidian reading editor with deliberate, authenticated uploads to NocoDB. This implementation uses the sample AnalyticsV1 vault and the new `tbpedia-analytics` NocoDB project/Cloudflare Worker.

Latest published plugin release: **0.1.21**. [Download release assets](https://github.com/tbspedia/tbpedia-analytic/releases/tag/v0.1.21).

Version 0.1.21 masks the saved Reader ID with asterisks until you click **Show Reader ID**. Click **Hide Reader ID** to conceal it again; closing or refreshing settings also restores the mask. The change supports desktop, Android, iPhone and iPad, and the underlying saved ID is unchanged.

The settings page heading is **True Buddha Pedia Analytics**. The plugin ID and folder name remain `tbpedia-analytics`.

The reading ribbon action is **Record my reading data**, also available in each Markdown tab header. A **Sync reading data to cloud** ribbon icon opens the existing changed-reading sync preview. Notes must have a valid `tbpedia_content_id` in frontmatter before opening the reading form, using quick-status actions or saving reading data. Missing or invalid IDs show a notice without writing reading fields.

In the reading form, **My classification → My reader type** uses checkboxes for multiple selections. **Reading reflection** allows up to 300 visible characters in any language, with a live remaining-character count below the box. Spaces, punctuation and line breaks count; combined characters and emoji count as one visible character. The limit applies after Chinese or other IME composition finishes. Existing longer reflections remain readable and must be shortened before saving through the form.

## NocoDB multi-select storage

The `reading_records` fields `my_keywords`, `my_subtopics` and `my_reader_types` use native **MultiSelect** fields. The sync service sends arrays, creates missing choices before saving and verifies the saved selections. It also reads legacy JSON list text for migration compatibility. NocoDB options cannot contain English commas; use a Chinese comma (`，`) within an option instead. Local reading notes are not rewritten by this database change.

The base-scoped service token requires **Records: Read & write**, **Tables: Read**, and **Fields: Read & write** to manage new choices. The existing token's expiry and all other permission categories are preserved. The migration verified all 28 original records and removed temporary verification data.

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

## What is implemented

- Three NocoDB tables: `readers`, `content_items`, `reading_records`.
- Reader profiles with required nickname, email, birth year/month, sex, country, multiple reader types and organisation. Email ownership is unverified.
- A local Obsidian editor for all 17 reading fields, reading/rereading actions and safe frontmatter writes.
- Manual uploads with native NocoDB v3 upsert, authenticated reader ownership, full-value read-back verification and local upload receipts.
- Profile notice, reading-data notice and manual upload permission enabled by default for new setups. Uploads still require explicit profile upload and manual reading sync. No article bodies or unrelated frontmatter are sent.
- No analytics dashboard, event history, automatic retries or multi-device merging.

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

Each folder name includes its two-digit number and a space, such as `03 經藏部`. Duplicate names are listed once. Notes outside these roots are excluded from scanning; articles still need a valid `tbpedia_content_id`, and manual uploads require `tbpedia_reading_updated_at`. Legacy folder settings no longer control scanning and are removed on reload. Current-article sync also requires its content ID to occur exactly once in this scan scope; it only bypasses matching receipt hashes. Scanning does not assign IDs or enroll catalogue items. The Worker still requires each uploaded item to exist and be active in its catalogue.

## Article sync receipts

Each verified reading upload writes `tbpedia_reading_sync_hash` and `tbpedia_reading_sync_at` in the same article frontmatter update. Changed-article sync compares the current snapshot with that hash; current-article sync still forces an upload. Failed uploads and notes edited during upload do not receive a receipt for the newer local version.

`data.json` keeps settings, reader identity, credentials and collection metadata; it no longer stores per-article receipts or needs a full receipt-map save after each upload. Scan operations still read eligible note files and calculate reading hashes; moving receipts does not eliminate this work. The improvement removes the growing receipt-map clone and settings rewrite after each successful article upload, rather than all settings reads/writes: connection and collection-metadata checks still use `data.json`.

During the first reload after upgrading, legacy receipts for the configured server and reader migrate to existing, uniquely identified notes. Existing frontmatter hashes are preserved. The legacy map is removed only after the migration writes succeed; failed writes leave the original settings available for retry. Missing, out-of-scope or duplicate-ID articles and receipts for other destinations are not imported. Preserve `data.json` when upgrading.

This layout assumes one reader and server per vault. Receipts follow article files between devices when those files sync. Unsynced devices may upload again, and this change does not resolve conflicting edits between devices.

## Updater collection metadata

The analytics plugin copies only `seriesId`, `editionId`, `tbpedia`, `releaseId`, `languageCode` and `title` from `<vault config directory>/plugins/tbpedia-update/data.json` into its own `data.json`. It reads the installed content release from `installed.releaseId` (with support for a flat top-level `releaseId`), never from `baseRelease.releaseId`. Unrelated updater settings are not copied or uploaded. The collection `languageCode` does not override the analytics UI language setting (`interface_language`). The previous `language` settings key is migrated automatically, preserving the selected language.

The fields refresh on plugin startup, sync preview and before uploads. Each manual reading sync reads and validates the six fields from the analytics plugin’s own saved `data.json`, then sends them to the matching `reading_records` row. A failed settings save or read stops sync rather than uploading mismatched context. They are included in the sync fingerprint, so a collection or release change makes otherwise unchanged notes eligible for sync again. A collection change during a batch stops further uploads; preview and retry with the newly installed content. Existing note properties are preserved.

If the updater is absent, its absence does not erase collection metadata already saved in analytics data.json. Fields are null only when no saved collection context is available. Invalid or unreadable updater settings stop cloud sync with a localized message; local reading editing remains available. Requests from older clients without updater context still work and clear the six attribution fields rather than retain stale release information. Records remain keyed by reader and content: these fields describe the latest synced snapshot rather than a release history.

## Profile and reading-data notices

The Reader Profile notice names the **True Buddha Pedia Analytics database**. The manual upload notice explains that manually synced data goes to this database in the cloud after acceptance, and lists reading progress, dates, ratings, recommendations, keywords, subtopics, reader-type classifications, Buddhist knowledge level and practice level. Existing explanations about article bodies, upload controls and collection metadata remain. All 14 languages have matching notice updates; the upload behavior is unchanged.

### Notice and permission controls

| Control | New setup default | Effect when turned off |
| --- | --- | --- |
| I accept the profile notice | Enabled (`profile-v2`) | Blocks Save and upload profile; does not revoke server consent or automatically disable reading uploads |
| I accept the reading data upload notice | Enabled (`reading-v1`) | Clears local reading acceptance and immediately turns off manual reading uploads |
| Allow manual reading data uploads | Enabled | Immediately blocks reading uploads on this device; cloud permission changes only after Save and upload profile succeeds |

Existing explicit settings, including disabled options, survive upgrades. Upload permission cannot be turned on without the current reading notice. Unsupported server notice versions block acceptance/uploads until the plugin supports them. Save profile locally stays available. Turning a switch on does not enroll a reader or upload notes automatically. Applying a disabled cloud permission still requires an accepted profile notice.

The standalone deletion reminder at the bottom of settings and the plugin status bar item are removed. The longer notices still explain retained cloud data. Sync feedback uses confirmation/result dialogs and notices.

## Reader device metadata

With the current profile notice (`profile-v2`) selected, **Save and upload profile** also sends `device_type`, `Client_version` (the plugin version), `os` and `user_agent` to the reader's existing NocoDB row. Each upload replaces the last device snapshot; this is not a device-history table. Metadata is not collected from the administrator's provisioning machine, written into notes, or uploaded on startup, local saves, connection tests or reading sync. No hardware identifier is collected.

Readers whose server consent is missing or older than `profile-v2` must select the current notice and save/upload their profile before cloud reading uploads resume. The latest wording changes retain `profile-v2` and `reading-v1`; they do not force renewed acceptance for readers already on those versions. Older plugins remain usable locally but need upgrading for the revised notice. Clients without metadata can still submit a profile after accepting the current notice; this preserves any previous device snapshot. Device details are client-reported and are not proof of device identity.

## Resizable reading popup

Drag the bottom-right corner of the reading popup to adjust its width and height. The form stacks its controls at narrow widths and scrolls internally. The popup stays within the available window area.

## UI languages

Choose **UI language** in the plugin settings. Choose **Follow system** to use Obsidian's language setting, with English as the fallback. This is the default for new installations. Manual language selections remain available and are saved locally.

Supported codes: `en`, `ja`, `fr`, `es`, `de`, `nl`, `sv`, `ko`, `zh-TW`, `zh-CN`, `vi`, `id`, `th`, `bo`.

The 14 bundled catalogs in `plugin/locales/` cover 193 messages each: settings, reading forms, commands, option labels, consent notices, previews, sync progress/results, local validation, connection failures and all current backend error codes. Countries, months and numeric counters use the selected locale through Intl. Native date controls follow the host's available locale support. Product names, user content, file paths, stable enum codes and existing frontmatter property names are preserved.

Settings and newly opened reading windows use the selected language immediately. Reload the plugin to refresh command-palette names and the ribbon tooltip. Unknown backend errors show a localized fallback rather than raw server text. A server requiring a newer notice version blocks consent/upload until the plugin includes that notice's translation.

Translations were machine drafted, with targeted corrections for demographics, Buddhist terminology and Chinese consent copy. Fluent-speaker review, especially for Tibetan and longer notices, remains recommended before public release. There is no runtime translation request. The optional `scripts/draft-translations.py` regeneration utility sends only English UI copy to Google's public translation endpoint; existing catalog entries are retained.

Run `npm run check` to typecheck, verify catalog parity/placeholders and error-code coverage, test note-format compatibility, and rebuild the plugin and Worker. There is currently no download flow or dashboard/table interface in this MVP.

## Current application resources

| Resource | Value |
|---|---|
| Worker name | `tbpedia-analytics` |
| Expected API URL | `https://cfanalytics.tbpedia.org` |
| NocoDB project | `tbpedia-database` |
| NocoDB base ID | `pk5gkscsb1ke74u` |
| Readers table | `mfm8g7avui42yc2` |
| Content table | `mxaz7a2x6a4bu3m` |
| Reading table | `mqb9kdgs3h3vvli` |
| Local vault | `C:\Users\lotus\OneDrive - SJKC Yu Hua Kajang\Obsidian\AnalyticsV1` |

[Open the NocoDB catalogue](https://nocodb.tbpedia.org/w18ay3wx/pk5gkscsb1ke74u/mxaz7a2x6a4bu3m)

See `reports/nocodb-migration-20261021.json` for the current database migration verification and `reports/deployment-status.json` for historical deployment status; the expected URL alone is not evidence that cloud capture is configured.

The Worker is deployed and configured. The v0.1.21 plugin passes type checking and production builds; 100 of 101 automated tests pass. The existing local vault catalogue test reports missing parent `TBP-275` for two notes. The six-field updater integration was verified with 12 live API checks and NocoDB read-back; synthetic test rows were removed. See `reports/live-updater.json` for that integration run and `reports/release-verification.json` for the packaged release. New installations start with both notices accepted and manual upload permission enabled; upgrades preserve the reader’s existing choices. Native interactive Obsidian QA has not been performed.

## Start using the sample vault

1. Reload the AnalyticsV1 vault in Obsidian. The plugin is installed under `.obsidian/plugins/tbpedia-analytics`; restart Obsidian if needed.
2. Open **Settings → True Buddha Pedia Analytics**. The Worker URL is preconfigured. New installations have both notice options and manual upload permission enabled; upgrades preserve existing settings.
3. Choose **Test connection** to check server availability. No reader connection key is required, and testing does not create or upload a reader profile.
4. Complete every profile field and select at least one reader-type checkbox. Choose **Save profile locally** for offline use, or accept the profile notice and choose **Save and upload profile**.
5. Review the profile notice, reading-data notice and **Allow manual reading data uploads** options (all enabled by default), then choose **Save and upload profile** to apply the cloud permission. No articles upload automatically.
6. Open a canonical note and choose **Open reading data** from the command palette or the book ribbon icon. Save locally first.
7. Choose **Sync current article**, **Save and sync**, or **Sync changed reading data to cloud** to upload deliberately. The six collection fields come from the analytics plugin’s saved `data.json`.

### Refresh records that lack collection metadata

After upgrading, reload the plugin, check that its `data.json` contains the six updater values, then choose **Sync changed reading data to cloud**. Metadata changes affect the fingerprint and make affected notes eligible for sync. **Sync current article** forces a resend for the active note if a cloud record still needs correction. This retains reading values and does not increment the reading count.

The plugin automatically creates and saves a private reader credential in its local `data.json` before the first profile upload. Keep this file when upgrading so the same cloud reader is reused. It is unencrypted and can be copied by vault sync or backups; exclude it from distributed vaults. Existing remembered credentials are reused. A legacy reader whose credential was never saved needs their original credential restored to `stored_token` with `remember_token: true` before cloud uploads can resume. Test connection remains available without a credential.

The updated Worker must be deployed together with the updated plugin to enable automatic reader setup; older Workers still support existing readers but do not enroll new readers.

## MVP content selection and compatibility

The original imported pilot catalogue had **245 items: four books and 241 chapters**, from `01 文集部` and `02 開示部`. Root-level duplicate/translated collections are not enrolled. The translated copy `C03 至上的智慧 (Supreme Wisdom).md` is excluded in favor of its canonical original.

The current local audit (18 October 2026) finds **247 items: four books and 243 chapters**. Two added chapters under `275 解脫道口訣` lack a parent book entry `TBP-275`, which is the reported catalogue-test failure. That test also retains the original 245-item expectation. The audit utility still covers `01 文集部` and `02 開示部`; the plugin scan scope covers all 10 categories. A wider scan does not imply wider cloud catalogue enrollment.

Stable IDs were inserted as `tbpedia_content_id` while preserving every original remaining byte of the selected notes. Originals are backed up under `private/vault-backup-*`. Document `reports/vault-audit.json` records the audit; `reports/content-map.json` maps local paths to IDs. Only catalogue metadata was imported during setup, not existing personal reading data.

Bootstrap IDs are `TBP-154`, `TBP-154-C00`, etc. for 文集部, and `TBS-640`, `TBS-640-C01`, etc. for 開示部. Chapter zero is supported for prefaces. Once assigned, IDs are read from frontmatter and do not change when a file is renamed or moved.

Actual-vault adjustments to the design spec:

- Preserve `基礎閱讀` as `BASIC`; do not pretend it means 通讀. The editor also supports 檢視閱讀, 分析閱讀 and 主題閱讀 as distinct legacy depth options.
- Read `沒讀`/`未讀` as UNREAD.
- Read legacy recommendation/rating keys only when the new personal key is absent. Canonical null values explicitly clear a field and do not revive legacy values.
- Legacy rating zero means unrated. A zero in the new `我的評分` key is rejected; clear it to null instead.
- A list of reflection strings is retained as multiline text when edited. Existing legacy properties remain in the note; the plugin writes the new canonical fields on Save.
- Publisher fields such as 關鍵詞、佛學級別、讀者類型 are not copied into the reader's personal classifications.
- The 640 book-index note is recognized as a book from its catalogue position despite its inherited article-style template.

## Source layout

| Directory/file | Purpose |
|---|---|
| `shared/` | Typed schemas, code/label mappings, fingerprints and legacy reading adapter |
| `plugin/` | Obsidian plugin, manifest, CSS, fixed scan scope and translation catalogs |
| `worker/src/` | Worker routes, reader authentication and NocoDB v3 adapter |
| `worker/wrangler.jsonc` | Deployment name and nonsecret bindings |
| `worker-configuration.d.ts` | Environment bindings generated from Wrangler |
| `schema/nocodb-tables.json` | Portable table/field definitions |
| `scripts/vault.ts` | Read-only audit and backed-up ID preparation |
| `scripts/install-plugin.ts` | Scoped sample-vault installation; preserves plugin data |
| `scripts/provision-reader.ts` | Reader enrollment; prints paths/IDs, never raw credentials |
| `tests/` | Data invariants and route/adapter tests |
| `dist/plugin/` | Installable plugin files |
| `dist/worker.js` | Bundled Worker module |
| `reports/` | Setup inventory, catalogue and verification results |
| `private/` | Local credentials and backups; excluded from release archives |

## Developer commands

Requires a current Node.js/npm installation.

```powershell
npm ci
npm run check
npm run vault:audit
```

Audit does not modify the vault. `npm run vault:prepare` assigns IDs only after the catalogue has no ambiguities and creates a backup before each write. To reinstall a rebuilt plugin:

```powershell
npx tsx scripts/install-plugin.ts --enable
```

The installer is deliberately restricted to the user-named sample vault. It preserves an existing plugin `data.json` and backs up replaced plugin files and the previous enabled-plugin list.

`npx tsx scripts/verify-vault.ts` checks the prepared notes byte-for-byte against the original backups. It is intended immediately after preparation; later deliberate reader edits will naturally differ from those backups.

## Worker configuration

The primary API is `https://cfanalytics.tbpedia.org`. The Wrangler custom-domain route provisions its DNS and certificate. The previous workers.dev endpoint remains enabled for older installations. Upgrades automatically migrate the previous API setting and its sync receipts, while preserving reader credentials, upload permissions and custom API endpoints.

Use a NocoDB API token restricted to this base with Records read/write permission, stored only as the Cloudflare `NOCODB_API_TOKEN` secret. Do not put the service credential in JSON configuration, a command-line argument, source control or the plugin. Other NocoDB capabilities are unnecessary for normal capture.

```powershell
npx wrangler secret put NOCODB_API_TOKEN --config worker/wrangler.jsonc
npx wrangler deploy --config worker/wrangler.jsonc
```

Enter the secret through the interactive prompt. If Wrangler asks to create the new Worker while adding its first secret, this is the named application being provisioned. After configuration changes, regenerate types with `npx wrangler types --config worker/wrangler.jsonc --include-runtime false`; current Workers runtime types are also a pinned development dependency.

`GET /health` is public and contains application/version/configuration status only. `/v1/me` and `/v1/reading/sync` require the reader token. The gateway fails closed if its service credential is missing.

Ordinary readers enroll automatically through their first explicit **Save and upload profile** action; new-reader registration needs no manual credential input. Existing-reader recovery accepts the reader ID alone. The following utility is an optional administrator workflow, not the normal setup path. For administrator-assisted enrollment, set `NOCODB_API_TOKEN`, `NOCODB_BASE_ID` and `READERS_TABLE_ID` in the administrator process environment, then run:

```powershell
npm run provision -- --nickname "Reader nickname" --out private/new-reader.json
```

Use `--prepare-only` to create a private credential file and a separate row definition for administrator-assisted import. Never re-run an enrollment against an existing output filename; the utility refuses to overwrite credentials. Administrators disable the reader or replace their token hash to revoke/rotate access, retaining the reader ID.

## Important pilot limits

One reader/server per vault. A vault may be copied or synced between devices, but use one active uploader at a time; device merging and server write ordering are not implemented. Receipts follow synced notes; a device with stale or missing notes/receipts may upload again or send older reading values. The manifest declares `isDesktopOnly: false`; mobile forms and host-API behavior have automated coverage, while physical Android/iOS testing remains outstanding. Native upsert is not a distributed lock. After an uncertain network write, stop and explicitly resend the latest state when service recovers. Strong ordering, conflict merging and exactly-once processing are outside this MVP.

Synced means the last saved snapshot was verified, not continuous two-way synchronization. Changes or deletions made directly in NocoDB are not detected automatically. **Sync current article** can force a resend. Local note deletion does not delete cloud records; disabling uploads also does not erase them.

The Tbpedia updater must preserve all 17 personal reading properties, `tbpedia_content_id`, `tbpedia_reading_updated_at`, `tbpedia_reading_sync_at` and `tbpedia_reading_sync_hash`. This plugin cannot prevent an unrelated application from replacing an entire Markdown file. Keep ordinary vault backups.

The later Community Edition target uses SQLite; NocoDB Cloud manages its own backend. Table and data portability is designed in, but an actual SQLite deployment/cutover requires the same native-API compatibility checks on the chosen edition/version. No paid-only uniqueness or UUID field is required.

Manual reading uploads require the note frontmatter to contain `tbpedia_reading_updated_at`. Notes without this field are excluded from the pending preview and skipped by both changed-article and current-article sync, even when forced. Saving reading data through the plugin adds this timestamp automatically. Existing cloud records are not deleted.

Reading timestamps: `client_updated_at` uses the note's `tbpedia_reading_updated_at` (last local save). After a verified upload, the plugin writes the returned server `synced_at` into `tbpedia_reading_sync_at`, so the note and NocoDB share the same sync timestamp. The verified hash is saved as `tbpedia_reading_sync_hash` in the same frontmatter write. Receipt fields are excluded from hash input. Failed uploads do not update these fields; notes edited during upload are not marked as synced for the newer local version.

## Self-hosted NocoDB migration — 21 October 2026

The live Worker now uses `https://nocodb.tbpedia.org` and base
`pk5gkscsb1ke74u`. The service token is stored only in the Worker secret
`NOCODB_API_TOKEN`; provide it through the environment when running administrative
scripts. Never place it in the Obsidian plugin, generated assets or Git.

All 245 catalogue entries, both stable reader identities and credential hashes,
and all 29 reading records were verified in the new base. Both existing readers
authenticated successfully through `https://cfanalytics.tbpedia.org/v1/me`.
Worker code and reader-facing endpoints were retained during the settings-only
cutover. Existing notice versions and reader permissions were preserved.

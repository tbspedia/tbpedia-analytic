# Tbpedia Analytics — Phase 1–2 MVP

An offline-first Obsidian reading editor with deliberate, authenticated uploads to NocoDB. This implementation uses the sample AnalyticsV1 vault and the new `tbpedia-analytics` NocoDB project/Cloudflare Worker.

## What is implemented

- Three NocoDB tables: `readers`, `content_items`, `reading_records`.
- Reader profiles including optional birth year/month, sex, country, reader type and organisation. Email is optional and unverified.
- A local Obsidian editor for all 17 reading fields, reading/rereading actions and safe frontmatter writes.
- Manual uploads with native NocoDB v3 upsert, authenticated reader ownership, full-value read-back verification and local upload receipts.
- Cloud uploads off by default. No article bodies or unrelated frontmatter are sent.
- No analytics dashboard, event history, automatic retries or multi-device merging.

## UI languages

Choose **UI language** in the plugin settings. The selection is saved locally; on first use the plugin follows Obsidian's language, with English as the fallback.

Supported codes: `en`, `ja`, `fr`, `es`, `de`, `nl`, `sv`, `ko`, `zh-TW`, `zh-CN`, `vi`, `id`, `th`, `bo`.

The 14 bundled catalogs in `plugin/locales/` cover 183 messages each: settings, reading forms, commands, option labels, consent notices, previews, sync progress/results, local validation, connection failures and all current backend error codes. Countries, months and numeric counters use the selected locale through Intl. Native date controls follow the host's available locale support. Product names, user content, file paths, stable enum codes and existing frontmatter property names are preserved.

Settings and newly opened reading windows use the selected language immediately. Reload the plugin to refresh command-palette names and the ribbon tooltip. Unknown backend errors show a localized fallback rather than raw server text. A server requiring a newer notice version blocks consent/upload until the plugin includes that notice's translation.

Translations were machine drafted, with targeted corrections for demographics, Buddhist terminology and Chinese consent copy. Fluent-speaker review, especially for Tibetan and longer notices, remains recommended before public release. There is no runtime translation request. The optional `scripts/draft-translations.py` regeneration utility sends only English UI copy to Google's public translation endpoint; existing catalog entries are retained.

Run `npm run check` to typecheck, verify catalog parity/placeholders and error-code coverage, test note-format compatibility, and rebuild the plugin and Worker. There is currently no download flow or dashboard/table interface in this MVP.

## Current application resources

| Resource | Value |
|---|---|
| Worker name | `tbpedia-analytics` |
| Expected API URL | `https://tbpedia-analytics.tbspedia.workers.dev` |
| NocoDB project | `tbpedia-analytics` |
| NocoDB base ID | `pwxyh62oc4wdhbg` |
| Readers table | `m0jtd86do2fo2vv` |
| Content table | `m22h8q52rgo45i8` |
| Reading table | `mmphejly9cd41bk` |
| Local vault | `C:\Users\lotus\OneDrive - SJKC Yu Hua Kajang\Obsidian\AnalyticsV1` |

[Open the NocoDB catalogue](https://app.nocodb.com/whvc04xw/pwxyh62oc4wdhbg/m22h8q52rgo45i8)

See `reports/deployment-status.json` for verified deployment status; the expected URL alone is not evidence that cloud capture is configured.

The Worker is deployed and configured. Seventeen automated checks and eight live Cloudflare/NocoDB checks passed, including profile demographics, native upsert retries, clearing fields and upload permission enforcement. Synthetic test rows were removed. The pilot reader still has reading uploads disabled and no existing personal reading data was uploaded during setup. The native Obsidian interface requires a vault reload and has not been driven interactively in this session.

## Start using the sample vault

1. Reload the AnalyticsV1 vault in Obsidian. The plugin is installed under `.obsidian/plugins/tbpedia-analytics` and added to the enabled-plugin list. If it does not load until restart, quit and reopen Obsidian.
2. Open **Settings → Tbpedia Analytics**. The Worker URL is preconfigured; cloud reading uploads remain off.
3. Open the local `private/pilot-reader.json` file in this source folder. Copy only its `reader_token` value into **讀者連線金鑰**, then choose **測試連線**. This file is excluded from distributable ZIP files. The NocoDB service token never belongs in the plugin.
4. Fill your nickname and any optional demographic fields. Choose **儲存個人資料於本機** to save offline, or accept the profile notice and use **儲存並上傳個人資料** to upload.
5. To enable reading upload, accept its separate notice, enable **允許手動上傳閱讀資料**, then **儲存並上傳個人資料** to apply the server permission. This does not upload any notes automatically.
6. Open a canonical note, for example `01 文集部/154 智慧的光環/C01 我慢.md`. Run **Tbpedia Analytics: 開啟閱讀資料** from the command palette or the book ribbon icon.
7. Save locally first. Use **同步目前文章**, **儲存並同步**, or **同步已變更文章** when you deliberately want to upload.

The reader token is kept only in memory unless the reader explicitly enables the remember option. When not remembered, paste it again after restarting Obsidian. Do not share the private credential file or include it in a distributed vault.

## MVP content selection and compatibility

The selected catalogue has **245 items: four books and 241 chapters**, from `01 文集部` and `02 開示部`. Root-level duplicate/translated collections are not enrolled. The translated copy `C03 至上的智慧 (Supreme Wisdom).md` is excluded in favor of its canonical original.

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
| `plugin/` | Obsidian plugin, manifest and CSS |
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

Use a NocoDB API token restricted to this base with Records read/write permission, stored only as the Cloudflare `NOCODB_API_TOKEN` secret. Do not put the service credential in JSON configuration, a command-line argument, source control or the plugin. Other NocoDB capabilities are unnecessary for normal capture.

```powershell
npx wrangler secret put NOCODB_API_TOKEN --config worker/wrangler.jsonc
npx wrangler deploy --config worker/wrangler.jsonc
```

Enter the secret through the interactive prompt. If Wrangler asks to create the new Worker while adding its first secret, this is the named application being provisioned. After configuration changes, regenerate types with `npx wrangler types --config worker/wrangler.jsonc --include-runtime false`; current Workers runtime types are also a pinned development dependency.

`GET /health` is public and contains application/version/configuration status only. `/v1/me` and `/v1/reading/sync` require the reader token. The gateway fails closed if its service credential is missing.

For future enrollment, set `NOCODB_API_TOKEN`, `NOCODB_BASE_ID` and `READERS_TABLE_ID` in the administrator process environment, then run:

```powershell
npm run provision -- --nickname "Reader nickname" --out private/new-reader.json
```

Use `--prepare-only` to create a private credential file and a separate row definition for administrator-assisted import. Never re-run an enrollment against an existing output filename; the utility refuses to overwrite credentials. Administrators disable the reader or replace their token hash to revoke/rotate access, retaining the reader ID.

## Important pilot limits

One reader per vault and one active uploader per reader. Native upsert is not a distributed lock. After an uncertain network write, stop and explicitly resend the latest state when service recovers. Strong ordering, conflict merging and exactly-once processing are outside this MVP.

Synced means the last saved snapshot was verified, not continuous two-way synchronization. Changes or deletions made directly in NocoDB are not detected automatically. **Sync this note** can force a resend. Local note deletion does not delete cloud records; disabling uploads also does not erase them.

The Tbpedia updater must preserve personal reading properties. This plugin cannot prevent an unrelated application from replacing an entire Markdown file. Keep ordinary vault backups.

The later Community Edition target uses SQLite; NocoDB Cloud manages its own backend. Table and data portability is designed in, but an actual SQLite deployment/cutover requires the same native-API compatibility checks on the chosen edition/version. No paid-only uniqueness or UUID field is required.

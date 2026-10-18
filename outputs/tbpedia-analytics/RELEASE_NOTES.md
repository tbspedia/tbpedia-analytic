Fixes the collection metadata source used when syncing reading records.

- Reads and validates `seriesId`, `editionId`, `tbpedia`, `releaseId`, `languageCode` and `title` from the analytics plugin’s own saved `data.json` before upload.
- Reads updater settings directly instead of relying on a file-existence check that can report readable configuration files as missing.
- Preserves saved collection information when the companion updater file is absent.
- Stops sync with a localized message if the saved analytics metadata cannot be read or does not match the captured context.
- Keeps the saved `interface_language` setting independent of collection `languageCode`, and preserves reader settings, credentials, receipts and reading values.
- Updates the README with installation, field mapping, troubleshooting and the metadata-refresh workflow.

Validation: TypeScript checks, all 50 automated tests and production builds passed. The existing six-field API integration has 12 live checks and verified NocoDB read-back. Release ZIP integrity and installed-plugin file hashes were checked. Native interactive Obsidian QA has not been performed.

Upgrade: preserve `data.json`, replace `main.js`, `manifest.json` and `styles.css`, then reload the plugin or restart Obsidian. Choose **Sync changed articles** to refresh affected records; **Sync current article** forces a resend for a selected note.

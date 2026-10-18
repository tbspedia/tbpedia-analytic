Separates local reading edits from successful cloud synchronization.

- Sends the note frontmatter tbpedia_reading_updated_at as NocoDB client_updated_at instead of using upload time.
- Writes tbpedia_reading_sync_at after a verified upload, using the same server timestamp stored in NocoDB synced_at.
- Leaves sync timestamps untouched on failed uploads and does not mark a newer local edit or re-save as synchronized.
- Validates local save timestamps and keeps manual uploads restricted to notes with tbpedia_reading_updated_at.
- Preserves settings, credentials, reading values and sync receipts during upgrades. Existing cloud timestamps change on the next upload.

Validation: TypeScript checks and production builds passed. 52 of 53 tests passed, including three new timestamp tests; the existing local vault catalogue test reports missing parent TBP-275 for two notes. Native interactive Obsidian QA has not been performed.

Upgrade: preserve data.json, replace main.js, manifest.json and styles.css, then reload the plugin or restart Obsidian.

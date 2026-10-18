# v0.1.12 — Article frontmatter sync receipts

Successful reading uploads now save `tbpedia_reading_sync_hash` beside `tbpedia_reading_sync_at` in article frontmatter. The plugin no longer stores a per-article `receipts` map in `data.json` or rewrites that map after every upload.

- Changed-article sync compares the current snapshot against the frontmatter hash. Sync current article continues to force an upload.
- Existing matching receipts migrate to existing, uniquely identified articles on the first plugin reload. Existing frontmatter hashes are preserved; failed migration writes leave the original settings file available for retry.
- Failed or mismatched uploads do not change receipts. Articles edited during an upload remain pending.
- Reader identity, credentials, server settings and collection metadata stay in `data.json`. Receipt fields travel between devices with synced notes; multi-device conflict resolution is unchanged.

Upgrade: preserve `data.json`, replace `main.js`, `manifest.json` and `styles.css`, then reload the plugin or restart Obsidian to migrate receipts. Missing articles and receipts for other destinations are not imported. No Worker deployment is needed for this release.

Validation: TypeScript checks and production builds passed. 67 of 68 automated tests passed, including receipt migration, failed-write retry, changed-article detection and upload receipt checks. The existing local vault catalogue test reports missing parent `TBP-275` for two notes. Native interactive Obsidian QA has not been performed.

Requires a reading-update marker before manually uploading article reading data.

- Only notes whose YAML frontmatter contains tbpedia_reading_updated_at are eligible for manual reading uploads.
- Excludes notes without this field from the pending article preview.
- Rechecks the field immediately before uploading, including forced current-article sync.
- Saving reading data through the plugin adds the timestamp automatically.
- Preserves existing cloud records, plugin settings and sync receipts.

Validation: TypeScript checks and production builds passed. 49 of 50 tests passed; the local vault catalogue test reports missing parent TBP-275 for two notes. Native interactive Obsidian QA has not been performed.

Upgrade: preserve data.json, replace main.js, manifest.json and styles.css, then reload the plugin or restart Obsidian.

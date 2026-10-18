Shows which articles are pending before a manual reading upload.

- Adds a scrollable, numbered list of pending article titles and vault-relative paths to the upload confirmation.
- Keeps the pending, unchanged and invalid counts and the explicit upload confirmation.
- Preserves existing settings, credentials and sync receipts during upgrades.

Validation: TypeScript checks and production builds passed. 49 of 50 tests passed; the local vault catalogue test reports missing parent TBP-275 for two notes. Native interactive Obsidian QA has not been performed.

Upgrade: preserve data.json, replace main.js, manifest.json and styles.css, then reload the plugin or restart Obsidian.

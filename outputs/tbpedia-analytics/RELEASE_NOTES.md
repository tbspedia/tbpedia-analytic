Moves the API to https://cfanalytics.tbpedia.org and improves reader profile settings.

- Automatically migrates the previous API URL and sync receipts while preserving reader keys, upload permissions and custom API endpoints. Existing reader connection keys continue working.
- Removes the API URL field from Connection settings and shortens the successful connection message in all 14 interface languages.
- Allows multiple reader types in the reader profile. Existing single selections are preserved, and NocoDB now stores multiple choices.
- Updates the Worker custom-domain configuration, provisioning and installation scripts, documentation and installable plugin bundle.

Validation: TypeScript checks and production builds passed. 55 of 56 tests passed; the existing local vault catalogue test reports missing parent TBP-275 for two notes. Live API checks verified HTTPS, reader authentication, and saving, loading and clearing multiple reader types. Temporary test records were removed. Native interactive Obsidian QA has not been performed.

Upgrade: preserve data.json, replace main.js, manifest.json and styles.css, then reload the plugin or restart Obsidian. The previous workers.dev endpoint remains available for older installations.

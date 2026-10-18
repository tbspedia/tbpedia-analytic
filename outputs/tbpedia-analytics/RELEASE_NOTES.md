Simplifies reader setup: no reader connection key needs to be entered.

- Removes the Reader connection key field and Remember connection key toggle, while keeping Test connection.
- Test connection checks server availability without creating a reader or uploading profile data. Existing saved readers can still check their reader connection and load their cloud profile.
- Creates and saves a private local credential automatically before the first explicit, consented profile upload. Retries reuse it, and repeated clicks share one upload.
- The Worker enrolls new readers on a valid profile upload and generates reader IDs using crypto.randomUUID(). Existing saved identities, consent requirements and manual upload permissions remain in place.
- Updates connection messages across all 14 languages, documentation and installable bundles.

Validation: TypeScript checks and production builds passed. 61 of 62 automated tests passed; the existing local vault catalogue test reports missing parent TBP-275 for two notes. Seven live API checks verified health without credentials, consent enforcement, automatic reader creation, disabled reading uploads and stable identity on retry. Database read-back confirmed one synthetic reader; it was removed after testing. Native interactive Obsidian QA has not been performed.

Upgrade: preserve data.json, replace main.js, manifest.json and styles.css, then reload the plugin or restart Obsidian. The matching Worker update is required for automatic enrollment. A legacy reader whose credential was not saved needs their original credential restored before cloud uploads can resume. Reader IDs use random UUIDs; database uniqueness constraints are not added in this release.

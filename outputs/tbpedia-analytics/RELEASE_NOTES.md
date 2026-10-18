Reading records now include the installed collection context from `tbpedia-update/data.json`, and the UI language setting has a distinct saved name.

- Captures `seriesId`, `editionId`, `tbpedia`, `releaseId`, `languageCode` and `title` in the analytics plugin’s own `data.json`.
- Uses `installed.releaseId`, with support for a flat `releaseId`; never attributes the updater’s baseline release to the installed collection.
- Sends all six fields with manual reading sync and verifies the saved values in NocoDB.
- Includes collection metadata in sync fingerprints, so a release, language or title change makes otherwise unchanged records eligible for sync again.
- Refreshes updater metadata on startup and before sync. Missing updater settings produce null metadata; unreadable settings stop cloud sync with a localized message. Collection changes during a batch stop further uploads.
- Renames the saved UI setting from `language` to `interface_language`, automatically migrating existing choices. The updater’s `languageCode` remains independent.
- Preserves reading values, credentials, other settings, Follow system, all 14 UI languages and the resizable popup. Existing clients without updater metadata remain supported.

Validation: TypeScript checks, all 47 automated tests and production builds passed. Twelve live API checks and NocoDB read-back verified all six updater fields; temporary test rows were removed. Release ZIP integrity and installed-plugin file hashes were checked. Native interactive Obsidian QA has not been performed.

Install: copy `main.js`, `manifest.json` and `styles.css` into `.obsidian/plugins/tbpedia-analytics/`, preserving `data.json`, then reload the plugin or restart Obsidian. Manually sync changed articles to populate or refresh collection metadata in existing reading records.

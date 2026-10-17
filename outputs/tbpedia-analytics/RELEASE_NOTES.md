Adds a saved UI language selector and complete bundled catalogs for English, Japanese, French, Spanish, German, Dutch, Swedish, Korean, Traditional Chinese, Simplified Chinese, Vietnamese, Indonesian, Thai and Tibetan.

- Translates 183 messages per language across settings, reading forms, commands, dropdown options, privacy notices, previews, validation, backend errors and sync progress/results.
- Formats countries, months and numeric counters using the selected locale.
- Preserves existing note properties, saved reading values, reader settings and credentials.
- Uses localized fallback messages for unknown backend errors and prevents accepting an unsupported privacy notice version.

Validation: TypeScript checks, 24 automated tests and production builds passed. ZIP integrity and installed-plugin file hashes were checked. Native interactive Obsidian QA has not been performed. Translations were machine drafted with targeted corrections; fluent-speaker review is recommended, particularly for Tibetan and longer notices.

Install: copy `main.js`, `manifest.json` and `styles.css` from this release into `.obsidian/plugins/tbpedia-analytics/`, preserving your existing `data.json`, then reload the plugin or restart Obsidian. Choose **UI language** in plugin settings. Reload once more after changing languages to refresh command names and the ribbon tooltip.

Adds **Follow system** as the first option in the UI language selector.

- Uses Obsidian's language setting, with English as the fallback for unsupported languages.
- Keeps the saved automatic preference, so later Obsidian language changes are followed after reload.
- Preserves explicit language choices and uses automatic selection by default for new installations.
- Translates the option and explanatory text into all 14 supported UI languages.
- Preserves reader settings, credentials, device metadata upload behavior and the resizable reading popup.

Validation: TypeScript checks, all 34 automated tests and production builds passed. Release ZIP integrity and installed-plugin file hashes were checked. Native interactive Obsidian QA has not been performed.

Install: copy `main.js`, `manifest.json` and `styles.css` into `.obsidian/plugins/tbpedia-analytics/`, preserving `data.json`, then reload the plugin or restart Obsidian. Choose **UI language → Follow system** in plugin settings. Reload after language changes to refresh command names and the ribbon tooltip.

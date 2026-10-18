# v0.1.13 — Interface cleanup and upload defaults

The plugin settings now use **Sync changed reading data to cloud** for the manual sync button and command. All 14 interface languages have matching translations.

- Removes the Tbpedia status bar item and its local reading/sync messages.
- Removes the final settings reminder about deleting existing cloud records.
- Enables the profile notice, reading-data upload notice and manual upload permission by default for new setups. Upgrades preserve explicit saved choices, including disabled options.
- Profile uploads and reading sync remain manual. New readers still need Save and upload profile to apply cloud permissions.
- Removes eight unused translation entries; each of the 14 catalogs now contains 182 messages.
- Preserves article frontmatter sync receipts, credentials and existing reader settings.

Upgrade: preserve `data.json`, replace `main.js`, `manifest.json` and `styles.css`, then reload the plugin or restart Obsidian. No Worker deployment is required.

Validation: TypeScript checks and production builds passed. 67 of 68 automated tests passed, including catalog parity, translation placeholders and default-option checks. The existing local vault catalogue test reports missing parent `TBP-275` for two chapter notes. Native interactive Obsidian QA has not been performed.

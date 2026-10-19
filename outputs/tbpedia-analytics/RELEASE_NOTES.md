# v0.1.15 — Reading shortcuts and content-ID validation

Released 19 October 2026.

- Renames the reading ribbon action to **Record my reading data** and adds it to Markdown tab headers.
- Adds a **Sync reading data to cloud** ribbon icon using the existing changed-reading sync preview.
- Requires a valid frontmatter `tbpedia_content_id` before opening the reading form, quick-status changes or saving, including if the ID is removed while a form is open. Adds translations in all 14 languages and regression tests.
- Validation: typecheck and production build pass; 72 of 73 tests pass. The existing catalogue test still reports two notes missing parent `TBP-275`. Native Obsidian UI verification has not been performed.

- Corrects the settings page heading from **Tbpedia Analytics** to **True Buddha Pedia Analytics**. The plugin ID remains `tbpedia-analytics`.
- Aligns both READMEs and design specification v2.3 with the implemented enrollment, upload defaults, interface, automatic folder scanning, frontmatter receipts, collection/device metadata and supported limitations.
- Documents that the original pilot catalogue had 245 items, while the current local audit sees 247 and reports two chapters missing parent `TBP-275`. The catalogue test retains the original fixture count.

Upgrade: preserve `data.json`, replace `main.js`, `manifest.json` and `styles.css`, then reload the plugin or restart Obsidian. No Worker deployment is required.

# v0.1.14 — Automatic collection scanning and updated notices

The plugin now scans all 10 collection categories automatically, including Traditional and Simplified Chinese folder names and their subfolders. The Folders to scan setting has been removed.

- Supports the 18 unique root folder names listed in the README; duplicate names are included once. Invisible formatting characters in pasted root folder names are ignored.
- Skips unrelated folders before reading note files. Legacy folder settings no longer control scanning and are removed from saved settings on reload.
- Updates the Reader Profile notice to name the True Buddha Pedia Analytics database.
- Updates the manual upload notice with the requested cloud database name and reading-data categories: progress, dates, ratings, recommendations, keywords, subtopics, reader-type classifications, Buddhist knowledge level and practice level. Upload behavior remains unchanged.
- Updates all 14 interface languages and shared notice text, retaining notice versions `profile-v2` and `reading-v1`. Removes unused folder-setting translations; each catalog contains 180 messages.
- Preserves reader identity, existing notice/upload choices and article frontmatter sync receipts.

Upgrade: preserve `data.json`, replace `main.js`, `manifest.json` and `styles.css`, then reload the plugin or restart Obsidian. No Worker deployment is required.

Validation: TypeScript checks and production builds passed. 69 of 70 automated tests passed, including Traditional/Simplified folder scope, nested paths, exclusion of unrelated roots, translation parity and placeholders. The existing local vault catalogue test reports missing parent `TBP-275` for two chapter notes. Native interactive Obsidian QA has not been performed.

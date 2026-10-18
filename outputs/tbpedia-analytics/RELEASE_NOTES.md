# v0.1.14 — Automatic collection scanning and updated notices

The plugin now scans all 10 collection categories automatically, including Traditional and Simplified Chinese folder names and their subfolders. The Folders to scan setting has been removed.

- Supports the 18 unique root folder names listed in the README; duplicate names are included once. Invisible formatting characters in pasted root folder names are ignored.
- Skips unrelated folders before reading note files. Legacy folder settings no longer control scanning and are removed from saved settings on reload.
- Updates the Reader Profile notice to name the True Buddha Pedia Analytics database.
- Updates the manual upload notice with the requested cloud database name and reading-data categories: progress, dates, ratings, recommendations, keywords, subtopics, reader-type classifications, Buddhist knowledge level and practice level. Upload behavior remains unchanged.
- Updates all 14 interface languages and removes the unused folder-setting translations; each catalog contains 180 messages.
- Preserves reader identity, existing notice/upload choices and article frontmatter sync receipts.

Upgrade: preserve `data.json`, replace `main.js`, `manifest.json` and `styles.css`, then reload the plugin or restart Obsidian. No Worker deployment is required.

Validation: TypeScript checks and production builds passed. 69 of 70 automated tests passed, including Traditional/Simplified folder scope, nested paths, exclusion of unrelated roots, translation parity and placeholders. The existing local vault catalogue test reports missing parent `TBP-275` for two chapter notes. Native interactive Obsidian QA has not been performed.

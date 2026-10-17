The Tbpedia reading data popup can now be resized horizontally and vertically by dragging its bottom-right corner.

- Keeps the popup within the available window area and scrolls long forms internally.
- Stacks form controls at narrower widths and keeps text areas and dropdowns within the popup.
- Retains the existing 14 UI languages and reading-data format.

Validation: TypeScript checks, all 24 automated tests and production builds passed. Release ZIP integrity and installed-plugin file hashes were verified. Native interactive Obsidian QA has not been performed.

Install: copy `main.js`, `manifest.json` and `styles.css` into `.obsidian/plugins/tbpedia-analytics/`, preserving your existing `data.json`, then reload the plugin or restart Obsidian.

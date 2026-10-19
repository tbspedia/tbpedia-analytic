# v0.1.18 — Reader-ID-only recovery

Released 19 October 2026.

- Simplifies existing-reader recovery to one Reader ID field; removes sync-credential input and copying controls.
- Treats the Reader ID as an account access key for profile retrieval, profile updates and reading sync. Legacy credentials remain valid; recovery does not rotate them.
- Validates IDs, active account status, existing consent and upload permissions; unknown IDs cannot enroll. ID recovery itself performs only a profile read.
- Cloud deployed on 19 October 2026. Live read-only checks verify profile retrieval by Reader ID, legacy credential compatibility, rejection of unknown IDs and service health.
- Updates all 14 interface languages and documents how to retrieve an existing profile using its Reader ID.
- Validation: typecheck, builds and Worker deployment dry run pass. 87 of 88 tests pass; the existing catalogue test still reports two notes missing parent TBP-275.

Upgrade: preserve `data.json`, replace `main.js`, `manifest.json` and `styles.css`, then reload the plugin or restart Obsidian. The compatible cloud service is already deployed. Reader IDs grant account access and should be kept private.

# v0.1.17 — Remove obsolete connected-reader controls

Released 19 October 2026.

- Removes the settings line showing Connected: Nickname and Cloud reading permission: Enabled/Disabled, along with the Use existing cloud profile / Load cloud profile setting. These controls mistakenly remained visible for connected readers in v0.1.16.
- Deletes their unused translations from all 14 catalogs.
- Corrects the regression test to render a connected reader, which reproduces the v0.1.16 bug before the fix and passes after removal.
- Retains reader-ID/credential recovery, required profile fields, reader-type checkboxes and the personalized successful-connection notification.
- Validation: typecheck and build pass; 84 of 85 tests pass. The existing catalogue test still reports two notes missing parent TBP-275. Native Obsidian UI verification has not been performed.

Upgrade: preserve data.json, replace main.js, manifest.json and styles.css, and reload the plugin or restart Obsidian. No Worker deployment is included.

# v0.1.16 — Reader recovery and required profiles

Released 19 October 2026.

- Successful connection messages greet the reader by nickname.
- Removes the settings connection-summary line and standalone Load cloud profile option.
- Adds new-reader registration or existing-reader recovery using a reader ID and private sync credential, verifying the pair before saving the cloud profile locally. Linked readers can copy their credential for recovery in another vault.
- Requires every profile field and at least one reader type before local saving or uploading. Replaces reader-type toggles with labeled checkbox boxes supporting multiple selections. Existing incomplete profiles remain readable.
- Updates all 14 interface languages, profile-notice wording, and shared Worker request validation. The Worker validation change is built but has not been deployed.
- Validation: typecheck and build pass; 84 of 85 automated tests pass. The existing catalogue test still reports two notes missing parent TBP-275. Native Obsidian UI testing has not been performed.

Upgrade: preserve `data.json`, replace `main.js`, `manifest.json` and `styles.css`, then reload the plugin or restart Obsidian. Existing-reader recovery uses the current authenticated cloud service. Server-side required-field enforcement needs a separate Worker deployment; this plugin release does not deploy the Worker.

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

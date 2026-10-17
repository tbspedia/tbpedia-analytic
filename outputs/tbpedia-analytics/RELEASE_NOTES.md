Reader profile uploads now populate `device_type`, `Client_version`, `os` and `user_agent` in NocoDB.

- Detects the reader device and operating system, uses the installed plugin version, and bounds the user-agent string.
- Sends metadata only when the reader chooses **Save and upload profile**, after accepting the updated profile notice (`profile-v2`). The notice is updated in all 14 UI languages.
- Validates the submitted fields, preserves the authenticated reader identity, and verifies the saved metadata before confirming success.
- Keeps the most recently uploaded device snapshot. Local saves, connection tests and reading sync do not upload device metadata.
- Preserves existing reader settings, credentials, note properties, the resizable popup and the updated plugin name, **True Buddha Pedia Analytics**.

Existing readers: upgrade/reload the plugin, accept the updated profile notice, then choose **Save and upload profile** to populate the device fields and renew consent. Reading uploads require the current profile consent even if no device metadata is supplied.

Validation: TypeScript checks, all 33 automated tests and production builds passed. Live API/NocoDB device metadata verification, release ZIP integrity and installed-plugin file hashes were checked. Native interactive Obsidian QA has not been performed. Fluent-speaker review remains recommended for the translated notices.

Install: copy `main.js`, `manifest.json` and `styles.css` into `.obsidian/plugins/tbpedia-analytics/`, preserving `data.json`, then reload the plugin or restart Obsidian.

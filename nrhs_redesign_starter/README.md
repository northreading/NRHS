# NRHS redesign starter

This is a **starter extraction**, not a finished redesign. It separates the page into manageable files:

- `index.html` — small entry point
- `style.css` — the place to edit the redesign's colors, spacing, navigation, and mobile styling
- `script.js` — loads the preserved content and handles basic link/image behavior
- `school-content.html` — the large preserved school-page markup

## Important notes
- The source you supplied was a downloaded copy of the official NRHS homepage. This extraction keeps the `#fsPageWrapper` school-page markup, images, links, and embedded frames, while removing inline scripts/styles and obvious browser-extension UI.
- Because the original site's JavaScript and CSS were removed, interactive items that depended on the original vendor scripts (for example, some sliders, menus, or calendar widgets) may be static or need to be rebuilt. Check those before publishing.
- `school-content.html` should generally be treated as the preserved content file; make normal design changes in `style.css`.
- The content loader uses `fetch()`, so test through GitHub Pages or a local web server rather than opening `index.html` directly as a `file://` URL.
- Review the extracted content before replacing anything in your GitHub repository. This starter does not automatically modify your repository.

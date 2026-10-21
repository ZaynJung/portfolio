# Zayn | Art & Design

A responsive, static portfolio based on the layout sketch. No framework,
dependencies, or build step is required.

## Pages

- `index.html`: featured slideshow, navigation, six selected works, and an about preview.
- `projects.html`: a six-project grid with room for descriptions.
- `about.html`: biography, portrait, and contact placeholders.
- `assets/css/styles.css`: shared layout, light/dark theme, and placeholder artwork.
- `assets/js/site.js`: accessible, manual slideshow controls.

The slideshow supports previous/next and direct slide selection with keyboard-accessible
buttons. It does not auto-advance. Without JavaScript, all three featured works remain
visible and navigation still works.

## Publish with GitHub Pages

1. Commit and push these files to `main`.
2. In the repository on GitHub, open **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select **main** and **/ (root)**, then **Save**.
5. Wait for the Pages deployment to finish; GitHub will show the published URL.

Without a custom domain, the expected URL for this repository is:

**https://zaynjung.github.io/zaynjungart.github.io/**

This is a project site: the repository name does not match `ZaynJung.github.io`,
so the repository name is included in the URL. If **Custom domain** is configured
in Pages settings, that changes the published URL; clear it if you want the default
address above. All local links use relative paths so the site supports either setup.
`.nojekyll` tells Pages to serve the files without Jekyll processing.

## Preview locally

Open `index.html` in a browser, or, if Python is installed, serve the repository:

```powershell
python -m http.server 8000
```

Then open **http://localhost:8000**. Stop the server with Ctrl+C.

## Add your own content

All artwork, project names, biography text, and the portrait are explicitly marked
placeholders, not completed portfolio content.

- Put your image files in a new `assets/images` folder.
- Replace each placeholder `<div class="artwork ...">...</div>` with an image, for
  example `<img class="artwork" src="assets/images/my-project.jpg" alt="Describe your artwork" width="1200" height="900">`.
  Use forward slashes in HTML URLs. Image sizing is already included in the stylesheet;
  change `img.artwork` to use `object-fit: contain` if the full uncropped artwork
  should be visible.
- Update both the homepage selection and Projects page with your titles and descriptions.
- Replace the portrait placeholders with an image and descriptive alternative text.
- Write your biography in `about.html` and update the short introduction in `index.html`.
- Add real contact/social links when ready; no fake contact details are included.
- Update page titles, descriptions, and the shared navigation/footer in all three HTML files.

The theme follows the visitor's system preference. For a single-page preview,
append `?scoutTheme=light` or `?scoutTheme=dark` to its URL.
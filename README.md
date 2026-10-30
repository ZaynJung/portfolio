# Zayn | Art & Design

Zayn Jung's art and design portfolio, built with React and Vite and hosted at
**https://zaynjung.github.io/portfolio/**.

## Website structure

- `index.html`: a 16:9 featured-project carousel and three project cards.
- `project-1.html`: SHOTGUN! (2025).
- `project-2.html`: The Eternals, Primordial and The Universe (2026).
- `project-3.html`: Mythverse: Cosmic Curios (2026).
- `src/App.jsx`: page content, shared About Me footer, navigation, and carousel.
- `src/project-images.js`: image filenames, gallery order, dimensions, and thumbnails.
- `assets/css/styles.css`: shared styling and responsive layouts.

The carousel advances every 30 seconds and also supports previous/next arrows and
direct slide selection. About Me appears in the shared footer on all four pages.

## Preview locally

Use Node.js 24 (the version used for deployment) and npm:

```powershell
npm ci
npm run dev
```

Open the local URL printed by Vite. To preview a production build:

```powershell
npm run build
npm run preview
```

Do not open the HTML files directly or deploy the unbuilt source.

## Deploy with GitHub Pages

The repository is **https://github.com/ZaynJung/portfolio**.

1. In the repository's **Settings > Pages**, select **GitHub Actions** as the source.
2. Push changes to `main`, or run **Deploy portfolio to GitHub Pages** manually from
   the Actions tab.
3. Wait for the build and deployment jobs to succeed.
4. Open **https://zaynjung.github.io/portfolio/**.

`.github/workflows/deploy-pages.yml` installs dependencies with `npm ci`, reads
GitHub's Pages configuration, builds with the configured URL base path
(`/portfolio/`), and publishes `dist`. The deployment environment URL comes from
the Pages action. Do not select **Deploy from a branch**.

Local builds use relative URLs by default; deployment supplies the Pages base path
to Vite so scripts, fonts, and images load under `/portfolio/`.

## Update artwork and content

Project images are stored in:

```text
public/images/projects/
  SHOTGUN!/
  The Eternals/
  Mythverse CC/
```

Each folder's `thumbnail.png` is used for both its carousel image and Projects card.
Thumbnails are separate from the detail-page galleries.

Gallery filenames and order are explicitly listed in `src/project-images.js`:

| Project | Gallery images | Gallery dimensions |
| --- | --- | --- |
| SHOTGUN! | 15 | 4678 x 1654 |
| The Eternals | 3 | 3300 x 1800 |
| Mythverse CC | 18, numbered 1 through 18 | 1024 x 363 |

Replace files using the same names, or update the manifest when filenames,
dimensions, or gallery order change. Filenames are case-sensitive on GitHub Pages.
Keep web-sized copies here and retain full-resolution originals separately.

Edit project descriptions and the shared biography in `src/App.jsx`. The profile
photo is `assets/images/pfp.jpg`, rendered by `Portrait`. The icon-only LinkedIn
and email links are configured in `SocialLinks`.

## Artwork and third-party licenses

Original artwork usage terms are in `public/ARTWORK-LICENSE.txt`, published at
https://zaynjung.github.io/portfolio/ARTWORK-LICENSE.txt. They prohibit unauthorized
reuse, including AI inputs and training, subject to applicable law.

Third-party licenses remain separate: `public/THIRD_PARTY_NOTICES.txt` includes
the layout attribution, and `public/Oswald-OFL.txt` covers the self-hosted Oswald
font.

# Hazel Khosravi — Portfolio

A single-page portfolio for Hazel Khosravi, product / UX / visual designer (Adelaide, SA).
Skills, three case studies with the research behind them, process, and contact.

## Layout

```
index.html      the website — a complete, standalone HTML file
artifact.html   the same page as a fragment, for publishing as a Claude Artifact
build.js        builds both outputs from src/
src/page.html   the source page; images appear as __IMG_*__ tokens
src/img/        webp assets, inlined at build time
content/        the long-form case studies the page draws from
```

`index.html` and `artifact.html` are generated. Edit `src/page.html`, then rebuild.

## Build

```bash
node build.js
```

No dependencies. Every image is inlined as a base64 data URI, so each output is one
self-contained file — the only external request is the Google Fonts stylesheet.

## Notes

- **Themes.** Light and dark are both designed. The palette lives in one token block
  at the top of `src/page.html`; nothing sets a colour outside it. The `<dialog>`
  elements explicitly reset `background` / `color`, because the browser default
  (`Canvas` / `CanvasText`) follows the OS theme rather than the page's and makes the
  case-study text unreadable when the two disagree.
- **Case studies** open in a modal, so the page stays short while the detail stays one
  click away.
- **Motion** — custom cursor, marquees, sticky project stack, magnetic buttons — is all
  disabled under `prefers-reduced-motion`, and pointer effects are skipped on touch.

## Disclosure carried on the page

Each project is labelled for what it actually is, and this should stay true if the
content is edited:

- **Technolife** — self-directed concept. Not commissioned by Technolife.
- **Samatim** — shipped, live on Google Play.
- **RunX** — concept, made by a team of five. Hazel's part was research, information
  architecture, and the Plan / Progress wireframes.

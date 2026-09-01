# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page portfolio for Hazel Khosravi (product / UX / visual designer), deployed via GitHub Pages at hazelkhv.github.io. No framework, no npm dependencies for the site itself — one hand-authored HTML file, built into two static outputs.

## Build

```bash
node build.js
```

- `src/page.html` is the only file you should hand-edit for the live page. It contains head content (title, font link, `<style>`) followed by the body markup, with images referenced as `__IMG_*__` tokens (see the `IMAGES` map at the top of `build.js`).
- `build.js` inlines every image in `src/img/` as a base64 `data:` URI into that markup, then produces two files at the repo root:
  - `index.html` — the complete, standalone document actually served by GitHub Pages.
  - `artifact.html` — the same content as a bare fragment, for publishing as a Claude Artifact (which supplies its own doctype/head/body).
- **`index.html` and `artifact.html` are generated — never edit them directly.** Edit `src/page.html`, then rerun `node build.js` before committing. If you edit `src/page.html` without rebuilding, the deployed site silently falls out of sync with the source.
- The build has no dependencies beyond Node's `fs`/`path`; it fails loudly (`throw`) if an `__IMG_*__` token is missing its file, or if an image file exists but its token is never referenced — both are worth taking seriously since they mean the two are out of sync.

`compose-portrait.js` (`node compose-portrait.js [cutout.png] [out.webp]`) is a separate, occasional-use script that composites `src/img/portrait-cutout.png` onto a gradient background to produce `src/img/portrait.webp`. It requires `sharp`, and currently `require()`s it from an absolute, machine-specific path outside this repo — it will not run as-is on another machine without editing that path or installing `sharp` locally.

## Deploy

```bash
node build.js
git add -A && git commit -m "..." && git push
```

GitHub Pages serves `index.html` from `main`. The repo name (`hazelkhv.github.io`) is what puts the site at the domain root rather than a project path. A push to `main` republishes within a minute or two — there is no CI/build step on the GitHub side, so the committed `index.html` must already be the fully-built output.

## Architecture of `src/page.html`

Everything lives in one file, organized as HTML comment banners (`<!-- ===== NAME ===== -->`) marking top-level sections in document order: NAV, HERO, MARQUEE, SKILLS, WORK, PROCESS, CERTIFICATIONS, FAQ, CONTACT, then MODALS, then a single inline `<script>`.

**Theming.** The entire palette is a CSS custom-property block at the top of `<style>` (`:root { --bg, --ink, --accent, ... }`), redefined once under `@media (prefers-color-scheme:dark)` and again under `:root[data-theme="dark"]`. No color is ever set outside that block. The `<dialog>` elements explicitly reset `background`/`color` because the UA default (`Canvas`/`CanvasText`) tracks the OS theme rather than the page's `data-theme`, which breaks case-study text if the two disagree. The theme toggle in the script writes `data-theme` to `<html>` and persists it to `localStorage` under `hk-t`.

**Case studies live in `<dialog>` modals, not separate pages.** Each of the three WORK section project cards (`.pj`) has an `Explore project` button with `data-mdl="m-<id>"`; the click handler at the bottom of the script does `document.getElementById(id).showModal()`. The corresponding `<dialog class="mdl" id="m-<id>">` sits in the MODALS block near the end of the body. Adding or editing a case study means touching both the card teaser in WORK and its modal body in MODALS — they are independent markup, not templated from one source.

**`content/*.md`** (`01-technolife.md`, `02-samatim.md`, `03-runx.md`) are long-form source documents the modal copy is drawn from — they are not rendered by the site or referenced by the build. When case-study facts change, update both the relevant `content/*.md` and the corresponding modal in `src/page.html`; they are meant to stay in sync but nothing enforces that automatically.

**Motion is opt-out, not opt-in.** Custom cursor, marquees, the sticky project stack, and magnetic buttons are all live by default and explicitly disabled under `prefers-reduced-motion` (checked once via `matchMedia` in the script) and skipped on touch (`(hover:hover) and (pointer:fine)` gate). Any new interactive/motion element should follow the same two gates rather than assuming a mouse-driven, motion-tolerant viewer.

**Reveal-on-scroll** (`.rv` class) uses one shared `IntersectionObserver`, with a fallback that just adds the `in` class immediately (for `prefers-reduced-motion` or missing `IntersectionObserver`) — new sections/elements that should animate in on scroll need the `.rv` class, not a bespoke observer.

## Content accuracy

Each project card/modal states what kind of work it was (shipped / commissioned client work / team project), and that framing has been a real source of errors before — verify project-type claims against what the user tells you rather than the existing copy when in doubt. Where a fact isn't verified, the convention in this repo is an inline `TODO(hazel): ...` HTML comment near the claim, not a guess.

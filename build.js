/**
 * Builds the portfolio from src/page.html into two outputs:
 *
 *   index.html     a complete, standalone HTML document — this is the website
 *   artifact.html  the same page as a fragment, for publishing as a Claude Artifact
 *                  (that host supplies its own doctype/head/body wrapper)
 *
 * Every image is inlined as a base64 data URI, so both outputs are single files
 * with no external requests apart from the Google Fonts stylesheet.
 *
 * Usage: node build.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');
const IMG = path.join(SRC, 'img');

// Token in src/page.html -> file in src/img
const IMAGES = {
  __IMG_PORTRAIT__: 'portrait.webp',
  __IMG_TECH_LIST__: 'tech-list.webp',
  __IMG_RUNX_HOME__: 'runx-home.webp',
  __IMG_RUNX_PLAN__: 'runx-plan.webp',
  __IMG_RUNX_RUN__: 'runx-run.webp',
  __IMG_SAM_HOME__: 'sam-home.webp',
  __IMG_SAM_LOAD__: 'sam-load.webp',
  __IMG_SAM_VEHICLE__: 'sam-vehicle.webp',
};

const DESCRIPTION =
  'Hazel Khosravi — product, UX and visual designer. Case studies for Samatim, ' +
  'Technolife and RunX, with the research behind each one.';

// A tab icon without a binary file: the emoji drawn inside an inline SVG.
const FAVICON =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
      '<text y=".9em" font-size="90">📐</text></svg>'
  );

function inlineImages(html) {
  for (const [token, file] of Object.entries(IMAGES)) {
    const file_path = path.join(IMG, file);
    if (!fs.existsSync(file_path)) throw new Error(`missing image: ${file}`);
    if (!html.includes(token)) throw new Error(`token never used: ${token}`);
    const uri = 'data:image/webp;base64,' + fs.readFileSync(file_path).toString('base64');
    html = html.split(token).join(uri);
  }
  const unresolved = html.match(/__IMG_[A-Z_]+__/g);
  if (unresolved) throw new Error(`unresolved tokens: ${[...new Set(unresolved)].join(', ')}`);
  return html;
}

/**
 * src/page.html is authored as head-ish content (title, font link, styles)
 * followed by markup. Split at the end of the stylesheet so each half lands in
 * the right place in a real document.
 */
function wrapAsDocument(fragment) {
  const marker = '</style>';
  const cut = fragment.indexOf(marker);
  if (cut === -1) throw new Error('no </style> found — cannot split head from body');
  const head = fragment.slice(0, cut + marker.length).trim();
  const body = fragment.slice(cut + marker.length).trim();

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${DESCRIPTION}">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="${FAVICON}">
${head}
</head>
<body>
${body}
</body>
</html>
`;
}

const fragment = inlineImages(fs.readFileSync(path.join(SRC, 'page.html'), 'utf8'));

const outputs = [
  ['artifact.html', fragment],
  ['index.html', wrapAsDocument(fragment)],
];

for (const [name, content] of outputs) {
  fs.writeFileSync(path.join(ROOT, name), content);
  console.log(name.padEnd(15), Math.round(Buffer.byteLength(content) / 1024) + 'KB');
}

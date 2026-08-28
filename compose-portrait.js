/**
 * Builds src/img/portrait.webp from the cut-out subject.
 *
 *   node compose-portrait.js [cutout.png] [out.webp]
 *
 * The subject arrives as a PNG with the studio background already removed.
 * This step:
 *   1. erodes the alpha a little, to bite off the white fringe the matte
 *      leaves around hair — otherwise the cut-out reads as a cut-out;
 *   2. sets the subject on a vertical accent gradient;
 *   3. fades the whole composite to TRANSPARENT toward the bottom, so it melts
 *      into whatever the page background is — which is what makes it work in
 *      both the light and the dark theme, and hides the straight edges where
 *      the shoulders ran off the sides of the original photo.
 */

const sharp = require('c:/Users/Nazanin Khosravi/Desktop/Nexa/site/node_modules/sharp');
const fs = require('fs');
const path = require('path');

const CUT = process.argv[2] || path.join(__dirname, 'src', 'img', 'portrait-cutout.png');
const OUT = process.argv[3] || path.join(__dirname, 'src', 'img', 'portrait.webp');

// 4:5, matching the arch container so object-fit crops nothing.
const W = 660, H = 825;

const TOP = { r: 0x25, g: 0x42, b: 0xf0 };   // accent
const BOT = { r: 0x8f, g: 0x9f, b: 0xf5 };   // accent, lightened

const FADE_START = 0.52;   // where the composite starts dissolving
const FADE_END = 0.93;     // where nothing is left

// The near-white the original photo was shot against, sampled from its corner.
const BACKDROP = 249;

(async () => {
  // ---- 1. decontaminate the edge -------------------------------------------
  // Every partly-transparent pixel is a blend of the subject and the studio
  // backdrop it was shot on: observed = fg*a + bg*(1-a). Eroding those pixels
  // away costs hair detail and still leaves a rim, so solve for fg instead and
  // put the true colour back. This is what removes the white halo.
  const { data, info } = await sharp(CUT).ensureAlpha().raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3] / 255;
    if (a > 0.004 && a < 0.996) {
      for (let c = 0; c < 3; c++) {
        const fg = (data[i + c] - BACKDROP * (1 - a)) / a;
        data[i + c] = fg < 0 ? 0 : fg > 255 ? 255 : Math.round(fg);
      }
    }
  }

  const tightened = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png().toBuffer();
  const meta = { width: info.width, height: info.height };

  // ---- 2. gradient ground ---------------------------------------------------
  const grad = Buffer.alloc(W * H * 3);
  for (let y = 0; y < H; y++) {
    const t = y / (H - 1);
    const r = Math.round(TOP.r + (BOT.r - TOP.r) * t);
    const g = Math.round(TOP.g + (BOT.g - TOP.g) * t);
    const b = Math.round(TOP.b + (BOT.b - TOP.b) * t);
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 3;
      grad[i] = r; grad[i + 1] = g; grad[i + 2] = b;
    }
  }
  const ground = await sharp(grad, { raw: { width: W, height: H, channels: 3 } })
    .png().toBuffer();

  // ---- 3. place the subject -------------------------------------------------
  const subjectW = Math.round(W * 0.86);
  const subjectH = Math.round(subjectW * (meta.height / meta.width));
  const subject = await sharp(tightened).resize(subjectW, subjectH).png().toBuffer();

  const left = Math.round((W - subjectW) / 2);
  const top = Math.round(H * 0.10);

  const flat = await sharp(ground)
    .composite([{ input: subject, left, top }])
    .png()
    .toBuffer();

  // ---- 4. fade the whole thing out downward ---------------------------------
  // One ramp over the composite, not over subject and ground separately, so
  // they dissolve together and leave no seam. `dest-in` reads the mask's ALPHA
  // channel, so the ramp has to live there — a greyscale mask erases nothing.
  const mask = Buffer.alloc(W * H * 4);
  for (let y = 0; y < H; y++) {
    const t = y / (H - 1);
    let a = 255;
    if (t > FADE_START) {
      const k = Math.min(1, (t - FADE_START) / (FADE_END - FADE_START));
      a = Math.round(255 * (1 - k * k * (3 - 2 * k)));  // smoothstep
    }
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 4;
      mask[i] = 255; mask[i + 1] = 255; mask[i + 2] = 255; mask[i + 3] = a;
    }
  }

  await sharp(flat)
    .composite([{
      input: await sharp(mask, { raw: { width: W, height: H, channels: 4 } }).png().toBuffer(),
      blend: 'dest-in',
    }])
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(OUT);

  const o = await sharp(OUT).metadata();
  console.log(`subject ${meta.width}x${meta.height} -> ${subjectW}x${subjectH} at (${left},${top})`);
  console.log(`out ${o.width}x${o.height} alpha=${o.hasAlpha}`, Math.round(fs.statSync(OUT).size / 1024) + 'KB');
})();

const sharp = require('c:/Users/Nazanin Khosravi/Desktop/Nexa/site/node_modules/sharp');
const fs = require('fs');

const CUT = process.argv[2] || __dirname + '/src/img/portrait-cutout.png';
const OUT = process.argv[3] || __dirname + '/src/img/portrait.webp';

// 4:5, matching the arch container so nothing is cropped by object-fit.
const W = 660, H = 825;

// The accent, and the same hue lightened — the gradient the arch fills with.
const TOP = { r: 0x25, g: 0x42, b: 0xf0 };
const BOT = { r: 0xa8, g: 0xb4, b: 0xf7 };

(async () => {
  const meta = await sharp(CUT).metadata();

  // Vertical gradient, built as raw pixels so it needs no SVG rasterising.
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
  const background = await sharp(grad, { raw: { width: W, height: H, channels: 3 } })
    .png().toBuffer();

  // Scale the subject so blue shows either side of the head, with the
  // shoulders running to the bottom edge for the fade to dissolve.
  const subjectW = Math.round(W * 0.86);
  const subjectH = Math.round(subjectW * (meta.height / meta.width));
  const subject = await sharp(CUT).resize(subjectW, subjectH).png().toBuffer();

  // Fade the lower part of the subject out, the way the reference does.
  // The mask must carry the ramp in its ALPHA channel — `dest-in` reads alpha,
  // so a plain greyscale mask is fully opaque and erases nothing.
  const fadeStart = 0.62, fadeEnd = 1.0;
  const mask = Buffer.alloc(subjectW * subjectH * 4);
  for (let y = 0; y < subjectH; y++) {
    const t = y / (subjectH - 1);
    let a = 255;
    if (t > fadeStart) {
      const k = Math.min(1, (t - fadeStart) / (fadeEnd - fadeStart));
      a = Math.round(255 * (1 - k * k)); // ease out, so the fade starts gently
    }
    for (let x = 0; x < subjectW; x++) {
      const i = (y * subjectW + x) * 4;
      mask[i] = 255; mask[i + 1] = 255; mask[i + 2] = 255; mask[i + 3] = a;
    }
  }
  const faded = await sharp(subject)
    .composite([{
      input: await sharp(mask, { raw: { width: subjectW, height: subjectH, channels: 4 } })
        .png().toBuffer(),
      blend: 'dest-in',
    }])
    .png().toBuffer();

  const left = Math.round((W - subjectW) / 2);
  const top = Math.round(H * 0.11);

  await sharp(background)
    .composite([{ input: faded, left, top }])
    .webp({ quality: 90 })
    .toFile(OUT);

  const o = await sharp(OUT).metadata();
  console.log(`subject ${meta.width}x${meta.height} -> ${subjectW}x${subjectH} at (${left},${top})`);
  console.log(`out ${o.width}x${o.height}`, Math.round(fs.statSync(OUT).size / 1024) + 'KB');
})();

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ICON_SVG = path.join(__dirname, '../public/icon.svg');
const RES_DIR = path.join(__dirname, '../android/app/src/main/res');

// Emblem SVG without the dark background for adaptive foreground
const EMBLEM_SVG = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <circle cx="256" cy="256" r="200" fill="none" stroke="#22d3ee" stroke-width="16" stroke-dasharray="20 40"/>
  <circle cx="256" cy="256" r="160" fill="none" stroke="#0ea5e9" stroke-width="8"/>
  <polygon points="256,120 320,340 192,340" fill="none" stroke="#f59e0b" stroke-width="12"/>
  <path d="M256 120 L256 340" stroke="#f59e0b" stroke-width="6"/>
  <circle cx="256" cy="256" r="40" fill="#f59e0b"/>
</svg>
`);

const mipmaps = [
  { dir: 'mipmap-mdpi', iconSize: 48, fgSize: 108 },
  { dir: 'mipmap-hdpi', iconSize: 72, fgSize: 162 },
  { dir: 'mipmap-xhdpi', iconSize: 96, fgSize: 216 },
  { dir: 'mipmap-xxhdpi', iconSize: 144, fgSize: 324 },
  { dir: 'mipmap-xxxhdpi', iconSize: 192, fgSize: 432 },
];

const splashScreens = [
  { dir: 'drawable', w: 480, h: 320 },
  { dir: 'drawable-land-hdpi', w: 800, h: 480 },
  { dir: 'drawable-land-mdpi', w: 480, h: 320 },
  { dir: 'drawable-land-xhdpi', w: 1280, h: 720 },
  { dir: 'drawable-land-xxhdpi', w: 1600, h: 960 },
  { dir: 'drawable-land-xxxhdpi', w: 1920, h: 1280 },
  { dir: 'drawable-port-hdpi', w: 480, h: 800 },
  { dir: 'drawable-port-mdpi', w: 320, h: 480 },
  { dir: 'drawable-port-xhdpi', w: 720, h: 1280 },
  { dir: 'drawable-port-xxhdpi', w: 960, h: 1600 },
  { dir: 'drawable-port-xxxhdpi', w: 1280, h: 1920 },
];

async function generateAssets() {
  console.log('Generating Android and Web icon assets...');

  // 1. Web icons in /public
  await sharp(ICON_SVG).resize(192, 192).png().toFile(path.join(__dirname, '../public/icon-192x192.png'));
  await sharp(ICON_SVG).resize(512, 512).png().toFile(path.join(__dirname, '../public/icon-512x512.png'));
  await sharp(ICON_SVG).resize(180, 180).png().toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  // 2. Android Mipmap icons
  for (const m of mipmaps) {
    const targetDir = path.join(RES_DIR, m.dir);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    // ic_launcher.png
    await sharp(ICON_SVG)
      .resize(m.iconSize, m.iconSize)
      .png()
      .toFile(path.join(targetDir, 'ic_launcher.png'));

    // ic_launcher_round.png with circle mask
    const circleMask = Buffer.from(
      `<svg><circle cx="${m.iconSize / 2}" cy="${m.iconSize / 2}" r="${m.iconSize / 2}" fill="#fff"/></svg>`
    );
    await sharp(ICON_SVG)
      .resize(m.iconSize, m.iconSize)
      .composite([{ input: circleMask, blend: 'dest-in' }])
      .png()
      .toFile(path.join(targetDir, 'ic_launcher_round.png'));

    // ic_launcher_foreground.png (emblem scaled to 66% inside fgSize canvas)
    const emblemSize = Math.round(m.fgSize * 0.66);
    const emblemBuffer = await sharp(EMBLEM_SVG)
      .resize(emblemSize, emblemSize)
      .png()
      .toBuffer();

    const top = Math.round((m.fgSize - emblemSize) / 2);
    const left = Math.round((m.fgSize - emblemSize) / 2);

    await sharp({
      create: {
        width: m.fgSize,
        height: m.fgSize,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([{ input: emblemBuffer, top, left }])
      .png()
      .toFile(path.join(targetDir, 'ic_launcher_foreground.png'));

    console.log(`Generated icons for ${m.dir}`);
  }

  // 3. Splash screens
  for (const s of splashScreens) {
    const targetDir = path.join(RES_DIR, s.dir);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    const logoSize = Math.min(Math.round(Math.min(s.w, s.h) * 0.4), 300);
    const logoBuffer = await sharp(ICON_SVG)
      .resize(logoSize, logoSize)
      .png()
      .toBuffer();

    const top = Math.round((s.h - logoSize) / 2);
    const left = Math.round((s.w - logoSize) / 2);

    await sharp({
      create: {
        width: s.w,
        height: s.h,
        channels: 4,
        background: { r: 15, g: 23, b: 42, alpha: 1 } // #0f172a
      }
    })
      .composite([{ input: logoBuffer, top, left }])
      .png()
      .toFile(path.join(targetDir, 'splash.png'));

    console.log(`Generated splash for ${s.dir}`);
  }

  console.log('All assets generated successfully!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});

import sharp from 'sharp';

const YELLOW = '#FDB515';
const DARK = '#1E1E1E';

const width = 1200;
const height = 630;

// Left text panel as SVG, right side holds the profile photo.
const svgText = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${DARK}"/>
  <circle cx="1150" cy="-40" r="220" fill="${YELLOW}" opacity="0.16"/>
  <circle cx="30" cy="640" r="180" fill="${YELLOW}" opacity="0.12"/>
  <rect x="64" y="72" width="56" height="56" rx="16" fill="${YELLOW}"/>
  <text x="92" y="112" font-family="Arial, sans-serif" font-size="34" font-weight="900" fill="${DARK}" text-anchor="middle">R</text>
  <text x="140" y="108" font-family="Arial, sans-serif" font-size="24" font-weight="800" letter-spacing="6" fill="${YELLOW}">PORTFOLIO</text>
  <text x="64" y="300" font-family="Arial, sans-serif" font-size="88" font-weight="900" fill="#FFFFFF">RAIHAN</text>
  <text x="64" y="390" font-family="Arial, sans-serif" font-size="88" font-weight="900" fill="#FFFFFF">AHMAD</text>
  <text x="64" y="452" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="${YELLOW}">Digital Marketer &amp; Vibe Coder</text>
  <text x="64" y="500" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.75)">Create • Connect • Convert</text>
  <text x="64" y="576" font-family="Arial, sans-serif" font-size="19" fill="rgba(255,255,255,0.45)">raihan-ahmad-portfolio.vercel.app</text>
</svg>
`;

const photoSize = 470;

const photo = await sharp('public/raihan-profile.png')
  .resize(photoSize, photoSize, { fit: 'cover', position: 'top' })
  .composite([
    {
      input: Buffer.from(
        `<svg width="${photoSize}" height="${photoSize}"><rect width="${photoSize}" height="${photoSize}" rx="36" fill="#fff"/></svg>`
      ),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();

const border = Buffer.from(
  `<svg width="${photoSize + 16}" height="${photoSize + 16}"><rect x="2" y="2" width="${photoSize + 12}" height="${photoSize + 12}" rx="42" fill="none" stroke="${YELLOW}" stroke-width="5"/></svg>`
);

await sharp(Buffer.from(svgText))
  .composite([
    { input: border, left: 680, top: 72 },
    { input: photo, left: 688, top: 80 },
  ])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile('public/og-image.jpg');

const meta = await sharp('public/og-image.jpg').metadata();
const { size } = await import('node:fs').then((fs) => fs.promises.stat('public/og-image.jpg'));
console.log(`og-image.jpg: ${meta.width}x${meta.height}, ${(size / 1024).toFixed(1)} KB`);

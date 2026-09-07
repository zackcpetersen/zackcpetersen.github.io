// Generates favicons, the web manifest, and og.png from src/brand/mark.svg.
// Run by hand when the mark or the palette changes: npm run brand
import sharp from 'sharp';
import { readFileSync, writeFileSync, copyFileSync } from 'node:fs';

const light = { bg: '#FAFAFA', text: '#18181B', muted: '#5B5B6B', primary: '#4F46E5' };
const markInner = readFileSync('src/brand/mark.svg', 'utf8')
  .replace(/<style>[\s\S]*?<\/style>/, '')
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/^[\s\S]*?<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')
  .replace(/class="m"/g, `fill="${light.primary}"`);

const icon = (size, pad) => Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
     <rect width="64" height="64" fill="${light.bg}"/>
     <g transform="translate(${pad} ${pad}) scale(${(64 - 2 * pad) / 64})">${markInner}</g>
   </svg>`);

const og = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
     <rect width="1200" height="630" fill="${light.bg}"/>
     <rect x="96" y="0" width="3" height="630" fill="${light.primary}" opacity="0.18"/>
     <g transform="translate(64 232) scale(1.05)">${markInner}</g>
     <text x="160" y="290" font-family="Inter, Helvetica Neue, Helvetica, Arial, sans-serif" font-size="76" font-weight="600" letter-spacing="-2.5" fill="${light.text}">Zack Petersen</text>
     <text x="160" y="352" font-family="JetBrains Mono, Menlo, Consolas, monospace" font-size="30" fill="${light.muted}">Senior backend engineer, Salt Lake City</text>
     <text x="160" y="410" font-family="Inter, Helvetica Neue, Helvetica, Arial, sans-serif" font-size="30" fill="${light.muted}">Python, Go, Postgres, and the pipelines around them.</text>
     <text x="160" y="560" font-family="JetBrains Mono, Menlo, Consolas, monospace" font-size="24" fill="${light.muted}">zackcpetersen.com</text>
   </svg>`);

await sharp(icon(32, 6)).png().toFile('public/favicon-32.png');
await sharp(icon(180, 8)).png().toFile('public/apple-touch-icon.png');
await sharp(icon(192, 10)).png().toFile('public/icon-192.png');
await sharp(icon(512, 10)).png().toFile('public/icon-512.png');
await sharp(og).png().toFile('public/og.png');
copyFileSync('src/brand/mark.svg', 'public/favicon.svg');
writeFileSync('public/site.webmanifest', JSON.stringify({
  name: 'Zack Petersen',
  short_name: 'Zack',
  start_url: '/',
  display: 'browser',
  background_color: light.bg,
  theme_color: light.primary,
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
  ],
}, null, 2) + '\n');
console.log('brand assets written to public/');

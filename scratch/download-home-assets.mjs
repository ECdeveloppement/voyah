import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const siteTsPath = path.join('e:\\voyah-nuxt', 'data', 'site.ts');
const siteTsContent = fs.readFileSync(siteTsPath, 'utf-8');

const outDir = path.join('e:\\voyah-nuxt', 'public', 'assets', 'voyah');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Find all URLs in site.ts that look like /website/... or /static/...
const regex = /'(\/website\/[^']+| \/static\/assets\/[^']+)'/g;
let match;
const urls = new Set();
// A hacky regex to catch both without leading space issues
const regex2 = /'((\/website|\/static\/assets)\/[^']+)'/g;

while ((match = regex2.exec(siteTsContent)) !== null) {
  urls.add(match[1]);
}

const mapping = {};
let imageCounter = 1;
let videoCounter = 1;

for (const rawUrl of urls) {
  const isVideo = rawUrl.endsWith('.mp4');
  const isImage = rawUrl.endsWith('.png') || rawUrl.endsWith('.jpg') || rawUrl.endsWith('.jpeg');
  
  if (!isVideo && !isImage) continue;

  const ext = path.extname(rawUrl);
  let destName = '';
  if (isVideo) {
    destName = `home-video-${videoCounter++}${ext}`;
  } else {
    destName = `home-image-${imageCounter++}${ext}`;
  }

  const destPath = path.join(outDir, destName);
  const fullUrl = `https://www.voyah.com.cn${rawUrl}`;
  
  if (!fs.existsSync(destPath)) {
    console.log(`Downloading ${fullUrl} to ${destName}`);
    try {
      execSync(`curl -sL "${fullUrl}" -o "${destPath}"`);
    } catch (e) {
      console.error(`Failed to download ${fullUrl}`);
    }
  } else {
    console.log(`Exists: ${destName}`);
  }

  mapping[rawUrl] = `/assets/voyah/${destName}`;
}

// Write the mapping
fs.writeFileSync(path.join('e:\\voyah-nuxt\\scratch', 'asset-map.json'), JSON.stringify(mapping, null, 2));

// Since we're here, let's also automatically replace the references in site.ts
let updatedSiteTs = siteTsContent;
for (const [oldUrl, newUrl] of Object.entries(mapping)) {
  updatedSiteTs = updatedSiteTs.replaceAll(`'${oldUrl}'`, `'${newUrl}'`);
}
fs.writeFileSync(siteTsPath, updatedSiteTs);

console.log('Done downloading. site.ts has been updated inline!');

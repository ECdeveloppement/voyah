const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');
const path = require('path');

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error('Failed to download: ' + res.statusCode));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

function ensureDirSync(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

async function scrape() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log('Navigating to Voyah...');
  await page.goto('https://www.voyah.com.cn/', { waitUntil: 'networkidle2' });
  
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      let distance = 500;
      let timer = setInterval(() => {
        let scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 500);
    });
  });
  
  // page.waitForTimeout is deprecated, use setTimeout
  await new Promise(r => setTimeout(r, 2000));
  
  const imageUrls = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs.map(img => img.src)
               .filter(src => src && (src.includes('.jpg') || src.includes('.png')))
               .filter(src => !src.includes('data:image') && !src.includes('logo'))
               .map(src => src.startsWith('//') ? 'https:' + src : src)
               .filter(src => src.startsWith('http'));
  });
  
  const uniqueUrls = [...new Set(imageUrls)];
  console.log('Found ' + uniqueUrls.length + ' image URLs.');
  
  const mappings = [
    { dir: 'tech', file: 'essa_diagram.png' },
    { dir: 'tech', file: 'essa_chassis.png' },
    { dir: 'tech', file: 'architecture_feature_1.jpg' },
    { dir: 'tech', file: 'architecture_feature_2.jpg' },
    { dir: 'tech', file: 'architecture_feature_3.jpg' },
    { dir: 'tech', file: 'safety_body_structure.png' },
    { dir: 'tech', file: 'safety_battery_shield.png' },
    { dir: 'tech', file: 'battery_shield.png' },
    { dir: 'tech', file: 'cockpit_hero.jpg' },
    { dir: 'tech', file: 'battery_hero.jpg' },
    { dir: 'tech', file: 'battery_layer_base.png' },
    { dir: 'tech', file: 'battery_layer_cells.png' },
    { dir: 'tech', file: 'battery_layer_cooling.png' },
    { dir: 'tech', file: 'battery_layer_cover.png' },
    { dir: 'brand', file: 'about_hero.jpg' },
    { dir: 'brand', file: 'news_hero.jpg' },
    { dir: 'brand', file: 'philosophy_hero.jpg' },
    { dir: 'brand', file: 'kunpeng_hero.jpg' },
    { dir: 'service', file: 'warranty_hero.jpg' },
    { dir: 'service', file: 'app_hero.jpg' },
    { dir: 'service', file: 'faq_hero.jpg' },
    { dir: 'lifestyle', file: 'community_hero.jpg' },
    { dir: 'lifestyle', file: 'store_hero.jpg' },
    { dir: 'models', file: 'titan_ultra_hero.jpg' },
    { dir: 'models', file: 'everest_hero.jpg' }
  ];
  
  for (let i = 0; i < mappings.length; i++) {
    const srcUrl = uniqueUrls[i % uniqueUrls.length];
    if (!srcUrl) continue;
    
    const mapping = mappings[i];
    const targetDir = path.join('e:/voyah-nuxt/public/voyah-resources', mapping.dir);
    ensureDirSync(targetDir);
    
    const dest = path.join(targetDir, mapping.file);
    try {
        console.log('Downloading ' + srcUrl + ' to ' + dest);
        await downloadImage(srcUrl, dest);
    } catch (e) {
        console.error('Failed on ' + srcUrl + ' : ' + e.message);
    }
  }

  await browser.close();
  console.log('Complete!');
}

scrape().catch(e => {
    console.error(e);
    process.exit(1);
});

const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log('Navigating to Voyah Homepage...');
    await page.goto('https://www.voyah.com.cn/', { waitUntil: 'networkidle2' });

    console.log('Saving HTML dump...');
    const html = await page.content();
    fs.writeFileSync('official-home-debug.html', html);
    
    console.log('Extracting basic info...');
    const info = await page.evaluate(() => {
        return {
            title: document.title,
            bodyClasses: document.body.className,
            images: Array.from(document.querySelectorAll('img')).slice(0, 10).map(img => img.src),
            videos: Array.from(document.querySelectorAll('video')).slice(0, 5).map(v => v.src || v.querySelector('source')?.src)
        };
    });
    console.log('Basic info:', info);

    await browser.close();
})();

const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log('Navigating to Voyah Homepage...');
    await page.goto('https://www.voyah.com.cn/', { waitUntil: 'networkidle2' });

    console.log('Extracting content...');
    const data = await page.evaluate(() => {
        const slides = Array.from(document.querySelectorAll('.banner-slider .swiper-slide')).map(slide => {
            const logo = slide.querySelector('.slider-logo img')?.src;
            const tips = slide.querySelector('.slider-tips')?.innerText.trim();
            const buttons = Array.from(slide.querySelectorAll('.slider-btn-group .btn')).map(btn => btn.innerText.trim());
            const image = slide.querySelector('.slider-img img')?.src;
            const video = slide.querySelector('video source')?.src || slide.querySelector('video')?.src;
            return { logo, tips, buttons, image, video };
        });

        const sections = Array.from(document.querySelectorAll('section, .section')).map(section => {
            return {
                className: section.className,
                title: section.querySelector('h1, h2, .title')?.innerText.trim() || '',
                desc: section.querySelector('p, .desc')?.innerText.trim() || '',
                buttons: Array.from(section.querySelectorAll('.btn, button')).map(btn => btn.innerText.trim()),
                texts: Array.from(section.querySelectorAll('.text, span, div')).filter(el => {
                    const text = el.innerText.trim();
                    return text.length > 2 && text.length < 100 && !text.includes('\n');
                }).map(el => el.innerText.trim())
            };
        });

        return { slides, sections };
    });

    fs.writeFileSync('official-home-fresh-data.json', JSON.stringify(data, null, 2));
    console.log('Data saved to official-home-fresh-data.json');

    await browser.close();
})();

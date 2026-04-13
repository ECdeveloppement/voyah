const fs = require('fs');
const path = require('path');
const https = require('https');
// const { JSDOM } = require('jsdom'); // jsdom is not available, regex will be used instead

async function download(url, dest) {
    if (!url || !url.startsWith('http')) return;
    const directory = path.dirname(dest);
    if (!fs.existsSync(directory)) fs.mkdirSync(directory, { recursive: true });
    
    if (fs.existsSync(dest)) {
        console.log(`Skipping ${url} (exists)`);
        return;
    }

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${url}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

(async () => {
    const html = fs.readFileSync('official-home-debug.html', 'utf-8');
    
    // Use regex to find all images and videos to be safe and fast if jsdom is not there
    const imgUrls = [];
    const videoUrls = [];
    
    const imgRegex = /src="(https:\/\/www\.voyah\.com\.cn\/[^"]+\.(?:png|jpg|jpeg|webp|gif|svg|ico)(?:\?[^"]*)?)"/gi;
    const videoRegex = /src="(https:\/\/www\.voyah\.com\.cn\/[^"]+\.(?:mp4|webm|mov)(?:\?[^"]*)?)"/gi;
    
    let match;
    while ((match = imgRegex.exec(html)) !== null) imgUrls.push(match[1]);
    while ((match = videoRegex.exec(html)) !== null) videoUrls.push(match[1]);

    console.log(`Found ${imgUrls.length} images and ${videoUrls.length} videos.`);

    const baseDir = path.join(process.cwd(), 'public', 'voyah-resources');

    for (const url of [...new Set(imgUrls)]) {
        const urlPath = new URL(url).pathname;
        const dest = path.join(baseDir, urlPath);
        try {
            await download(url, dest);
        } catch (e) {
            console.error(`Error downloading ${url}: ${e.message}`);
        }
    }

    for (const url of [...new Set(videoUrls)]) {
        const urlPath = new URL(url).pathname;
        const dest = path.join(baseDir, urlPath);
        try {
            await download(url, dest);
        } catch (e) {
            console.error(`Error downloading ${url}: ${e.message}`);
        }
    }

    console.log('Harvest complete!');
})();

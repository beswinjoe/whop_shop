const puppeteer = require('puppeteer-core');
(async () => {
    const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: "new" });
    const page = await browser.newPage();
    page.on('console', msg => console.log('LOG:', msg.text()));
    page.on('pageerror', err => console.log('ERROR:', err.message));
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    await page.screenshot({path: 'screenshot.png', fullPage: true});
    console.log('Saved screenshot.png');
    await browser.close();
})();

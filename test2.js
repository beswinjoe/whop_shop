const puppeteer = require('puppeteer-core');
(async () => {
    const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: "new" });
    const page = await browser.newPage();
    page.on('console', msg => console.log('LOG:', msg.text()));
    page.on('pageerror', err => console.log('ERROR:', err.message));
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    const productGridHTML = await page.evaluate(() => document.getElementById('productGrid') ? document.getElementById('productGrid').innerHTML.substring(0, 200) : 'NO PRODUCT GRID');
    console.log('Product Grid:', productGridHTML);
    await browser.close();
})();

const { Before, After } = require('@cucumber/cucumber');
const { chromium, firefox } = require('playwright');

let browser;
let context;
let page;

Before(async function () {
    const browserName = process.env.BROWSER || 'chrome';

    const launchOptions = {
        headless: false,
        slowMo: 30
    };

    if (browserName === 'firefox') {
        browser = await firefox.launch(launchOptions);
    } else if (browserName === 'edge') {
        browser = await chromium.launch({
            ...launchOptions,
            channel: 'msedge'
        });
    } else {
        browser = await chromium.launch({
            ...launchOptions,
            channel: 'chrome'
        });
    }

    context = await browser.newContext({
        viewport: null
    });

    page = await context.newPage();
    this.page = page;
});

After(async function () {
    if (page) {
        await page.close();
    }

    if (context) {
        await context.close();
    }

    if (browser) {
        await browser.close();
    }
});
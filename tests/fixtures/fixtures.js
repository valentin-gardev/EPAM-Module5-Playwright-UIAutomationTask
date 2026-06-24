const { test: base} = require('@playwright/test')

const test = base.extend({

    loginPage: async ({ page }, use) => {

        await page.goto();
        await use(page);
    },

    homePage: async ({ page }, use) => {
        await page.goto('https://practicesoftwaretesting.com')
        await use(page);
    }
});
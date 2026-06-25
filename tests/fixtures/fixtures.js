import { test as base} from '@playwright/test'
import LoginPage from '../pageObjects/pages/login.page';


export const test = base.extend({

    loginPage: async ({ page }, use) => {
        const login = new LoginPage(page)
        await login.open()
        await use(login);
    },

    homePage: async ({ page }, use) => {
        await page.goto('https://practicesoftwaretesting.com')
        await use(page);
    }
});

export { expect } from '@playwright/test'
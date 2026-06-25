import { test as base} from '@playwright/test'
import LoginPage from '../pageObjects/pages/login.page';
import HomePage from '../pageObjects/pages/home.page';

export const test = base.extend({

    loginPage: async ({ page }, use) => {
        const login = new LoginPage(page)
        await login.open()
        await use(login);
    },

    homePage: async ({ page }, use) => {
        const home = new HomePage(page)
        await home.open()
        await use(home);
    }
});

export { expect } from '@playwright/test'
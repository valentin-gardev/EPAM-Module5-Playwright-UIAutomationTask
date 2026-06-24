const loginPageComponents = require('../components/loginPage.components')

class LoginPage {
    constructor(page) {
        this.page = page;
        this.components = new loginPageComponents(page);
    }

    async open() {
        await this.page.goto('https://practicesoftwaretesting.com/auth/login')
    }

    async confirmLogin() {
        await this.components.loginButton.click()
    }
}
const loginPageComponents = require('../components/loginPage.components')

class LoginPage {
    constructor(page) {
        this.page = page;
        this.components = new loginPageComponents(page);
    }
}

class loginPageComponents {
    
    constructor(page) {
        this.page = page
        this.emailContainer = page.locator('.mb-3 [data-test="email"]')
        this.passwordContainer = page.locator('.mb-3 [data-test="password"]')
        this.loginButton = page.locator('.mb-3 [data-test="login-submit"]')
        this.allertWindow = page.locator('.alert alert-danger')
    }
}

module.exports = loginPageComponents
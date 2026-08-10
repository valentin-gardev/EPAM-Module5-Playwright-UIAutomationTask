import LoginPageComponents from '../components/loginPage.components';

export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.components = new LoginPageComponents(page);
  }

  async open() {
    await this.page.goto('https://practicesoftwaretesting.com/auth/login');
  }

  async confirmLogin() {
    await this.components.loginButton.click();
  }

  async login(email, password) {
    // Login into an account automatically
    await this.components.emailContainer.fill(email);
    await this.components.passwordContainer.fill(password);
    await this.confirmLogin();
  }
}

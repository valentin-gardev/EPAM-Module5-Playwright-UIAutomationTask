import HomePageComponents from '../components/homePage.components';

export default class HomePage {
  constructor(page) {
    this.page = page;
    this.components = new HomePageComponents(page);
  }

  async open() {
    await this.page.goto('https://practicesoftwaretesting.com');
  }

  async sortButtonClick(selected) {
    // should be a locator element, not a method, sort is a method
    const optionValue = this.components.sort(selected);

    await this.components.sortMenuButton.selectOption(optionValue);
  }
}

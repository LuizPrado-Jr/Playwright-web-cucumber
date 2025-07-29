export class HomePage {
  constructor(page) {
    this.page = page;
    this.firstAddButton = page.locator('text=Add to cart').first();
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async login() {
    await this.page.goto('https://www.saucedemo.com');
    await this.page.fill('[data-test="username"]', 'standard_user');
    await this.page.fill('[data-test="password"]', 'secret_sauce');
    await this.page.click('[data-test="login-button"]');
  }

  async addFirstProductToCart() {
    await this.firstAddButton.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
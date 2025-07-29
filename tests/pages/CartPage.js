export class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async validateCart() {
    await this.page.locator('.cart_item').waitFor({ state: 'visible' });
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
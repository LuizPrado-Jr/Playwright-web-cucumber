import { cartElements } from '../support/elements.js';
export class CartPage {
  constructor(page) {
    this.page = page;
    this.selectors = cartElements;
  }

  async validateCart() {
    await this.page.locator(this.selectors.cartItem).waitFor({ state: 'visible' });
  }

  async proceedToCheckout() {
    await this.page.locator(this.selectors.checkoutButton).click();
  }
}
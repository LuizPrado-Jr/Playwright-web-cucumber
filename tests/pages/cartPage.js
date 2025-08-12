import { cartElements } from '../support/elements.js';
export class CartPage {
  constructor(page) {
    this.page = page;
    this.selectors = cartElements;
  }

  async validateProductInCart(expectedName) {
    const productName = await this.page.locator('.inventory_item_name').first().textContent();
    if (productName.trim() !== expectedName) {
      throw new Error(`Produto esperado: ${expectedName}, encontrado: ${productName}`);
    }
  }
  
  async validateCart() {
    await this.page.locator(this.selectors.cartItem).waitFor({ state: 'visible' });
  }

  async proceedToCheckout() {
    await this.page.locator(this.selectors.checkoutButton).click();
  }

  
}

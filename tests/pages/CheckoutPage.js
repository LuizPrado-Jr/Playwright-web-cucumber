import { checkoutElements } from '../support/elements.js';
import dotenv from 'dotenv';
dotenv.config();

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.selectors = checkoutElements;
  }

  async fillForm({ name, expectedProduct, expectedQty, expectedValue }) {
  const firstName = process.env.FIRST_NAME || name.split(' ')[0];
  const lastName = process.env.LAST_NAME || name.split(' ')[1] || 'QA';
  const postalCode = process.env.POSTAL_CODE || '12345';

  await this.page.fill(this.selectors.firstName, firstName);
  await this.page.fill(this.selectors.lastName, lastName);
  await this.page.fill(this.selectors.postalCode, postalCode);
  await this.page.click(this.selectors.continueButton);

  // Validação do produto
  if (expectedProduct) {
    const productName = await this.page.locator(this.selectors.productName).first().textContent();
    if (productName.trim() !== expectedProduct) {
      throw new Error(`Produto esperado: ${expectedProduct}, encontrado: ${productName}`);
    }
  }

  // Validação da quantidade
  if (expectedQty !== undefined) {
    const qty = await this.page.locator(this.selectors.cartQuantity).first().textContent();
    if (parseInt(qty) !== expectedQty) {
      throw new Error(`Quantidade esperada: ${expectedQty}, encontrada: ${qty}`);
    }
  }

  // Validação do valor total
  if (expectedValue) {
    await this.page.waitForSelector(this.selectors.totalValue, { timeout: 10000 });
    const total = await this.page.locator(this.selectors.totalValue).textContent();
    if (!total.includes(expectedValue)) {
      throw new Error(`Valor esperado: ${expectedValue}, encontrado: ${total}`);
    }
  }

  await this.page.click(this.selectors.finishButton);
}

  async verifySuccess() {
    await this.page.locator(this.selectors.successMessage).waitFor({ state: 'visible' });
  }
}
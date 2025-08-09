import { checkoutElements } from '../support/elements.js';
import dotenv from 'dotenv';
dotenv.config();

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.selectors = checkoutElements;
  }

  async fillForm({ name }) {
    const firstName = process.env.FIRST_NAME || name.split(' ')[0];
    const lastName = process.env.LAST_NAME || name.split(' ')[1] || 'QA';
    const postalCode = process.env.POSTAL_CODE || '12345';

    await this.page.fill(this.selectors.firstName, firstName);
    await this.page.fill(this.selectors.lastName, lastName);
    await this.page.fill(this.selectors.postalCode, postalCode);
    await this.page.click(this.selectors.continueButton);
    await this.page.click(this.selectors.finishButton);
  }

  async verifySuccess() {
    await this.page.locator(this.selectors.successMessage).waitFor({ state: 'visible' });
  }
}
export class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async fillForm({ name }) {
    await this.page.fill('[data-test="firstName"]', name.split(' ')[0]);
    await this.page.fill('[data-test="lastName"]', name.split(' ')[1] || 'QA');
    await this.page.fill('[data-test="postalCode"]', '12345');
    await this.page.click('[data-test="continue"]');
    await this.page.click('[data-test="finish"]');
  }

  async verifySuccess() {
    await this.page.locator('.complete-header').waitFor({ state: 'visible' });
  }
}
import { homeElements } from '../support/elements.js';
import { linkElements } from '../support/elements.js';

import dotenv from 'dotenv';
dotenv.config();

export class HomePage {
  constructor(page) {
    this.page = page;
    this.selectors = homeElements;
    this.selectors.saucedemo = linkElements.saucedemo;
   
  }

  async login() {
    await this.page.goto(this.selectors.saucedemo);
    await this.page.fill(this.selectors.username, process.env.SAUCE_USERNAME);
    await this.page.fill(this.selectors.password, process.env.SAUCE_PASSWORD);
    await this.page.click(this.selectors.loginButton);
  }

  async addFirstProductToCart() {
  await this.page.waitForSelector(this.selectors.firstAddButton, { timeout: 10000 });
  await this.page.locator(this.selectors.firstAddButton).first().click();
}

  async goToCart() {
  await this.page.waitForSelector(this.selectors.cartLink);
  await this.page.locator(this.selectors.cartLink).click();
}
}
const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage } = require('../pages/homePage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');

Given('que estou logado na loja', async function () {
  this.home = new HomePage(this.page);
  await this.home.login();
});

When('adiciono um produto ao carrinho', async function () {
  await this.home.addFirstProductToCart();
  await this.home.goToCart();
});

When('avanço para o checkout', async function () {
  this.cart = new CartPage(this.page);
  await this.cart.validateCart();
  await this.cart.proceedToCheckout();
});

When('preencho o formulário de compra', async function () {
  this.checkout = new CheckoutPage(this.page);
  await this.checkout.fillForm({ name: 'Luiz Teste' });
});

Then('vejo a confirmação de pedido com sucesso', async function () {
  await this.checkout.verifySuccess();
});
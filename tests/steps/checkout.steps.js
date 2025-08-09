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
  this.cart = new CartPage(this.page);
});

When('avanço para o checkout', async function () {
  await this.cart.validateCart();
  await this.cart.proceedToCheckout();
});

When('valido o produto {string} no carrinho', async function (produto) {
  await this.cart.validateProductInCart(produto);
});

When(
  'preencho o formulário de compra validando produto {string}, quantidade {int} e valor total {string}',
  async function (produto, quantidade, valor) {
    this.checkout = new CheckoutPage(this.page);
    await this.checkout.fillForm({
      name: 'Luiz Teste',
      expectedProduct: produto,
      expectedQty: quantidade,
      expectedValue: valor,
    });
  }
);

Then('vejo a confirmação de pedido com sucesso', async function () {
  await this.checkout.verifySuccess();
});
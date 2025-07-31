const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/LoginPage');

Given('Eu estou na pagina de login', async function () {
  this.login = new LoginPage(this.page);
  await this.login.LoginScreen();
});

When('Eu digito meu {string} e {string}', async function (email, senha) {
  await this.login.typeUserPass(email, senha);
});

Then('eu faco o login com sucesso', async function () {
  await this.login.validateSuccessLogin();
});

Then('eu recebo uma mensagem de erro', async function () {
  await this.login.validateMessageErrorLogin();
});



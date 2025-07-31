import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    
  }

  async LoginScreen() {
    await this.page.goto('https://front.serverest.dev/login');
    }

  async typeUserPass(email, senha) {
    await this.page.locator("[data-testid='email']").fill(email);
    await this.page.locator("[data-testid='senha']").fill(senha);
    await this.page.locator("[data-testid='entrar']").click();
    
  } 

  async validateSuccessLogin () {
    const tituloPagina = await this.page.locator('h1');
    await expect(tituloPagina).toContainText('Serverest Store');

    
  }

  async validateMessageErrorLogin () {
    const mensagemErro = await this.page.locator(".alert-dismissible");
    await expect(mensagemErro).toContainText('Email e/ou senha inválidos');

  }
}
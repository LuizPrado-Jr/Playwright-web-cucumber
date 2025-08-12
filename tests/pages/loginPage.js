import { expect } from '@playwright/test';
import { loginElements } from '../support/elements.js';
import { linkElements } from '../support/elements.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.selectors = loginElements;
    this.selectors.linkLogin = linkElements.linkLogin;
    this.selectors.linkCadastro = linkElements.linkCadastro;
   
  }
  
  async LoginScreen() {
    await this.page.goto(this.selectors.linkLogin);
    }

  async typeUserPass(email, senha) {
    await this.page.locator(this.selectors.email).fill(email);
    await this.page.locator(this.selectors.senha).fill(senha);
    await this.page.locator(this.selectors.entrar).click();
    
  } 

  async validateSuccessLogin () {
    const tituloPagina = await this.page.locator(this.selectors.titulo);
    await expect(tituloPagina).toContainText('Serverest Store');

    
  }

  async validateMessageErrorLogin () {
    const mensagemErro = await this.page.locator(this.selectors.erro);
    await expect(mensagemErro).toContainText('Email e/ou senha inválidos');

  }
}

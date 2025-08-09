# playwright-web-cucumber

Automação de testes end-to-end para um fluxo de checkout simples em um e-commerce de exemplo, utilizando Playwright e Cucumber.

## Estrutura do Projeto

```
├── tests
│   ├── features         # Arquivos .feature com cenários BDD
│   ├── pages            # Page Objects (LoginPage, HomePage, etc)
│   ├── steps            # Definição dos passos dos cenários
│   └── support          # Hooks, configuração do World, etc
├── cucumber.js          # Configuração do Cucumber
├── package.json         # Dependências e scripts
├── README.md            # Documentação do projeto
├── reports              # Relatórios de execução dos testes
```

## Versões Utilizadas

- Node.js: 22.x
- @cucumber/cucumber: 9.x ou superior
- @playwright/test: 1.x ou superior

## Dependências

- @cucumber/cucumber
- @playwright/test

### Como instalar

```bash
npm install
```

## Como Executar os Testes e Gerar o Relatório

1. **Executar os testes:**
   ```bash
   npx cucumber-js
   ```

2. **Gerar e visualizar o relatório HTML:**
   - Após a execução, o relatório estará disponível em:
     ```
     reports/cucumber-report.html
     ```
   - Abra esse arquivo em seu navegador para visualizar os resultados dos testes.

---

##Observações##

   - Os cenários de teste estão em tests/features.
   ```
   - Os passos dos testes estão em tests/steps.
   ```
   - O relatório HTML é gerado automaticamente e pode ser acessado em reports/cucumber-report.html.

---

**Ajustes solicitados**

- Inclusão de validações de valores, quantidade e produto no checkout
- Ajuste de page object ajustando os elementos mapeados em apenas um lugar
- Ajuste do login.feature para reaproveitar passos repetidos com o uso do scenario outline para simplificar.
- ajustado os steps criados 

Com relação ao teste que está falhando, está ocorrendo, pois o site utilizado não sei por qual motivo "limpa" os cadastros. Sendo assim, peço por gentileza antes de utilizar realizar um cadastro manual no link:
https://front.serverest.dev/cadastrarusuarios
com os seguintes dados:
usuraio = TesteLuiz
email: luiz@teste.com
senha: teste

Dessa forma executa com sucesso. Realizei a automação para realizar sempre o cadastro antes, porém falhava os demais depois, pois já tinha usuário cadastrado.
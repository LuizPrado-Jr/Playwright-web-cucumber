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

## Tecnologias Utilizadas

- **Node.js**
- **Playwright** (`@playwright/test`)
- **Cucumber** (`@cucumber/cucumber`)

## Como Executar

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Execute os testes:**
   ```bash
   npx cucumber-js
   ```

## Relatórios de Execução

Após rodar os testes, será gerado automaticamente um relatório HTML em:

```
reports/cucumber-report.html
```

Para visualizar o relatório, basta abrir esse arquivo em seu navegador.

## Onde Rodar

- O projeto pode ser executado em qualquer ambiente com Node.js instalado (Windows, Linux, Mac).
- Recomenda-se rodar via terminal na raiz do projeto.

## Observações

- Os cenários de teste estão em `tests/features`.
- Os passos dos testes estão em `tests/steps`.
- O relatório HTML é gerado automaticamente e pode ser acessado em `reports/cucumber-report.html`.


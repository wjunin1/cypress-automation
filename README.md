# Cypress

Estrutura de pastas
----------------- 
```dir
cypress-automation
 ├── Cypress
        ├── environments: configurações por ambiente
        ├── e2e: Execução dos testes
        ├── Fixtures: dados para mocks
        ├── pages: classes para interação com os elementos
        ├── plugins: extensões e pré-processadores
        ├── allure-results: diretório dos relatórios de execução
        ├── package.json: targets de execução e dependências
        ├── cypress.json: configurações do Cypress
        ├── screenshots: prints das execuções com erro no allure

```

## Ajuda + Testes

Portais de auxilio do Cypress.

* [Cypress Support](https://on.cypress.io/support)
* [Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)

### 1. Instalar o Cypress

[Passo a passo](https://on.cypress.io/installing-cypress)

### 2. Baixar o repositório

```bash
## clone no repositório
git clone https://github.com/<your-username>/cypress-automation.git

## Instalar as Dependências
npm install
```

### 3. Iniciar os testes

```bash
npx cypress run
```

### 4. Executar o Allure report

```bash
npm run test:allure
```


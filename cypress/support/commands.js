Cypress.Commands.add('ccContainsVisible', (valor) => cy.contains(valor).should('be.visible'));
Cypress.Commands.add('ccGetVisible', (valor) => cy.get(valor).should('be.visible'));
Cypress.Commands.add('ccContainsClick', (valor) => cy.contains(valor).click());
Cypress.Commands.add('ccGetClick', (valor) => cy.get(valor).click());
Cypress.Commands.add('ccValidateUrl', (url) => cy.url().should("include", url));
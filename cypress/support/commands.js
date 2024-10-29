// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// fillMandatoryFieldsAndSubmit
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Natalia');
    cy.get('#lastName').type('Matos');
    cy.get('#email').type('natalia@example.com');
    cy.get('#phone').type('11 966584555', { delay: 10 });
    cy.get('#open-text-area').type('preciso de ajuda xxx', { delay: 10 });
    cy.contains('button', 'Enviar').click();  // Supondo que o texto do botão seja 'Enviar'
  });

 
  
  
  
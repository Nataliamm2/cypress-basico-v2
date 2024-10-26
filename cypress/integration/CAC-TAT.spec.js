/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    // Move a visita à página para beforeEach
    beforeEach(() => {
        cy.visit('./src/index.html');
    });

    it('verifica o título da aplicação', function() {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
    });
    // Novo teste para preencher e enviar formulario
    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Natalia');
        cy.get('#lastName').type('Matos');
        cy.get('#email').type('natalia@hotmail.com');
        cy.get('#phone').type('11 966584555');
        cy.get('#open-text-area').type('preciso de ajuda xxx');
        cy.get('button[type="submit"]').type('button')


    });
});

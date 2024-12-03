it.only('Consultando texto de titulo no politica de privacidade', function() {

    cy.visit('./src/privacy.html');
    // Verifica se o título da página de privacidade contém 'Política de Privacidade'
    cy.get('#title').should('contain.text', 'CAC TAT - Política de privacidade');
});
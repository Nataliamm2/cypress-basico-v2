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
        cy.get('#firstName').type('Natalia' , { delay: 10 });
        cy.get('#lastName').type('Matos' , { delay: 10 });
        cy.get('#email').type('natalia@hotmail.com', { delay: 10 });
        cy.get('#phone').type('11 966584555', { delay: 10 });
        cy.get('#open-text-area').type('preciso de ajuda xxx', { delay: 10 });
        cy.get('button[type="submit"]').type('button')


    });
    // Novo teste exibe mensagem de erro ao submeter o formulário com um email com formatação inválida
    it('exibe mensagem de erro ao submeter o formulário com um email inválido', function() {
        cy.get('#firstName').type('Natalia' , );
        cy.get('#lastName').type('Matos' , );
        cy.get('#email').type('natalia-invalido'); // Email inválido
        cy.get('#open-text-area').type('preciso de ajuda xxx', );
        cy.get('button[type="submit"]').type('button')
        cy.get('.error').should('be.visible');
        
    });
    
    // No teste valor input telefone
   it('Valida input de valor de phone', function() {
        cy.get('#firstName').type('Natalia' , );
        cy.get('#lastName').type('Matos' , );
        cy.get('#email').type('natalia@hotmail.com', );
        cy.get('#phone').type('AAAA BBB', );
        cy.get('#phone').should('have.value', '');
        cy.get('#open-text-area').type('preciso de ajuda xxx', );
        cy.get('button[type="submit"]').type('button')

    
});
  // exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido', function() {
    cy.get('#firstName').type('Natalia', );
    cy.get('#lastName').type('Matos', );
    cy.get('#email').type('natalia@hotmail.com', );
    cy.get('input[type="checkbox"]').check({ force: true }); // Força o checkbox a ser marcado
    cy.get('#open-text-area').type('preciso de ajuda xxx', );
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('be.visible');
    
});
it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
    cy.get('#firstName').type('Natalia').should('have.value', 'Natalia').clear().should('have.value', '');
    cy.get('#lastName').type('Matos' ).should('have.value', 'Matos').clear().should('have.value', '');
    cy.get('#email').type('natalia@hotmail.com').should('have.value', 'natalia@hotmail.com').clear().should('have.value', '');
    cy.get('#phone').type('11966584555').should('have.value', '11966584555').clear().should('have.value', '');
    

});
it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
    cy.get('#firstName').type(' ' , );
    cy.get('#lastName').type(' ' , );
    cy.get('#email').type(' ', );
    cy.get('#phone').type('11 966584555', );
    cy.get('#open-text-area').type('preciso de ajuda xxx', );
    cy.get('button[type="submit"]').type('button')
    cy.get('.error').should('be.visible');

}); 

  it('Seleciona o campo youtube', function() {
    cy.get('#firstName').type('Natalia' , );
    cy.get('#lastName').type('Matos' , );
    cy.get('#email').type('natalia@hotmail.com',);
    cy.get('#phone').type('11 966584555', );
    cy.get('#product').select('youtube').should('have.value', 'youtube');
    cy.get('#open-text-area').type('preciso de ajuda xxx',);
    cy.get('button[type="submit"]').type('button')


 
});
it('Seleciona o campo blog', function() {
    cy.get('#firstName').type('Natalia' , );
    cy.get('#lastName').type('Matos' , );
    cy.get('#email').type('natalia@hotmail.com', );
    cy.get('#phone').type('11 966584555', );
    cy.get('#product').select('blog').should('have.value', 'blog');
    cy.get('#open-text-area').type('preciso de ajuda xxx', );
    cy.get('button[type="submit"]').type('button')

});
it('Seleciona o campo mentoria', function() {
    cy.get('#firstName').type('Natalia' , );
    cy.get('#lastName').type('Matos' , );
    cy.get('#email').type('natalia@hotmail.com', );
    cy.get('#phone').type('11 966584555', );
    cy.get('#product').select('mentoria').should('have.value', 'mentoria');
    cy.get('#open-text-area').type('preciso de ajuda xxx', );
    cy.get('button[type="submit"]').type('button')
});

it('Seleciona o check tipo radio em opcap Elogio', function() {

    cy.get('#firstName').type('Natalia' , );
    cy.get('#lastName').type('Matos' , );
    cy.get('#email').type('natalia@hotmail.com', );
    cy.get('#phone').type('11 966584555', );
    cy.get('#product').select('mentoria').should('have.value', 'mentoria');
    cy.get('input[type="radio"][value="feedback"]').check().should('be.checked');
    cy.get('#open-text-area').type('preciso de ajuda xxx', );
    cy.get('button[type="submit"]').type('button')

})

it ('Seleciona e marca cada tipo de atendimento', function() {
    // Itera sobre todos os radio buttons e verifica cada um 
    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function($radio)  {
        cy.wrap($radio).check().should('be.checked');
    })

    
})
it ('marca ambos checkboxes, depois desmarca o último feito por mim', function() {
        // Itera sobre todos os radio buttons e verifica cada um 
            cy.get('#email-checkbox').check()
            cy.get('#phone-checkbox').check()
            cy.get('#phone-checkbox').uncheck()
             
    


})

it ('marca ambos checkboxes, depois desmarca o último feito pelo professor', function() {
    cy.get('input[type="checkbox"]').check().should('be.checked')
    .last().uncheck().should('not.be.checked')

})

it ('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
    cy.get('#firstName').type('Natalia' ,);
    cy.get('#lastName').type('Matos' , );
    cy.get('#email').type('natalia@hotmail.com', );
    cy.get('#product').select('mentoria').should('have.value', 'mentoria');
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('preciso de ajuda xxx', );
    cy.get('button[type="submit"]').type('button')

})
it ('seleciona um arquivo da pasta fixtures', function() {
    cy.get('#firstName').type('Natalia' , );
    cy.get('#lastName').type('Matos' , );
    cy.get('#email').type('natalia@hotmail.com',);
    cy.get('#phone').type('11 966584555', );
    cy.get('#product').select('mentoria').should('have.value', 'mentoria');
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('preciso de ajuda xxx', );
    cy.get('input[type=file]')
    .selectFile('cypress/fixtures/example.json')
    .then(input => {
        expect('example.json')
    })
    cy.get('button[type="submit"]').type('button')

})
it ('seleciona um arquivo simulando um drag-and-drop', function() {
    cy.get('#firstName').type('Natalia' , );
    cy.get('#lastName').type('Matos' , );
    cy.get('#email').type('natalia@hotmail.com', );
    cy.get('#phone').type('11 966584555', );
    cy.get('#product').select('mentoria').should('have.value', 'mentoria');
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('preciso de ajuda xxx', );
    cy.get('input[type=file]')
    .selectFile('cypress/fixtures/example.json', { action: 'drag-drop'})
    .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
    })
    cy.get('button[type="submit"]').type('button')


})
it('verifica potilica de privacidade', function() {
    cy.get('#privacy a').should('have.attr', 'target', '_blank')
    
});

it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
    cy.get('#privacy a').invoke('removeAttr', 'target').click();
    
    
});
  it('Consultando texto de titulo no politica de privacidade', function() {
    cy.get('#privacy a').invoke('removeAttr', 'target').click
    ();
    
    // Verifica se o título da página de privacidade contém 'Política de Privacidade'
    cy.get('#title').should('contain.text', 'CAC TAT - Política de privacidade');
});

it('Consultando texto Talking About Testing', function() {
    cy.get('#privacy a').invoke('removeAttr', 'target').click
    ();
    
    // Verifica se o textoda página de privacidade contém 'Talking About Testing'
    cy.contains('Talking About Testing').should('be.visible')
})
});
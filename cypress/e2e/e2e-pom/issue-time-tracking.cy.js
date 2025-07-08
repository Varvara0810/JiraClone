describe('Issue Time Tracking', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
            cy.visit(url + '/board');
            cy.contains('This is an issue of type: Task.').click();
        });
    });

    context('Estimation Functionality', () => {
    it('should add, edit, and remove estimation', () => {
      
      cy.get('[placeholder="Number"]').type('4');
      cy.contains('Original Estimate (hours)').click();
      cy.get('body').click(); 
      cy.contains('4h estimated').should('exist');

      cy.get('[placeholder="Number"]').clear().type('6');
      cy.contains('Original Estimate (hours)').click();
      cy.get('body').click();
      cy.contains('6h estimated').should('exist');

      cy.get('[placeholder="Number"]').clear();
      cy.contains('Original Estimate (hours)').click();
      cy.get('body').click();
      cy.contains('h estimated').should('not.exist');
    });
  });

  context('Time Logging Functionality', () => {
    it('should add, edit, and remove time log', () => {

    cy.contains('Time Tracking').click();

    cy.get('input[placeholder="Number"]').clear().type('8'); 
    cy.contains('Time Tracking').should('be.visible');
    cy.contains('Done').should('be.visible');
    cy.get ('[data-testid="icon:stopwatch"]').click();
    cy.get('input[placeholder="Number"]').eq(1).clear().type('8');
    cy.get('input[placeholder="Number"]').eq(2).clear().type('4'); 
    cy.contains('button', 'Done').click();
    cy.contains('8h logged').should('exist');


    cy.get('input[placeholder="Number"]').clear().type('6'); 
    cy.contains('Time Tracking').should('be.visible');
    cy.contains('Done').should('be.visible');
    cy.get ('[data-testid="icon:stopwatch"]').click();
    cy.get('input[placeholder="Number"]').eq(1).clear().type('6');
    cy.get('input[placeholder="Number"]').eq(2).clear().type('2'); 
    cy.contains('button', 'Done').click();
    cy.contains('6h logged').should('exist');

    cy.get('input[placeholder="Number"]').clear(); 
    cy.contains('Time Tracking').should('be.visible');
    cy.contains('Done').should('be.visible');
    cy.get ('[data-testid="icon:stopwatch"]').click();
    cy.get('input[placeholder="Number"]').eq(1).clear();
    cy.get('input[placeholder="Number"]').eq(2).clear(); 
    cy.contains('button', 'Done').click();
    cy.contains('6h logged').should('not.exist');
    
    });
  });
});
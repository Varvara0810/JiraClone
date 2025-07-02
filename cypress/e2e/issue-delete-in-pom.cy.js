/**
 * This is an example file and approach for POM in Cypress
 */
import IssueModal from "../../pages/IssueModal";

/**
 * This is an example file and approach for POM in Cypress
 */
import IssueModal from "../../pages/IssueModal";

describe('Issue delete', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
    //open issue detail modal with title from line 16  
    cy.contains(issueTitle).click();
    });
  });
   //cy.get('[data-testid="modal:issue-details"]').should('be.visible');
  
  //issue title, that we are testing with, saved into variable
  const issueTitle = 'This is an issue of type: Task.';

  it.only('Should delete issue successfully', () => {
    //add steps to delete issue
     cy.get('[data-testid="icon:trash"]').click();
     cy.get('[data-testid="modal:confirm"]').should('be.visible');
     cy.get('[data-testid="modal:confirm"]').contains('Delete issue').click();
     cy.get('[data-testid="modal:confirm"]').should('not.exist');
     cy.get('[data-testid="modal:issue-details"]').should('not.exist');
     cy.get('[data-testid="board-list:backlog"]').should('not.contain', issueTitle);

  
  });

  it('Should cancel deletion process successfully', () => {
    //add steps to start deletion proces but cancel it
  });
});

///describe('Issue delete', () => {
  ///beforeEach(() => {
   /// cy.visit('/');
   // cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
    //open issue detail modal with title from line 16  
    ///cy.contains(issueTitle).click();
    ///});
  ///});
   //cy.get('[data-testid="modal:issue-details"]').should('be.visible');
  
  //issue title, that we are testing with, saved into variable
  ///const issueTitle = 'This is an issue of type: Task.';

  ///it.only('Should delete issue successfully', () => {
    //add steps to delete issue
     //cy.get('[data-testid="icon:trash"]').click();
     //cy.get('[data-testid="modal:confirm"]').should('be.visible');
     //cy.get('[data-testid="modal:confirm"]').contains('Delete issue').click();
    // cy.get('[data-testid="modal:confirm"]').should('not.exist');
     //cy.get('[data-testid="modal:issue-details"]').should('not.exist');
     //cy.get('[data-testid="board-list:backlog"]').should('not.contain', issueTitle);

  
  //});

  it('Should cancel deletion process successfully', () => {
    //add steps to start deletion proces but cancel it
  });
//});
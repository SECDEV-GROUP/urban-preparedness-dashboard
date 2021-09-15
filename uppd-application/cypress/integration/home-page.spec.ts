/// <reference types="cypress" />
const homeHeaders = ['UPPI Methodology', 'Title'];

describe('Visit Home Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('check for data source page titles', () => {
    homeHeaders.forEach((header: string) => {
      cy.get('h1').contains(header).should('exist');
    });
  });

  it('check page content', () => {
    cy.get("a[aria-label='go to map']").should('have.attr', 'href', '/map');

    cy.get("img[alt='SecDev Logo']").should('exist');
  });
});

/// <reference types="cypress" />
const infoHeaders = ['Info Page', 'Info Page Title Section Two'];

describe('Visit Info Page', () => {
  before(() => {
    cy.visit('/info');
  });

  it('check for data source page titles', () => {
    infoHeaders.forEach((header: string) => {
      cy.get('h1').contains(header).should('exist');
    });
  });

  it('has button to map page', () => {
    cy.get("a[aria-label='go to map']").should('have.attr', 'href', '/map');
  });
});

/// <reference types="cypress" />

describe('Sidebar Navigation Tests', () => {
  it('check side nav on data sources page', () => {
    cy.visit('/info');

    //Open the nav drawer
    cy.get("button[aria-label='menu']").click();

    cy.get("a[aria-label='go to Info page']").should(
      'have.class',
      'active-link',
    );

    cy.get("a[aria-label='go to Map page']").should(
      'not.have.class',
      'active-link',
    );

    cy.get("a[aria-label='go to Home page']").should(
      'not.have.class',
      'active-link',
    );

    // Go to map page
    cy.get("a[aria-label='go to Map page']").click();

    cy.get("a[aria-label='go to Info page']").should(
      'not.have.class',
      'active-link',
    );

    cy.get("a[aria-label='go to Map page']").should(
      'have.class',
      'active-link',
    );

    cy.get("a[aria-label='go to Home page']").should(
      'not.have.class',
      'active-link',
    );
  });
});

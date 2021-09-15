import { availableYears } from '../../src/configuration/app-config';
/// <reference types="cypress" />

const years = availableYears;
const factors = [
  'Urban Pandemic Preparedness Index',
  'Economic Factors',
  ' Demographic Factors',
  'Social Factors',
  'Burden of (Chronic) Disease',
  'Clinical Care and Lifestyle Choices',
  'Digital Preparedness',
];

describe('Sidebar', () => {
  it('sidebar render and have correct elements', () => {
    cy.visit('/map');
    // first header has correct content
    cy.get('h1').contains('Select Year');
    // date slider has correct options
    years.forEach((year: number) => {
      cy.get('#DateSlider').find('span').contains(year).should('exist');
    });
    // second header header has correct content
    cy.get('h1').contains('Select Filter');
    // check range slider marks
    cy.get('#FilterSlider').find('span').contains('0.00').should('exist');
    cy.get('#FilterSlider').find('span').contains('1.00').should('exist');
    // can select option from dropdown
    cy.get('#IndexSelect').select('Economic Factors').should('exist');
    // dropdown has correct options
    factors.forEach(item => {
      cy.get('#IndexSelect').find('option').contains(item).should('exist');
    });
  });

  it('test mobile sidebar', () => {
    cy.viewport('iphone-xr');
    cy.visit('/map');
    // check that mobile sidebar has mobile class
    cy.get('#sidebar-container').should('have.class', 'mobile');
    // toggle the panel collapsed
    cy.get("button[name='toggle panel']").click();
    cy.get('#sidebar-container').should('have.class', 'collapse');
    // toggle panel back open
    cy.get("button[name='toggle panel']").click();
    cy.get('#sidebar-container').should('not.have.class', 'collapse');
  });
});

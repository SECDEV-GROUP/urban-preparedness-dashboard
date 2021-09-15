/// <reference types="cypress" />
const links = [
  {
    route: '/',
    name: 'Home',
  },
  {
    route: '/map',
    name: 'Map',
  },
  {
    route: '/info',
    name: 'Info',
  },
];
describe('Top(Mobile) Navigation Test', () => {
  beforeEach(() => {
    cy.viewport('iphone-xr');
  });

  it('check top nav on map page on mobile', () => {
    cy.visit('/map');
    cy.get('header#TopNav');
  });

  it('check side nav menu links', () => {
    cy.get("button[aria-label='menu']").click();
    links.forEach(link => {
      cy.get(`a[aria-label='go to ${link.name} page']`)
        .should('have.attr', 'href', link.route)
        .should('exist');
    });
  });
});

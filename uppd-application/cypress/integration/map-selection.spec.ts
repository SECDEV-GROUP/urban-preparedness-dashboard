/// <reference types="cypress" />
import { PointsOfInterest } from '../../src/configuration/app-config';

describe('map selection', () => {
  before(() => {
    cy.visit('/map');
  });

  it('click on a tract and populate tooltip and sidebar', () => {
    cy.wait(5000);
    cy.get('#CensusInfo').should('not.exist');

    cy.get('canvas.mapboxgl-canvas').click(800, 400);

    cy.get('#CensusInfo').should('exist');

    cy.get('#PopupContent > :nth-child(1)').contains('Overall Index Score');
    cy.get('#PopupContent > :nth-child(3)').contains('Census Tract');
  });

  it('check points of interest dropdown', () => {
    cy.get('#POIMenu').should('exist').click();

    PointsOfInterest.forEach(item => {
      cy.get('#POIMenu').find('.ToggleLabel').contains(item.title);
    });
  });
});

/// <reference types="cypress" />

import YearlyHomePage from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/pages/astrology_pages/yearlyHomepage.js";
import shared_locators from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/support/shared_locators.js";

describe('Monthly Homepage Navigation elements', function() {
    const yearlyHomepage = new YearlyHomePage();

    beforeEach(() => {
    yearlyHomepage.visitYearlyHomePage();
    cy.viewport(1366, 768);
})

it('Confirm sign info card widget', function()  {
    yearlyHomepage.verifySignYearlyPickerWidget();
})

it('Confirm monthly paragraphs content are visible', function() {
    yearlyHomepage.confirmTheSkyThisYear();
})

it.only('Confirm extra elments, reports and Link list', function() {
    yearlyHomepage.verifyReportsImagesandLinksList();
})

})

/// <reference types="cypress" />

import MonthlyHomepage from "../pages/astrology_pages/monthlyHomepage";
import shared_locators from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/support/shared_locators.js";

describe('Monthly Homepage Navigation elements', function() {
    const monthlyHomePage = new MonthlyHomepage();

    beforeEach(() => {
    monthlyHomePage.visitMonthlyHomePage();
    cy.viewport(1366, 768);
})

it('Confirm sign info card widget', function()  {
    monthlyHomePage.verifySignPickerWidget();

})

it('Confirm monthly paragraphs content are visible', function() {
    monthlyHomePage.confirmTheSkyThisMonth();
})

it.only('Confirm extra elments, reports and Link list', function() {
    monthlyHomePage.verifyReportsImagesandLinksList();
})


})

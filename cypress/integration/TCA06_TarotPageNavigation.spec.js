/// <reference types="cypress" />

import TarotPage from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/pages/astrology_pages/tarotPage.js";
import tarotPage_locators from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/support/tarotPage_locators.js";

// TAROT PAGE COMPLETED

describe('Confirm Tarot Page Navigation', function() {
    const tarotPage = new TarotPage();

beforeEach(() => {
    tarotPage.visitTarotPage()
    cy.viewport(1366, 768);
})

it('Confirm Comp Main Widgets', function() {
    tarotPage.verifyMainCardContainer();

})

it('Confirm Tarot for Begginers Section', function() {
    tarotPage.verifyTarotForBegginers();
})

it('Arcana cards section', function() {
    tarotPage.verifyArcanaCards();
})

it('Article images verification', function() {
    tarotPage.articlesSectionVerification();
})

it('Recommended Reports Verification', function() {
    tarotPage.recommendedReportsVerification();
})

})
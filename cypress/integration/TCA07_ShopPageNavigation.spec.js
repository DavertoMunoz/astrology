/// <reference types="cypress" />

import shopPage_locators from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/support/shopPage_locators.js";
import ShopPage from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/pages/astrology_pages/shopPage.js";

describe('Confirm Shop Page Navigation', function() {
    const shopPage = new ShopPage();

    beforeEach(() => {
        shopPage.visitShopPage();
        cy.viewport(1366, 768);

    })

it('Confirm products images in shop', function() {
    shopPage.ImageProductsVerification();
})

it('Confirm Products Prices in Shop Main page', function() {
    shopPage.productsPricesVerification();
})
})
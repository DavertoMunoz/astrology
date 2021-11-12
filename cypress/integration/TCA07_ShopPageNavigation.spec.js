/// <reference types="cypress" />

import ShopPage from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/pages/astrology_pages/shopPage.js";
import shopPage_locators from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/support/shopPage_locators.js";


describe('Confirm Shop Page Navigation', function() {
    const shopPage = new ShopPage();

    beforeEach(() => {
        shopPage.visitShopPage();
        cy.viewport(1366, 768);

    })

it('Confirm products images in shop', function() {
    shopPage.ImageProductsVerification();
})

it.only('Confirm Products Prices in Shop Main page', function() {
    shopPage.productsPricesVerification();
})
})
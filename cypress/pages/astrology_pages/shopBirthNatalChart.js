/// <reference types="cypress" />

import productPageLocators from "../../support/productPageLocators";

class ShopBirthNatalChart {

    visitProductPage() {
        cy.visit(Cypress.env('birthNatalChartUrlProd'))
    }

    ProductTitleVerification() {
        cy.get(productPageLocators.mainProductEntryTitle).should('contain.text', 'Birth Horoscope (+ Natal Chart)');
        cy.get(productPageLocators.galleryMainImage).should('be.visible');
        cy.get(productPageLocators.gallerySecondImage).click().should('be.visible');
        cy.get(productPageLocators.galleryThirdImage).click().should('be.visible');
        cy.get(productPageLocators.galleryFourthImage).click().should('be.visible');
        cy.get(productPageLocators.galleryFifthImage).click().should('be.visible');


    }

}

export default ShopBirthNatalChart;
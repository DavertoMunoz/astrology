/// <reference types="cypress" />

import productPageLocators from "../../support/productPageLocators";

class PremiumMonthlyPage {

visitProductPage() {

cy.visit(Cypress.env('monthlyReportUrlProd'));
}

ProductTitleVerification() {
    cy.get(productPageLocators.productTitle).should('contain.text', 'Monthly Horoscope');
    cy.get(productPageLocators.galleryMainImage).should('be.visible');
    cy.get(productPageLocators.gallerySecondImage).click().should('be.visible');
    cy.get(productPageLocators.galleryThirdImage).click().should('be.visible');
    cy.get(productPageLocators.galleryFourthImage).click().should('be.visible');
    cy.get(productPageLocators.galleryFifthImage).click().should('be.visible');


}

productFillForm() {
    cy.get(productPageLocators.firstNameInput).type('Rita Capote');
    cy.get(productPageLocators.genderSelector).select('Female');
    cy.get(productPageLocators.dateOfBirthSelector).type('08/05/1980');
    cy.get(productPageLocators.timeOfBirthSelector).type('12:30');
    cy.get(productPageLocators.emailInput).type(userID_Alpha_Numeric())
    // Function that generates a random string for an email or whatever
    
    function userID_Alpha_Numeric() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text + '@yopmail.com';
      }
    cy.get(productPageLocators.birthLocationSelector).type('Car ');
    cy.wait(300);
    cy.get(productPageLocators.birthLocationSelector).type('{downarrow}').type('{enter}');
    cy.get(productPageLocators.addToCartButton).click();
    cy.get(productPageLocators.addToCartButton).click();

}



}

export default PremiumMonthlyPage;
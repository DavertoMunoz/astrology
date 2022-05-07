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
    // cy.get(productPageLocators.galleryFifthImage).click().should('be.visible');


}

monthlyHoroscopePurchase() {
    cy.get(productPageLocators.oneTimePurchaseSelector).click();
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
    cy.get(productPageLocators.birthLocationSelector).type('San ');
    cy.wait(300);
    cy.get(productPageLocators.birthLocationSelector).type('{downarrow}').type('{enter}');
    cy.get(productPageLocators.addToCartButton).click();
    cy.get(productPageLocators.addToCartButton).click();
    cy.get(productPageLocators.cartPageCouponField).type('3KR9NFWR');
    cy.get(productPageLocators.cartPageApplyCoupon).click();
    cy.get(productPageLocators.cartPageCheckoutButton).click();

    cy.get(productPageLocators.checkoutPageBillingEmail).type(userID_Alpha_Numeric())
    // Function that generates a random string for an email or whatever
    
    function userID_Alpha_Numeric() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text + '@yopmail.com';
      }

      
    // cy.get(productPageLocators.checkoutPagePasswordField).type('Encora2022.'); // Use this when creating a new account
      
      cy.get(productPageLocators.checkoutPageTermsCheckBox).click();
      cy.get(productPageLocators.checkoutPageBuyNowButton).click();
      cy.url().should('contain', '/checkout/order-received/');  

      // Compare the generated report link
      //   cy.url().then(url => {
      //   cy.get(productPageLocators.confirmPageReadReportLink);
      //   cy.url().should('equal', url);
      // })

      // cy.visit(url);
      //   cy.get("[src='https://reports.astrology.com/assets/images/headers/report-StEdFrMo-header-4.jpg']").should('be.visible');


      // cy.url().should('contain', 'v1/reports/astrology_wc_order');

    // Product added page

    

}



}

export default PremiumMonthlyPage;
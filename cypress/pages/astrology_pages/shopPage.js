/// <reference types="cypress" />

import shopPage_locators from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/support/shopPage_locators.js";

class ShopPage {

visitShopPage() {

cy.visit(Cypress.env('shopHomepageProd'));
        
}

ImageProductsVerification() {
    cy.get(shopPage_locators.shopTitle).should('be.visible');
    cy.get(shopPage_locators.shopDescription).should('contain.text', 'Welcome to the Astrology.com Shop! Complete with personalized horoscopes, birth chart, love compatibility, tarot readings, and more, take the first step at unlocking your destiny!');

    cy.get(shopPage_locators.homeSeptemberHoroImg).should('be.visible');
    cy.get(shopPage_locators.homebirthChartImg).should('be.visible');
    cy.get(shopPage_locators.homeLoveCompImg).should('be.visible');
    cy.get(shopPage_locators.homeLoveCompImg).should('be.visible');
    cy.get(shopPage_locators.homeYesNoTarotImg).should('be.visible');
    cy.get(shopPage_locators.homeLoveTarotImg).should('be.visible');
    cy.get(shopPage_locators.homeLoveScoreImg).should('be.visible');
    cy.get(shopPage_locators.homeSoulMateImg).should('be.visible');
    cy.get(shopPage_locators.homeMakeWishImg).should('be.visible');
    cy.get(shopPage_locators.homeKarmaReportImg).should('be.visible');
    cy.get(shopPage_locators.homeNatalMoonImg).should('be.visible');
    cy.get(shopPage_locators.homePastPresentImg).should('be.visible');
    cy.get(shopPage_locators.homeTreeLifeImg).should('be.visible');
    cy.get(shopPage_locators.homeTarotAngelsImg).should('be.visible');
    cy.get(shopPage_locators.homeCareerReportImg).should('be.visible');
    cy.get(shopPage_locators.homeTransitsReportImg).should('be.visible');
    cy.get(shopPage_locators.homeChakraTarotImg).should('be.visible');
    cy.get(shopPage_locators.home2021HoroImg).should('be.visible');
    cy.get(shopPage_locators.home2021NumerologyImg).should('be.visible');
    cy.get(shopPage_locators.home2021VedicImg).should('be.visible');
    cy.get(shopPage_locators.home2021ChineseImg).should('be.visible');
    cy.get(shopPage_locators.home2021TarotImg).should('be.visible');
    cy.get(shopPage_locators.home2021LoveTarotImg).should('be.visible');
    cy.get(shopPage_locators.homeAplusSubImg).should('be.visible');

}

    productsPricesVerification() {

    cy.fixture("reportsNamesPrices.json").then(json => {
    cy.get(shopPage_locators.homeMonthlyHoroPrice).should('have.text', json.monthlyReportPrice);
    cy.get(shopPage_locators.homebirthChartPrice).should('have.text', json.birthNatalChartPrice);
    cy.get(shopPage_locators.homeLoveCompPrice).should('have.text', json.loveCompatibilityPrice);
    cy.get(shopPage_locators.homeYesNoTarotPrice).should('have.text', json.yesNoTarotPrice);
    cy.get(shopPage_locators.homeLoveTarotPrice).should('have.text', json.loveTarotReadingPrice);
    cy.get(shopPage_locators.homeLoveScorePrice).should('have.text', json.loveScorePrice);
    cy.get(shopPage_locators.homeSoulMatePrice).should('have.text', json.soulMateTarotPrice);
    cy.get(shopPage_locators.homeMakeWishPrice).should('have.text', json.makeWishTarotPrice);
    cy.get(shopPage_locators.homeKarmaReportPrice).should('have.text', json.karmaReportPrice);
    cy.get(shopPage_locators.homeNatalMoonPrice).should('have.text', json.natalMoonReportPrice);
    cy.get(shopPage_locators.homePastPresentPrice).should('have.text', json.pastPresentFutureTarotPrice);
    cy.get(shopPage_locators.homeTreeLifePrice).should('have.text', json.treeOfLifeTarotPrice);
    cy.get(shopPage_locators.homeTarotAngelsPrice).should('have.text', json.tarotOfAngelsPrice);
    cy.get(shopPage_locators.homeCareerReportPrice).should('have.text', json.careerReportPrice);
    cy.get(shopPage_locators.homeTransitsReportPrice).should('have.text', json.monthPersonalTransitsPrice);
    cy.get(shopPage_locators.homeChakraTarotPrice).should('have.text', json.chakraTarotReadingPrice);
    cy.get(shopPage_locators.homeYearlyHoroPrice).should('have.text', json.yearPremiumHoroscopePrice);

    cy.get(shopPage_locators.home2022NumerologyPrice).should('have.text', json.yearNumerologyPrice);
    
    // Yearly
    // cy.get(".post-3098 [aria-hidden='true'] bdi").then(hiddenPrice => {
    //     if (hiddenPrice.is(':visible')) {

    //     } else {
    //         cy.get('.post-3098 ins bdi').should('contain.text', "10.97");        
    //     }
    //      // assert.isOk
    // })

    // cy.get(shopPage_locators.home2021HoroPrice).should('have.text', json.yearPremiumHoroscopePrice);
    // cy.get(shopPage_locators.home2021NumerologyPrice).should('have.text', json.yearNumerologyPrice);

    // Uncomment where a price is hidden

    // cy.get(".post-2786 [aria-hidden='true'] bdi").then(hiddenPrice => {
    //     if (hiddenPrice.is(':visible')) {

    //     } else {
    //         cy.get('.post-2786 bdi').should('have.text', "9.97");        
    //     }
        // assert.isOk
    //})


    // cy.get(shopPage_locators.home2021VedicPrice).should('have.text', json.yearVedicHoroscopePrice);
    // cy.get(shopPage_locators.home2021ChinesePrice).should('have.text', json.yearChineseHoroscopePrice);
    // cy.get(shopPage_locators.home2021TarotPrice).should('have.text', json.yearTarotReadingPrice);
    // cy.get(shopPage_locators.home2021LoveTarotPrice).should('have.text', json.yearLoveTarotReadingPrice);
    // cy.get(shopPage_locators.homeAplusSubPrice).should('have.text', json.astrologyPlusSubPriceyes);

        })
}
}


export default ShopPage
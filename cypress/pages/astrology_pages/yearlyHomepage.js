/// <reference types="cypress" />

import shared_locators from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/support/shared_locators.js";

class YearlyHomePage {

    visitYearlyHomePage() {
    
    cy.visit(Cypress.env('yearlyHomePage'));
        
}

verifySignYearlyPickerWidget() {
    // check all sign cards elements
    cy.get(shared_locators.ariesCard).should('be.visible');
    cy.get(shared_locators.taurusCard).should('be.visible');
    cy.get(shared_locators.geminiCard).should('be.visible');
    cy.get(shared_locators.cancerCard).should('be.visible');
    cy.get(shared_locators.leoCard).should('be.visible');
    cy.get(shared_locators.virgoCard).should('be.visible');
    cy.get(shared_locators.libraCard).should('be.visible');
    cy.get(shared_locators.scorpioCard).should('be.visible');
    cy.get(shared_locators.sagittariusCard).should('be.visible');
    cy.get(shared_locators.capricornCard).should('be.visible');
    cy.get(shared_locators.auqariusCard).should('be.visible');
    cy.get(shared_locators.piscesCard).should('be.visible');
}

confirmTheSkyThisYear() {
    cy.get(shared_locators.theSkyTitle).should('be.visible');
    cy.get(shared_locators.theSkyTitle).should('contain.text', 'Year');
    cy.get(shared_locators.firstContentBody).should('be.visible');
    cy.contains('Continue Reading').click();
    cy.url().should('include', '/article/2021-astrology-predictions');
    cy.get('h1').should('be.visible'); // Title
    cy.get('.byline').should('be.visible'); // Author
    cy.get('.meta__date').should('be.visible'); // Date
    cy.get('.featured-image').should('be.visible'); // Featured image visibility
    cy.get('.editorial-article__feed').should('be.visible') // Text content
    cy.get('.editorial-article__feed').should('contain.text', 'The year 2021 enters with the propulsive force of a new era announcing itself');
    cy.go('back');
}

verifyCarouselLinksList() {
    cy.get(shared_locators.cardDaily).should('be.visible');
    cy.get(shared_locators.cardWeekly).should('be.visible');
    cy.get(shared_locators.cardMonthly).should('be.visible');

    cy.get(shared_locators.carouselNextArrow).click();

    cy.get(shared_locators.cardChinese).should('be.visible');
    cy.get(shared_locators.cardChineseTitle).should('contain.text', 'Yearly Chinese');
    cy.get(shared_locators.cardLove).should('be.visible');
    cy.get(shared_locators.cardLoveTitle).should('contain.text', 'Yearly Love');
    cy.get(shared_locators.cardWork).should('be.visible');
    cy.get(shared_locators.cardWorkTitle).should('contain.text', 'Yearly Work');

    cy.get(shared_locators.carouselNextArrow).click();

    cy.get(shared_locators.cardDaily).should('be.visible');
    cy.get(shared_locators.cardWeekly).should('be.visible');
    cy.get(shared_locators.cardMonthly).should('be.visible');

}

verifyReportsImagesandLinksList() {

    cy.get(shared_locators.adCardJoinplusSidebar).should('be.visible');
    cy.get(shared_locators.adVideoSidebar).should('be.visible');

    cy.scrollTo(0, 1500)

    // Reccomended reports
    //cy.get(shared_locators.premiumMonthlyReportImage).should('be.visible');
    cy.get(shared_locators.firstSliderReportImg).should('be.visible');
    cy.get(shared_locators.firstSliderCard).should('have.attr', 'href').and('include', '/product/astrology-plus');
    cy.get(shared_locators.secondSliderReportImg).should('be.visible');
    cy.get(shared_locators.secondSliderCard).should('have.attr', 'href').and('include', '/product/september-2021-horoscope');
    cy.get(shared_locators.thirdSliderReportImg).should('be.visible');
    cy.get(shared_locators.thirdSliderCard).should('have.attr', 'href').and('include', '/product/astrology-plus/');


    // List of links for mohtly horoscopes visibility (not functional)
    cy.get(shared_locators.loveHeaderLinkList).should('be.visible');
    cy.get(shared_locators.loveLinkList).should('be.visible');
    cy.get(shared_locators.workHeaderLinkList).should('be.visible');
    cy.get(shared_locators.workLinkList).should('be.visible');

    // There are no link list for yearly page
    // cy.get(shared_locators.datingHeaderLinkList).should('be.visible');
    // cy.get(shared_locators.datingLinkList).should('be.visible');

    cy.get(shared_locators.adBottomBanner).should('be.visible');

}
}

export default YearlyHomePage;
/// <reference types="cypress" />

import shared_locators from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/support/shared_locators.js";

class MonthlyHomepage {

    visitMonthlyHomePage() {
    
    cy.visit(Cypress.env('monthlyHomePageProd'));
        
}

verifySignPickerWidget() {

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

confirmTheSkyThisMonth() {
    cy.get(shared_locators.theSkyTitle).should('be.visible');
    cy.get(shared_locators.theSkyTitle).should('contain.text', 'Month');
    cy.get(shared_locators.firstContentBody).should('be.visible');
    cy.contains('Continue Reading').click();
    cy.url().should('include', '/article/april');
    cy.get('h1').should('be.visible');
    cy.get('.byline').should('be.visible'); // Author
    cy.get('.meta__date').should('be.visible'); // Date
    cy.get('.featured-image').should('be.visible'); // Featured image visibility
    cy.get('.editorial-article__feed').should('be.visible') // Text content
    cy.go('back');
}

verifyCarouselLinksList() {
    cy.get(shared_locators.cardDaily).should('be.visible');
    cy.get(shared_locators.cardWeekly).should('be.visible');
    cy.get(shared_locators.cardYearly).should('be.visible');

    cy.get(shared_locators.carouselNextArrow).click();

    cy.get(shared_locators.cardChinese).should('be.visible');
    cy.get(shared_locators.cardChineseTitle).should('contain.text', 'Monthly Chinese');
    cy.get(shared_locators.cardLove).should('be.visible');
    cy.get(shared_locators.cardLoveTitle).should('contain.text', 'Monthly Love');
    cy.get(shared_locators.cardWork).should('be.visible');
    cy.get(shared_locators.cardWorkTitle).should('contain.text', 'Monthly Work');

    cy.get(shared_locators.carouselNextArrow).click();

    cy.get(shared_locators.cardDating).should('be.visible');
    cy.get(shared_locators.cardDatingTitle).should('contain.text', 'Monthly Dating');

}

verifyReportsImagesandLinksList() {

    cy.get(shared_locators.adCardJoinplusSidebar).should('be.visible');
    
    cy.scrollTo(0, 1000); // Scroll to load the ad


    cy.get(shared_locators.adVideoSidebar).should('be.visible');

    cy.scrollTo(0, 1500)

    // Reccomended reports
    //cy.get(shared_locators.premiumMonthlyReportImage).should('be.visible');
    cy.get(shared_locators.firstSliderReportImg).should('be.visible');
    cy.get(shared_locators.firstSliderCard).should('have.attr', 'href').and('include', '/product/monthly-horoscope');
    cy.get(shared_locators.secondSliderReportImg).should('be.visible');
    cy.get(shared_locators.secondSliderCard).should('have.attr', 'href').and('include', '/product/birth-horoscope-natal-chart');
    cy.get(shared_locators.thirdSliderReportImg).should('be.visible');
    cy.get(shared_locators.thirdSliderCard).should('have.attr', 'href').and('include', '/product/astrology-plus/'); 


    // List of links for mohtly horoscopes visibility (not functional)
    cy.get(shared_locators.loveHeaderLinkList).should('be.visible');
    cy.get(shared_locators.loveLinkList).should('be.visible');
    cy.get(shared_locators.workHeaderLinkList).should('be.visible');
    cy.get(shared_locators.workLinkList).should('be.visible');
    cy.get(shared_locators.datingHeaderLinkList).should('be.visible');
    cy.get(shared_locators.datingLinkList).should('be.visible');

    cy.get(shared_locators.adBottomBanner).should('be.visible');

}
}

export default MonthlyHomepage;
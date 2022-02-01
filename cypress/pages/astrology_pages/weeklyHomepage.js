/// <reference types="cypress" />

import shared_locators from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/support/shared_locators.js";

class WeeklyHomepage {

    visitWeeklyHomePage() {
    
    cy.visit(Cypress.env('weeklyHomepageProd'));
        
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

confirmTheSkyThisWeek() {
    cy.get(shared_locators.theSkyTitle).should('be.visible');
    cy.get(shared_locators.theSkyTitle).should('contain.text', 'Week');
    cy.get(shared_locators.firstContentBody).should('be.visible');
    cy.contains('Continue Reading').click();
    cy.url().should('include', '/weekly-horoscope');
    cy.get('h1').should('be.visible');
    cy.get('.byline').should('be.visible');
    cy.get('.meta__date').should('be.visible');
    cy.get('.featured-image').should('be.visible');
    cy.get('.editorial-article__feed').should('be.visible')
    cy.go('back');
}

verifyCarouselLinksList() {
    
    cy.get(shared_locators.adCardJoinplusSidebar).should('be.visible');
    
    cy.scrollTo(0, 1000); // Scroll to load the ad

    cy.get(shared_locators.adVideoSidebar).should('be.visible');
    cy.get(shared_locators.cardDaily).should('be.visible');
    cy.get(shared_locators.cardMonthly).should('be.visible');
    cy.get(shared_locators.cardYearly).should('be.visible');

    cy.get(shared_locators.MoreHorocarouselNextArrow).click(); // Fixed locator

    cy.get(shared_locators.cardChinese).should('be.visible');
    cy.get(shared_locators.cardLove).should('be.visible');
    cy.get(shared_locators.cardWork).should('be.visible');

    cy.get(shared_locators.MoreHorocarouselNextArrow).click();

    cy.get(shared_locators.cardDating).should('be.visible');

    cy.get(shared_locators.loveHeaderLinkList).should('be.visible');
    cy.get(shared_locators.loveLinkList).should('be.visible');
    cy.get(shared_locators.workHeaderLinkList).should('be.visible');
    cy.get(shared_locators.workLinkList).should('be.visible');
    cy.get(shared_locators.datingHeaderLinkList).should('be.visible');
    cy.get(shared_locators.datingLinkList).should('be.visible');

    cy.get(shared_locators.adBottomBanner).should('be.visible');

    
    


}

}

export default WeeklyHomepage;
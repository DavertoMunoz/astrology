/// <reference types="cypress" />

import zodiacSignsPage_Locators from "../../support/zodiacSignsPage_Locators";
import shared_locators from "../../support/shared_locators";

class ZodiacSignsPage {

    visitZodiacSignsPage() {
    
        cy.visit("https://www.astrology.com/zodiac-signs") // (Cypress.env('zodiacSignsHomepageProd'));
    }

verifyChooseYourSignModule() {
    // check title text and icon signs
    cy.get(shared_locators.pageSubtitle).should('be.visible')
    cy.get(zodiacSignsPage_Locators.ariesCircleIcon).should('be.visible');
    cy.get(zodiacSignsPage_Locators.taurusCircleIcon).should('be.visible');
    cy.get(zodiacSignsPage_Locators.geminiCircleIcon).should('be.visible');
    cy.get(zodiacSignsPage_Locators.cancerCircleIcon).should('be.visible');
    cy.get(zodiacSignsPage_Locators.leoCircleIcon).should('be.visible');
    cy.get(zodiacSignsPage_Locators.virgoCircleIcon).should('be.visible');
    cy.get(zodiacSignsPage_Locators.libraCircleIcon).should('be.visible');
    cy.get(zodiacSignsPage_Locators.scorpioCircleIcon).should('be.visible');
    cy.get(zodiacSignsPage_Locators.sagittariusCircleIcon).should('be.visible');
    cy.get(zodiacSignsPage_Locators.capricornCircleIcon).should('be.visible');
    cy.get(zodiacSignsPage_Locators.aquariusCircleleIcon).should('be.visible');
    cy.get(zodiacSignsPage_Locators.piscesCircleIcon).should('be.visible');

}

verifyRecommendedReportsModule() {
    cy.get(shared_locators.firstSliderReportImg).should('be.visible').click; //bc
    cy.get(shared_locators.firstSliderCard).should('have.attr', 'href').and('include', '/product/birth-horoscope-natal-chart/');
    

    cy.get(shared_locators.secondSliderReportImg).should('be.visible'); // premium dec
    cy.get(shared_locators.secondSliderCard).should('have.attr', 'href').and('include', '/product/monthly-horoscope/');

    cy.get(shared_locators.thirdSliderReportImg).should('be.visible'); // 2022 premium
    cy.get(shared_locators.thirdSliderCard).should('have.attr', 'href').and('include', '/product/yearly-horoscope/');

    cy.get(shared_locators.recommendedNextArrow);

    cy.get(shared_locators.fourthSliderReportImg).should('be.visible'); // numerology
    cy.get(shared_locators.fourthSliderCard).should('have.attr', 'href').and('include', '/product/numerology-forecast/');

    cy.get(shared_locators.fifthSliderReportImg).should('be.visible'); // natal moon
    cy.get(shared_locators.fifthSliderCard).should('have.attr', 'href').and('include', '/product/natal-moon-report');

    cy.get(shared_locators.sixthSliderReportImg).should('be.visible'); // 2022 vedic horo
    cy.get(shared_locators.sixthSliderCard).should('have.attr', 'href').and('include', '/product/annual-vedic-horoscope/');

    cy.get(shared_locators.recommendedNextArrow);

    cy.get(shared_locators.seventhSliderReportImg).should('be.visible'); // 212 month personal
    cy.get(shared_locators.seventhSliderCard).should('have.attr', 'href').and('include', 'product/12-month-personal-transits');

    cy.get(shared_locators.eigthSliderReportImg).should('be.visible'); // career report
    cy.get(shared_locators.eighthSliderCard).should('have.attr', 'href').and('include', '/product/career-report/');

}

verifyPopularWidgets() {
    cy.get(shared_locators.mostPopYesNoTarotTitle).should('have.attr', 'href').and('include', 'tarot/yes-no.html');
    cy.get(shared_locators.mostPopYesNoCardNum1).should('be.visible');
    cy.get(shared_locators.mostPopYesNoCardNum2).should('be.visible');
    cy.get(shared_locators.mostPopYesNoCardNum3).should('be.visible');
    cy.get(shared_locators.mostPopYesNoCardNum4).should('be.visible');
    cy.get(shared_locators.mostPopYesNoCardNum5).should('be.visible');

    cy.get(shared_locators.mostPopfreeBCTitle).should('be.visible');

    cy.get(shared_locators.mostPopKeenWidget).should('be.visible');
    cy.get(shared_locators.keenMapMarker).should('be.visible');
    cy.get(shared_locators.keenTalkPsychicBtn).should('have.attr', 'href').and('include', '/psychic-readings/195?tid=7YASEGG0');

}
}

export default ZodiacSignsPage;
/// <reference types="cypress" />

import chinesePage_Locators from "../../support/chinesePage_Locators";
import shared_locators from "../../support/shared_locators";
import chineseTextMain from  "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/fixtures/chineseText.json";

class ChineseHomepage {


visitChineseHomepage() {
    
cy.visit(Cypress.env('chineseSignsHomePageProd'));
        
}

verifyChineseSignCards() {

    cy.get(shared_locators.pageTitle).should('contain.text', 'DAILY Chinese Horoscopes');

    cy.get(chinesePage_Locators.ratCard).should('be.visible');
    cy.get(chinesePage_Locators.oxCard).should('be.visible');
    cy.get(chinesePage_Locators.tigerCard).should('be.visible');
    cy.get(chinesePage_Locators.rabbitCard).should('be.visible');
    cy.get(chinesePage_Locators.dragonCard).should('be.visible');
    cy.get(chinesePage_Locators.snakeCard).should('be.visible');
    cy.get(chinesePage_Locators.horseCard).should('be.visible');
    cy.get(chinesePage_Locators.sheepCard).should('be.visible');
    cy.get(chinesePage_Locators.monkeyCard).should('be.visible');
    cy.get(chinesePage_Locators.roosterCard).should('be.visible');
    cy.get(chinesePage_Locators.dogCard).should('be.visible');
    cy.get(chinesePage_Locators.pigCard).should('be.visible');

    cy.get(chinesePage_Locators.ratCardDates).should('contain.text', '1960, 1972, 1984, 1996, 2008, 2020');
    cy.get(chinesePage_Locators.oxCardDates).should('contain.text', '1961, 1973, 1985, 1997, 2009, 2021');
    cy.get(chinesePage_Locators.tigerCardDates).should('contain.text', '1962, 1974, 1986, 1998, 2010');
    cy.get(chinesePage_Locators.rabbitCardDates).should('contain.text', '1963, 1975, 1987, 1999, 2011');
    cy.get(chinesePage_Locators.dragonCardDates).should('contain.text', '1964, 1976, 1988, 2000, 2012');
    cy.get(chinesePage_Locators.snakeCardDates).should('contain.text', '1965, 1977, 1989, 2001, 2013');
    cy.get(chinesePage_Locators.horseCardDates).should('contain.text', '1966, 1978, 1990, 2002, 2014');
    cy.get(chinesePage_Locators.sheepCardDates).should('contain.text', '1967, 1979, 1991, 2003, 2015');
    cy.get(chinesePage_Locators.monkeyCardDates).should('contain.text', '1968, 1980, 1992, 2004, 2016');
    cy.get(chinesePage_Locators.roosterCardDates).should('contain.text', '1969, 1981, 1993, 2005, 2017');
    cy.get(chinesePage_Locators.dogCardDates).should('contain.text', '1970, 1982, 1994, 2006, 2018');
    cy.get(chinesePage_Locators.pigCardDates).should('contain.text', '1971, 1983, 1995, 2007, 2019');

    cy.get(chinesePage_Locators.ratCardImage).should('be.visible');
    cy.get(chinesePage_Locators.oxCardImage).should('be.visible');
    cy.get(chinesePage_Locators.tigerCardImage).should('be.visible');
    cy.get(chinesePage_Locators.rabbitCardImage).should('be.visible');
    cy.get(chinesePage_Locators.dragonCardImage).should('be.visible');
    cy.get(chinesePage_Locators.snakeCardImage).should('be.visible');
    cy.get(chinesePage_Locators.horseCardImage).should('be.visible');
    cy.get(chinesePage_Locators.sheepCardImage).should('be.visible');
    cy.get(chinesePage_Locators.monkeyCardImage).should('be.visible');
    cy.get(chinesePage_Locators.roosterCardImage).should('be.visible');
    cy.get(chinesePage_Locators.dogCardImage).should('be.visible');
    cy.get(chinesePage_Locators.pigCardImage).should('be.visible');

    cy.get('.grid__main > :nth-child(1)').should('contain.text', "What's your Chinese horoscope? We've got you covered! Here, you'll find free daily horoscopes for all Chinese zodiac signs.");
}

verifyCarouselcontents(){

    cy.get(chinesePage_Locators.weeklyChineseCard).should('contain.text', 'Weekly Chinese');
    cy.get(chinesePage_Locators.monthlyChineseCard).should('contain.text', 'Monthly Chinese');
    cy.get(chinesePage_Locators.yearlyChineseCard).should('contain.text', 'Yearly Chinese');

    cy.get(shared_locators.MoreHorocarouselNextArrow).click();

    cy.get(shared_locators.cardDaily).should('be.visible');
    cy.get(shared_locators.cardWeekly).should('be.visible');
    cy.get(shared_locators.cardMonthly).should('be.visible');

    cy.get(shared_locators.MoreHorocarouselNextArrow).click();

    cy.get(shared_locators.cardYearly).should('be.visible');
    cy.get(shared_locators.cardLove).should('be.visible');

    cy.get(shared_locators.MoreHorocarouselNextArrow).click();
    cy.get(shared_locators.cardWork).should('be.visible');

    cy.get(shared_locators.MoreHorocarouselNextArrow).click();

    cy.get(shared_locators.cardDating).should('be.visible');
}

verifyTextContent() {

    cy.fixture('chineseText.json').then(json => {
        cy.get('p:nth-of-type(2)').should('have.text', json.chineseHomeFirstParagraph);
        cy.get('p:nth-of-type(4)').should('have.text', json.chineseHomeSecondParagraph);
        cy.get('p:nth-of-type(6)').should('have.text', json.chineseHomeThirdParagraph);
        cy.get('p:nth-of-type(8)').should('have.text', json.chineseHomeFourthParagraph);
        cy.get('p:nth-of-type(10)').should('have.text', json.chineseHomeFifthParagraph);
        cy.get('p:nth-of-type(12)').should('have.text', json.chineseHomeSixthParagraph);
    })
}

recommendedReportChineseIndex() {
    cy.get(shared_locators.firstSliderReportImg).should('be.visible');
    cy.get(shared_locators.firstSliderLinkTitle).click();
    cy.url().should('contain', '/product/astrology-plus/?utm_source');
    cy.fixture('reportsNamesPrices.json').then(json => {
        cy.get(shared_locators.aPlusMainTitle).should('have.text', json.astrologyPlusSub);
    })
    cy.go('back');

    cy.get(shared_locators.secondSliderReportImg).should('be.visible');
    cy.get(shared_locators.secondSliderLinkTitle).click();
    cy.url().should('contain', '/product/career-report/?utm_source');
    cy.fixture('reportsNamesPrices.json').then(json => {
        cy.get(shared_locators.mainProductTitle).should('have.text', json.careerReport);
    })
    cy.go('back');

    cy.get(shared_locators.secondSliderReportImg).should('be.visible');
    cy.get(shared_locators.secondSliderLinkTitle).click();
    cy.url().should('contain', '/product/career-report/?utm_source');
    cy.fixture('reportsNamesPrices.json').then(json => {
        cy.get(shared_locators.mainProductTitle).should('have.text', json.careerReport);
    })
    cy.go('back');

    cy.get(chinesePage_Locators.reportsCarouselNextArrow).click()

    cy.get(shared_locators.fourthSliderReportImg).should('be.visible');
    cy.get(shared_locators.fourthSliderLinkTitle).click();
    cy.url().should('contain', '/product/yearly-chinese-horoscope/?utm_source');

    
    cy.fixture('reportsNamesPrices.json').then(json => {
        cy.get(shared_locators.mainProductTitle).should('have.text', json.yearChineseHoroscope);
    })
    // Add on removed from this product
    // cy.fixture('reportsNamesPrices.json').then(json => {
    //     cy.get(shared_locators.itemAddonTitle).should('have.text', json.treeOfLifeTarot);
    // })
    cy.go('back');

    cy.get(chinesePage_Locators.reportsCarouselNextArrow).click()

    cy.get(shared_locators.fifthSliderReportImg).should('be.visible');
    cy.get(shared_locators.fifthSliderLinkTitle).click();
    cy.url().should('contain', '/product/annual-vedic-horoscope/?utm_source');
    cy.fixture('reportsNamesPrices.json').then(json => {
        cy.get(shared_locators.mainProductTitle).should('have.text', json.yearVedicHoroscope);
    })
    cy.go('back');

    cy.get(chinesePage_Locators.reportsCarouselNextArrow).click()

    cy.get(shared_locators.sixthSliderReportImg).should('be.visible');
    cy.get(shared_locators.sixthSliderLinkTitle).click();
    cy.url().should('contain', '/product/yearly-horoscope/');
    cy.fixture('reportsNamesPrices.json').then(json => {
        cy.get(shared_locators.mainProductTitle).should('have.text', json.yearPremiumHoroscope);
    })

    cy.go('back');

}

ChineseMoreHoroscopesLinkList() {
    cy.get(shared_locators.adCardJoinplusSidebar).should('be.visible');

    cy.scrollTo(0, 1000); // We need to scroll to load the ad 
    cy.get(shared_locators.adVideoSidebar).scrollIntoView().should('be.visible');

    cy.scrollTo(0, 1500);

    // List of links for mohtly horoscopes visibility (not functional)
    cy.get(shared_locators.loveHeaderLinkList).should('be.visible');
    cy.get(shared_locators.loveLinkList).should('be.visible');
    cy.get(shared_locators.workHeaderLinkList).should('be.visible');
    cy.get(shared_locators.workLinkList).should('be.visible');
    cy.get(shared_locators.datingHeaderLinkList).should('be.visible');
    cy.get(shared_locators.datingLinkList).should('be.visible');

    // check ads with this!!!
    cy.get(shared_locators.adBottomBanner).scrollIntoView().should('be.visible');
}
}



export default ChineseHomepage;
/// <reference types="cypress" />

    // import YesNoTarotHomePage from "./yesNoTarotHomepage";
    // import yesNoTarotPage_Locators from "../support/tarotInnerPage_Locators";
    // import HoroscopesDailyPage from "./horoscopesDaily";
    import shared_locators from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/support/shared_locators.js";
    import tarotInnerPage_Locators from "/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/support/tarotInnerPage_Locators.js";


class SanityLinksPages {

    // YES NO TAROT PAGE END-TO-END TEST
    assertYesNoTarotPage() {
    
        cy.visit(Cypress.env('yesNoTarotHomePageProd'));
        cy.request(Cypress.env("yesNoTarotHomePageProd")).then((response) => {
            expect(response.status).to.eq(200);
            })
            
    }
    
    verifyYesNoTarotLandingPagePickCard() {
        
        cy.get(shared_locators.pageTitle).should('contain', 'Yes or No Tarot Reading');
        cy.get(shared_locators.pageSubtitle).should('contain', 'Need an answer and advice on something ASAP? This popular reading gives you a simple yes or no and straightforward advice. Focus on your question and select your card now!');
        cy.get(tarotInnerPage_Locators.deckCardNumber1).click({force: true});
        cy.get(tarotInnerPage_Locators.tarotResultsbreadCrumb).should('contain', 'Results');
        cy.get(tarotInnerPage_Locators.taroReadinResultCard).should('be.visible');
        cy.get(tarotInnerPage_Locators.resultDescription).should('be.visible');
        cy.get(tarotInnerPage_Locators.pickAnothercardBtn).click();
        cy.get(tarotInnerPage_Locators.deckCardNumber5).click({force: true});
        cy.get(tarotInnerPage_Locators.tarotResultsbreadCrumb).should('contain', 'Results');
        cy.get(tarotInnerPage_Locators.taroReadinResultCard).should('be.visible');
        cy.get(tarotInnerPage_Locators.resultDescription).should('be.visible');
        cy.get(tarotInnerPage_Locators.pickAnothercardBtn).click();
        cy.get(tarotInnerPage_Locators.deckCardNumber7).click({force: true});
        cy.get(tarotInnerPage_Locators.tarotResultsbreadCrumb).should('contain', 'Results');
        cy.get(tarotInnerPage_Locators.taroReadinResultCard).should('be.visible');
        cy.get(tarotInnerPage_Locators.pickAnothercardBtn).click();
        cy.get(tarotInnerPage_Locators.deckCardNumber3).click({force: true});
        cy.get(tarotInnerPage_Locators.tarotResultsbreadCrumb).should('contain', 'Results');
        cy.get(tarotInnerPage_Locators.taroReadinResultCard).should('be.visible');
    
    
    }   
    verifyRecommendedReports() {
        cy.get(shared_locators.firstSliderReportImg).should('be.visible');
        cy.get(shared_locators.firstSliderReportTitle).should('contain', 'Yes/No Tarot');
        cy.get(shared_locators.secondSliderReportImg).should('be.visible');
        cy.get(shared_locators.secondSliderReportTitle).should('contain', 'Make A Wish Tarot');
        cy.get(shared_locators.thirdSliderReportImg).should('be.visible');
        cy.get(shared_locators.thirdsSliderReportTitle).should('contain', 'Soulmate Tarot');
    
        cy.get(shared_locators.recommendedNextArrow).click();
    
        cy.get(shared_locators.fourthSliderReportImg).should('be.visible');
        cy.get(shared_locators.fourthSliderReportTitle).should('contain', 'Love Tarot Reading');
        cy.get(shared_locators.fifthSliderReportImg).should('be.visible');
        cy.get(shared_locators.fifthSliderReportTitle).should('contain', 'Tarot of Angels');
        cy.get(shared_locators.sixthSliderReportImg).should('be.visible');
        cy.get(shared_locators.sixthSliderReportTitle).should('contain', 'Chakra Tarot Reading');
    
        cy.get(shared_locators.recommendedNextArrow).click();
    
        cy.get(shared_locators.seventhSliderReportImg).should('be.visible');
        cy.get(shared_locators.seventhSliderReportTitle).should('contain', '2022 Tarot Reading');
        cy.get(shared_locators.eigthSliderReportImg).should('be.visible');
        cy.get(shared_locators.eightSliderReportTitle).should('contain', '2022 Love Tarot Reading');
    
    }
    
    verifyPopularWidgets() {
        
            cy.get(shared_locators.mostPopfreeBCTitle).should('be.visible');
        
            cy.get(shared_locators.mostPopKeenWidget).should('be.visible');
            cy.get(shared_locators.keenMapMarker).should('be.visible');
            cy.get(shared_locators.keenTalkPsychicBtn).should('have.attr', 'href').and('include', '/psychic-readings/195?tid=7YASEGG0');

            cy.get(shared_locators.mostPopularNextArrow).click();

            cy.get(shared_locators.mostPopYesNoTarotTitle).should('have.attr', 'href').and('include', 'tarot/yes-no.html');
            cy.get(shared_locators.mostPopYesNoCardNum1).should('be.visible');
            cy.get(shared_locators.mostPopYesNoCardNum2).should('be.visible');
            cy.get(shared_locators.mostPopYesNoCardNum3).should('be.visible');
            cy.get(shared_locators.mostPopYesNoCardNum4).should('be.visible');
            
    }
    
    adsVisibility() {
    
        // cy.get(shared_locators.adTopNavBar).should('be.visible');
        cy.get("#d_banner_t_banner_m_none_1").should('be.visible');
        cy.get("div.sticky").should('be.visible');
        cy.get("#skm-boomerang-el-3-1").should('be.visible');
    
    }

    // DAILY HOROSCOPES ASSERTIONS
    verifyDailyHoroscopePage() {

        
    }


}


export default SanityLinksPages;
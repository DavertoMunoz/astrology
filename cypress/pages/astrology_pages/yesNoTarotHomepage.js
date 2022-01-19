/// <reference types="cypress" />

import yesNoTarotPage_Locators from "../../support/tarotInnerPage_Locators";
import shared_locators from "../../support/shared_locators";
import tarotPage_locators from "../../support/tarotPage_locators";
import tarotInnerPage_Locators from "../../support/tarotInnerPage_Locators";

class YesNoTarotHomePage {

visitYesNoTarotHomepage() {
    
    cy.visit(Cypress.env('yesNoTarotHomePageProd'));
        
}

verifyYesNoTarotLandingPagePickCard() {
    cy.get(shared_locators.pageTitle).should('contain', 'Yes or No Tarot Reading');
    cy.get(shared_locators.pageSubtitle).should('contain', 'Need an answer and advice on something ASAP? This popular reading gives you a simple yes or no and straightforward advice. Focus on your question and select your card now!');
    cy.get(tarotInnerPage_Locators.deckCardNumber1).click({force: true});
    cy.get(tarotInnerPage_Locators.resultsTitleText).should('contain', 'Yes or No Tarot Reading');
    cy.get(tarotInnerPage_Locators.taroReadinResultCard).should('be.visible');
    cy.get(tarotInnerPage_Locators.resultDescription).should('be.visible');
    cy.get(tarotInnerPage_Locators.pickAnothercardBtn).click();
    cy.get(tarotInnerPage_Locators.deckCardNumber5).click({force: true});
    cy.get(tarotInnerPage_Locators.resultsTitleText).should('contain', 'Yes or No Tarot Reading');
    cy.get(tarotInnerPage_Locators.taroReadinResultCard).should('be.visible');
    cy.get(tarotInnerPage_Locators.resultDescription).should('be.visible');
    cy.get(tarotInnerPage_Locators.pickAnothercardBtn).click();
    cy.get(tarotInnerPage_Locators.deckCardNumber7).click({force: true});
    cy.get(tarotInnerPage_Locators.resultsTitleText).should('contain', 'Yes or No Tarot Reading');
    cy.get(tarotInnerPage_Locators.taroReadinResultCard).should('be.visible');
    cy.get(tarotInnerPage_Locators.pickAnothercardBtn).click();
    cy.get(tarotInnerPage_Locators.deckCardNumber3).click({force: true});
    cy.get(tarotInnerPage_Locators.resultsTitleText).should('contain', 'Yes or No Tarot Reading');
    cy.get(tarotInnerPage_Locators.taroReadinResultCard).should('be.visible');



}   

}

export default YesNoTarotHomePage;
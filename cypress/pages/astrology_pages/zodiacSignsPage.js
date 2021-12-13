/// <reference types="cypress" />

import zodiacSignsPage_Locators from "../../support/zodiacSignsPage_Locators";
import shared_locators from "../../support/shared_locators";

class ZodiacSignsPage {

    visitZodiacSignsPage() {
    
        cy.visit(Cypress.env('zodiacSignsHomepageProd'));
    }

verifyChooseYourSignModule() {
    // check title text and icon signs
    cy.get(shared_locators.pageSubtitle).should('be.visible')

}
}

export default ZodiacSignsPage;
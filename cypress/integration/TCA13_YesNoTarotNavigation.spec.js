/// <reference types="cypress" />

import YesNoTarotHomePage from "../pages/astrology_pages/yesNOTarotHomepage";
import shared_locators from "../support/shared_locators";
import yesNoTarotPage_Locators from "../support/tarotInnerPage_Locators";


describe('Yes No Tarot Elements and Card Selection', function() {
    const yesNoTarotHomepage = new YesNoTarotHomePage();

    beforeEach(() => {
        yesNoTarotHomepage.visitYesNoTarotHomepage();
        cy.viewport(1366, 768);

})

it('Assert elements and Card Selection', function() {
    yesNoTarotHomepage.verifyYesNoTarotLandingPagePickCard()

})
})
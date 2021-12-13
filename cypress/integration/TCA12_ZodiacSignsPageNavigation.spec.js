/// <reference types="cypress" />

import zodiacSignsPage_Locators from "../support/zodiacSignsPage_Locators";
import shared_locators from "../support/shared_locators";
import ZodiacSignsPage from "../pages/astrology_pages/zodiacSignsPage";

describe('Zodiac Sign Page navigation assertions', function() {
    const zodiacSignsPage = new ZodiacSignsPage();

    beforeEach(() => {
        zodiacSignsPage.visitZodiacSignsPage();
        cy.viewport(1366, 768);
})

it('Assert chinese main card info', function() {
    zodiacSignsPage.verifyChooseYourSignModule();
})
})
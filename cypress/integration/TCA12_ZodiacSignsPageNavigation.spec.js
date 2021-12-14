/// <reference types="cypress" />

import zodiacSignsPage_Locators from "../support/zodiacSignsPage_Locators";
import shared_locators from "../support/shared_locators";
import ZodiacSignsPage from "../pages/astrology_pages/zodiacSignsPage";

// COMPLETED
describe('Zodiac Sign Page navigation assertions', function() {
    const zodiacSignsPage = new ZodiacSignsPage();

    beforeEach(() => {
        zodiacSignsPage.visitZodiacSignsPage();
        cy.viewport(1366, 768);
})

it('Assert Zodiac Signs Icons and subtitle text', function() {
    zodiacSignsPage.verifyChooseYourSignModule();
})

it('Assert recommended reports sliders', function() {
    zodiacSignsPage.verifyRecommendedReportsModule();

})

it('Verify Popular Widgets', function() {
    zodiacSignsPage.verifyPopularWidgets();
})


})
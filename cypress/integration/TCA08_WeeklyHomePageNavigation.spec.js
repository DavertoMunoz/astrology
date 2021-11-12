/// <reference types="cypress" />

import WeeklyHomepage from "../pages/astrology_pages/weeklyHomepage";

describe(' Confirm Weekly Page Navigation', function() {
    const weeklyHomepagePage = new WeeklyHomepage();

    beforeEach(() => {
        weeklyHomepagePage.visitWeeklyHomePage();
        cy.viewport(1366, 768);

    })

it('Confirm sign info card widget', function() {
    weeklyHomepagePage.verifySignPickerWidget();

})

it('Confirm weekly paragraphs content are visible', function() {
    weeklyHomepagePage.confirmTheSkyThisWeek();
})

it('Verify visibility of carousel, links and ad elements', function() {
    weeklyHomepagePage.verifyCarouselLinksList();
})

})
/// <reference types="cypress" />

import PremiumMonthlyPage from "../../pages/astrology_pages/premiumMonthlyPage";

describe('Purchase report', function() {
    const premiumMonthlyPage = new PremiumMonthlyPage();

    beforeEach(() => {
        premiumMonthlyPage.visitProductPage();
        cy.viewport(1366, 768);

    })

it('Confirm monthly title shop page', function() {
    premiumMonthlyPage.ProductTitleVerification();
})

it('Purchase monthly report (one time)', function() {
    premiumMonthlyPage.monthlyHoroscopePurchase();
})
})

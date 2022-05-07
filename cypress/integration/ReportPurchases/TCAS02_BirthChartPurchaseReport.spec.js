/// <reference types="cypress" />

import ShopBirthNatalChart from "../../pages/astrology_pages/shopBirthNatalChart";

describe('Purchase birth chart report', function() {
    const shopBirthNatalChart = new ShopBirthNatalChart();

    beforeEach(() => {
        shopBirthNatalChart.visitProductPage();
        cy.viewport(1366, 768);

    })

    it('Confirm birth chart title shop page', function() {
        shopBirthNatalChart.ProductTitleVerification();
    })

})
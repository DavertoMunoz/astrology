/// <reference types="cypress" />

import innerHoroPage_Locators from "../../support/innerHoroPage_Locators";

class InnerHoroPage {

    visitInnerHoroPage() {
        cy.visit(Cypress.env('dailyInnerSignPageProd'));
    }

    verifyWeeklyHoroscopesURL() {

        //click through all the days and assert elements and URL

    }
}

export default InnerHoroPage;
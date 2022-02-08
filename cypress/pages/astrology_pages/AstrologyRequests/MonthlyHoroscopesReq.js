/// <reference types="cypress" />

class MonthlyHoroscopesReq {
    assertMonthlyHoroscopeReq() {

        cy.visit(Cypress.env('prodBaseURL')); // https://www.astrology.com
    
        cy.request('/us/horoscope/index-monthly.aspx').then((response) => {
            expect(response.status).to.eq(200);
        })
        cy.request('/us/horoscope/index-monthly-love.aspx').then((response) => {
            expect(response.status).to.eq(200);
        })
        cy.request('/us/horoscope/index-monthly-work.aspx').then((response) => {
            expect(response.status).to.eq(200);
        })
        cy.request('/us/horoscope/index-monthly-dating.aspx').then((response) => {
            expect(response.status).to.eq(200);
        })

        // ARIES
    cy.request('/horoscope/monthly-overview/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Monthly Love

    cy.request('/horoscope/weekly-love/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // Weekly Work
    cy.request('/horoscope/weekly-work/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
    // Monthly Dating
    cy.request('/horoscope/weekly-dating/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    

    }
}

export default MonthlyHoroscopesReq;
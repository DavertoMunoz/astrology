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

    cy.request('/horoscope/monthly-love/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // Weekly Work
    cy.request('/horoscope/monthly-work/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
    // Monthly Dating
    cy.request('/horoscope/monthly-dating/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // taurus
    cy.request('/horoscope/monthly-overview/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Monthly Love

    cy.request('/horoscope/monthly-love/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // Weekly Work
    cy.request('/horoscope/monthly-work/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
    // Monthly Dating
    cy.request('/horoscope/monthly-dating/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // gemini
    cy.request('/horoscope/monthly-overview/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Monthly Love

    cy.request('/horoscope/monthly-love/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // Monhtly Work
    cy.request('/horoscope/monthly-work/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
    // Monthly Dating
    cy.request('/horoscope/monthly-dating/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // cancer
    cy.request('/horoscope/monthly-overview/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Monthly Love

    cy.request('/horoscope/monthly-love/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // Monhtly Work
    cy.request('/horoscope/monthly-work/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
    // Monthly Dating
    cy.request('/horoscope/monthly-dating/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // leo
    cy.request('/horoscope/monthly-overview/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Monthly Love

    cy.request('/horoscope/monthly-love/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // Monhtly Work
    cy.request('/horoscope/monthly-work/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
    // Monthly Dating
    cy.request('/horoscope/monthly-dating/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // virgo
    cy.request('/horoscope/monthly-overview/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Monthly Love

    cy.request('/horoscope/monthly-love/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // Monhtly Work
    cy.request('/horoscope/monthly-work/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
    // Monthly Dating
    cy.request('/horoscope/monthly-dating/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // libra
    cy.request('/horoscope/monthly-overview/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Monthly Love

    cy.request('/horoscope/monthly-love/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // Monhtly Work
    cy.request('/horoscope/monthly-work/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
    // Monthly Dating
    cy.request('/horoscope/monthly-dating/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // scorpio
    cy.request('/horoscope/monthly-overview/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Monthly Love

    cy.request('/horoscope/monthly-love/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // Monhtly Work
    cy.request('/horoscope/monthly-work/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
    // Monthly Dating
    cy.request('/horoscope/monthly-dating/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // sagittarius
    cy.request('/horoscope/monthly-overview/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Monthly Love

    cy.request('/horoscope/monthly-love/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // Monhtly Work
    cy.request('/horoscope/monthly-work/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
    // Monthly Dating
    cy.request('/horoscope/monthly-dating/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // capricorn
    cy.request('/horoscope/monthly-overview/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Monthly Love

    cy.request('/horoscope/monthly-love/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // Monhtly Work
    cy.request('/horoscope/monthly-work/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
    // Monthly Dating
    cy.request('/horoscope/monthly-dating/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // aquarius
    cy.request('/horoscope/monthly-overview/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Monthly Love

    cy.request('/horoscope/monthly-love/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // Monhtly Work
    cy.request('/horoscope/monthly-work/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
    // Monthly Dating
    cy.request('/horoscope/monthly-dating/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // pisces
    cy.request('/horoscope/monthly-overview/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Monthly Love

    cy.request('/horoscope/monthly-love/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // Monhtly Work
    cy.request('/horoscope/monthly-work/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
    // Monthly Dating
    cy.request('/horoscope/monthly-dating/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    

    }
}

export default MonthlyHoroscopesReq;



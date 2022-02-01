/// <reference types="cypress" />

class WeeklyHoroscopesReq {

    // visitHoroscopePage() {

    //     cy.visit(Cypress.env('horoscopePage'));
        
    //     }


assertWeeklyHoroscope() {
    cy.visit(Cypress.env('prodBaseURL')); // https://www.astrology.com

    cy.request('/us/horoscope/index-weekly.aspx').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/us/horoscope/index-weekly-love.aspx').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/us/horoscope/index-weekly-work.aspx').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/us/horoscope/index-weekly-dating.aspx').then((response) => {
        expect(response.status).to.eq(200);
    })

    // ARIES
    cy.request('/horoscope/weekly-overview/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('horoscope/weekly-overview/last-week/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-overview/next-week/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Love

    cy.request('/horoscope/weekly-love/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/last-week/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/next-week/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Work
    cy.request('/horoscope/weekly-work/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/last-week/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/next-week/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Dating
    cy.request('/horoscope/weekly-dating/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // TAURUS
    cy.request('/horoscope/weekly-overview/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('horoscope/weekly-overview/last-week/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-overview/next-week/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Love

    cy.request('/horoscope/weekly-love/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/last-week/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/next-week/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Work
    cy.request('/horoscope/weekly-work/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/last-week/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/next-week/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Dating
    cy.request('/horoscope/weekly-dating/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // GEMINI
    cy.request('/horoscope/weekly-overview/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('horoscope/weekly-overview/last-week/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-overview/next-week/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Love

    cy.request('/horoscope/weekly-love/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/last-week/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/next-week/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Work
    cy.request('/horoscope/weekly-work/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/last-week/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/next-week/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Dating
    cy.request('/horoscope/weekly-dating/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // CANCER
    cy.request('/horoscope/weekly-overview/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('horoscope/weekly-overview/last-week/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-overview/next-week/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Love

    cy.request('/horoscope/weekly-love/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/last-week/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/next-week/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Work
    cy.request('/horoscope/weekly-work/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/last-week/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/next-week/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Dating
    cy.request('/horoscope/weekly-dating/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // LEO
    cy.request('/horoscope/weekly-overview/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('horoscope/weekly-overview/last-week/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-overview/next-week/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Love

    cy.request('/horoscope/weekly-love/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/last-week/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/next-week/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Work
    cy.request('/horoscope/weekly-work/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/last-week/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/next-week/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Dating
    cy.request('/horoscope/weekly-dating/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // VIRGO
    cy.request('/horoscope/weekly-overview/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('horoscope/weekly-overview/last-week/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-overview/next-week/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Love

    cy.request('/horoscope/weekly-love/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/last-week/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/next-week/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Work
    cy.request('/horoscope/weekly-work/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/last-week/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/next-week/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Dating
    cy.request('/horoscope/weekly-dating/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // LIBRA
    cy.request('/horoscope/weekly-overview/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('horoscope/weekly-overview/last-week/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-overview/next-week/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Love

    cy.request('/horoscope/weekly-love/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/last-week/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/next-week/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Work
    cy.request('/horoscope/weekly-work/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/last-week/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/next-week/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Dating
    cy.request('/horoscope/weekly-dating/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // SCORPIO
    cy.request('/horoscope/weekly-overview/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('horoscope/weekly-overview/last-week/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-overview/next-week/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Love

    cy.request('/horoscope/weekly-love/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/last-week/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/next-week/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Work
    cy.request('/horoscope/weekly-work/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/last-week/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/next-week/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Dating
    cy.request('/horoscope/weekly-dating/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // SAGITTARIUS
    cy.request('/horoscope/weekly-overview/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('horoscope/weekly-overview/last-week/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-overview/next-week/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Love

    cy.request('/horoscope/weekly-love/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/last-week/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/next-week/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Work
    cy.request('/horoscope/weekly-work/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/last-week/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/next-week/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Dating
    cy.request('/horoscope/weekly-dating/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // CAPRICORN
    cy.request('/horoscope/weekly-overview/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('horoscope/weekly-overview/last-week/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-overview/next-week/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Love

    cy.request('/horoscope/weekly-love/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/last-week/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/next-week/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Work
    cy.request('/horoscope/weekly-work/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/last-week/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/next-week/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Dating
    cy.request('/horoscope/weekly-dating/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // AQUARIUS
    cy.request('/horoscope/weekly-overview/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('horoscope/weekly-overview/last-week/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-overview/next-week/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Love

    cy.request('/horoscope/weekly-love/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/last-week/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/next-week/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Work
    cy.request('/horoscope/weekly-work/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/last-week/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/next-week/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Dating
    cy.request('/horoscope/weekly-dating/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // PISCES
    cy.request('/horoscope/weekly-overview/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('horoscope/weekly-overview/last-week/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-overview/next-week/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Love

    cy.request('/horoscope/weekly-love/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/last-week/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-love/next-week/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Work
    cy.request('/horoscope/weekly-work/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/last-week/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-work/next-week/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // Weekly Dating
    cy.request('/horoscope/weekly-dating/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/weekly-dating/last-week/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
}
}

export default WeeklyHoroscopesReq;
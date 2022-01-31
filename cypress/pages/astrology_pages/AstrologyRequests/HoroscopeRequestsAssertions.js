/// <reference types="cypress" />

class AstrologyHoroscopePages {

    // visitHoroscopePage() {

    //     cy.visit(Cypress.env('horoscopePage'));
        
    //     }


assertHoroscopePagesReq() {
    cy.visit(Cypress.env('prodBaseURL')); // https://www.astrology.com

    cy.request('/horoscope/daily.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // ARIES

    cy.request('/horoscope/daily/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/aries.html#Sunday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/aries.html#Monday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/aries.html#Tuesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/aries.html#Wednesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/aries.html#Thursday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/aries.html#Friday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/aries.html#Saturday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/yesterday/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/tomorrow/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    cy.request('/horoscope/daily-love/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    cy.request('/horoscope/daily-work/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    cy.request('/horoscope/daily-dating/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    cy.request('/horoscope/daily-bonus/aries.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    // TAURUS

    cy.request('/horoscope/daily/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/taurus.html#Sunday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/taurus.html#Monday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/taurus.html#Tuesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/taurus.html#Wednesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/taurus.html#Thursday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/taurus.html#Friday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/taurus.html#Saturday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/yesterday/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/tomorrow/taurus.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // GEMINI

    cy.request('/horoscope/daily/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    cy.request('/horoscope/daily/gemini.html#Sunday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/gemini.html#Monday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/gemini.html#Tuesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/gemini.html#Wednesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/gemini.html#Thursday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/gemini.html#Friday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/gemini.html#Saturday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/yesterday/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/tomorrow/gemini.html').then((response) => {
        expect(response.status).to.eq(200);
    })


    // CANCER 
    cy.request('/horoscope/daily/cancer.html').then((response) => {
        expect(response.status).to.eq(200);

    cy.request('/horoscope/daily/cancer.html#Sunday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/cancer.html#Monday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/cancer.html#Tuesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/cancer.html#Wednesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/cancer.html#Thursday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/cancer.html#Friday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/cancer.html#Saturday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/yesterday/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/tomorrow/cancer.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // LEO  

    })
    cy.request('/horoscope/daily/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    cy.request('/horoscope/daily/leo.html#Sunday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/leo.html#Monday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/leo.html#Tuesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/leo.html#Wednesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/leo.html#Thursday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/leo.html#Friday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/leo.html#Saturday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/yesterday/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/tomorrow/leo.html').then((response) => {
        expect(response.status).to.eq(200);
    })


    // VIRGO
    cy.request('/horoscope/daily/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    cy.request('/horoscope/daily/virgo.html#Sunday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/virgo.html#Monday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/virgo.html#Tuesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/virgo.html#Wednesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/virgo.html#Thursday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/virgo.html#Friday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/virgo.html#Saturday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/yesterday/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/tomorrow/virgo.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // LIBRA
    cy.request('/horoscope/daily/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    cy.request('/horoscope/daily/libra.html#Sunday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/libra.html#Monday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/libra.html#Tuesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/libra.html#Wednesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/libra.html#Thursday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/libra.html#Friday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/libra.html#Saturday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/yesterday/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/tomorrow/libra.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // SCORPIO
    cy.request('/horoscope/daily/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    cy.request('/horoscope/daily/scorpio.html#Sunday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/scorpio.html#Monday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/scorpio.html#Tuesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/scorpio.html#Wednesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/scorpio.html#Thursday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/scorpio.html#Friday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/scorpio.html#Saturday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/yesterday/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/tomorrow/scorpio.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // SAGITTARIUS
    cy.request('/horoscope/daily/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    cy.request('/horoscope/daily/sagittarius.html#Sunday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/sagittarius.html#Monday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/sagittarius.html#Tuesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/sagittarius.html#Wednesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/sagittarius.html#Thursday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/sagittarius.html#Friday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/sagittarius.html#Saturday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/yesterday/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/tomorrow/sagittarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // CAPRICORN
    cy.request('/horoscope/daily/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    cy.request('/horoscope/daily/capricorn.html#Sunday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/capricorn.html#Monday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/capricorn.html#Tuesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/capricorn.html#Wednesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/capricorn.html#Thursday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/capricorn.html#Friday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/capricorn.html#Saturday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/yesterday/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/tomorrow/capricorn.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // AQUARIUS
    cy.request('/horoscope/daily/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    cy.request('/horoscope/daily/aquarius.html#Sunday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/aquarius.html#Monday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/aquarius.html#Tuesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/aquarius.html#Wednesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/aquarius.html#Thursday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/aquarius.html#Friday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/aquarius.html#Saturday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/yesterday/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/tomorrow/aquarius.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    // PISCES
    cy.request('/horoscope/daily/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })

    cy.request('/horoscope/daily/pisces.html#Sunday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/pisces.html#Monday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/pisces.html#Tuesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/pisces.html#Wednesday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/pisces.html#Thursday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/pisces.html#Friday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/pisces.html#Saturday').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/yesterday/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    cy.request('/horoscope/daily/tomorrow/pisces.html').then((response) => {
        expect(response.status).to.eq(200);
    })
    
}
}

export default AstrologyHoroscopePages;
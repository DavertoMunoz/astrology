/// <reference types="cypress" />

import AstrologyHoroscopePages from "../../pages/astrology_pages/AstrologyRequests/HoroscopeRequestsAssertions";

describe('Astrology page links requests', function() {
    const astrologyHoroscopePages = new AstrologyHoroscopePages();


it('Horoscope pages requests', function() {
    astrologyHoroscopePages.assertHoroscopePagesReq();
})

})

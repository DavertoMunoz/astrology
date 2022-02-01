/// <reference types="cypress" />

import WeeklyHoroscopesReq from "../../pages/astrology_pages/AstrologyRequests/WeeklyHoroscopesReq";

describe('Astrology weekly links requests for all signs', function() {
    const weeklyHoroscopesReq = new WeeklyHoroscopesReq();

it('Horoscope pages requests', function() {
    weeklyHoroscopesReq.assertWeeklyHoroscope();
})

})

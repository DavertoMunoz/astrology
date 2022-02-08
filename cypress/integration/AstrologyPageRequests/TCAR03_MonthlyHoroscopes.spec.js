/// <reference types="cypress" />

import MonthlyHoroscopesReq from "../../pages/astrology_pages/AstrologyRequests/MonthlyHoroscopesReq";

describe('Astrology monhtly links requests for all signs', function() {
    const monthlyHoroscopeReq = new MonthlyHoroscopesReq();

it('Horoscope monthly pages requests', function() {
    monthlyHoroscopeReq.assertMonthlyHoroscopeReq();
})

})

/// <reference types="cypress" />

import ChineseHomepage from "../pages/astrology_pages/chineseHomePage";

describe('Chinese page elements navigation asserions', function() {
    const chineseHomepage = new ChineseHomepage();

    beforeEach(() => {
        chineseHomepage.visitChineseHomepage();
        cy.viewport(1366, 768);
})

it('Assert chinese main card info', function() {
    chineseHomepage.verifyChineseSignCards();
})

it('Assert carousel cards contents', function() {
    chineseHomepage.verifyCarouselcontents();
})

it('Verify main text content', function() {
    chineseHomepage.verifyTextContent();
})
it('Recommended reports verification', function() {
    chineseHomepage.recommendedReportChineseIndex();
})
it("Chinese ads, banners and link list", function() {
    chineseHomepage.ChineseMoreHoroscopesLinkList();
})
})
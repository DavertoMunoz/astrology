/// <reference types="cypress" />

import SanityLinksPages from "../pages/astrology_pages/sanityLinksPages";

describe('Sanity test for pages on A.com', function() {
    const sanityLinksPages = new SanityLinksPages();

it('Yes no Tarot page, elements and functionality', function() {
    sanityLinksPages.assertYesNoTarotPage();
    sanityLinksPages.verifyYesNoTarotLandingPagePickCard();
    sanityLinksPages.verifyRecommendedReports();
    sanityLinksPages.verifyPopularWidgets();
    sanityLinksPages.adsVisibility();
})



})
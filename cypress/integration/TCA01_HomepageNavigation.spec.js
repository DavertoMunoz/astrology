/// <reference types="cypress" />

import Homepage from '/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/pages/astrology_pages/homepage.js';


describe('astroHomepageNav', function() {
    const homepage=new Homepage();

// beforeEach(() => {
//     homepage.visitHomepage()
// })

it('Confirm all sign icons are loading correctly', function()  {
    homepage.visitHomepage()
    homepage.signIconsConfirmation();

})
    
it('Confirm all images from Horoscope section are visible', () => {
    homepage.visitHomepage()
    homepage.horoscopeSectionImages();

})

it('verify Horoscope section images', () =>  {
    homepage.visitHomepage()
    homepage.horoscopeImagesIcons();

})

// PENDIENTE DE CHECAR EL DATE PICKER
it('verify Learn section images', () =>  {
    homepage.visitHomepage()
    homepage.learnSectionImages();

})

it('verify Tarot section elements', () => {
    homepage.visitHomepage()
    homepage.confirmTarotSectionElements();
})

it('verify Shop section elements', () => {
    homepage.visitHomepage()
    homepage.confirmShopSectionElements();

})

it('verify Compatibility section elements', () => {
    homepage.visitHomepage()
    homepage.confirmCompatibilitySectionElements();

})

it('Confirm miscellaneous elements', () => {
    homepage.visitHomepage()
    homepage.confirmMiscElements();

})

it('Open a.com homepage and confirm main elements', function() {
    homepage.visitHomepage()
    homepage.confirmMainElements();

})
})
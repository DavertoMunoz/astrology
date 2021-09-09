/// <reference types="cypress" />

import Homepage from '/Users/dmunoz/Documents/Cypress_Ingenio/Astrology/cypress/pages/astrology_pages/homepage.js';


describe('astroHomepageNav', function() {
    const homepage=new Homepage();

beforeEach(() => {
    homepage.visitHomepage()
})

it('Open a.com homepage and confirm main elements', function() {
    homepage.confirmMainElements()

})

it('Confirm all sign icons are loading correctly', function()  {
    homepage.signIconsConfirmation();

})
    
it('Confirm all images from Horoscope section are visible', () => {
    homepage.horoscopeSectionImages()

})

it('verify Horoscope section images', () =>  {
    homepage.horoscopeImagesIcons()

})

// PENDIENTE DE CHECAR EL DATE PICKER
it('verify Learn section images', () =>  {
    homepage.learnSectionImages()

})

it('verify Tarot section elements', () => {
    homepage.confirmTarotSectionElements()
})

it('verify Shop section elements', () => {
     homepage.confirmShopSectionElements()

})

it('verify Compatibility section elements', () => {
    homepage.confirmCompatibilitySectionElements()

})

it('Confirm miscellaneous elements', () => {
    homepage.confirmMiscElements

})
})
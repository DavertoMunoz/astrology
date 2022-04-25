/// <reference types="cypress" />

export default {

    productTitle: '.product_title',
    productGallery: '.woocommerce-product-gallery',
    galleryMainImage: '.flex-viewport',
    galleryFirstImage: '.woocommerce-product-gallery > ol > li:nth-child(1) > img',
    gallerySecondImage: '.woocommerce-product-gallery > ol > li:nth-child(2) > img',
    galleryThirdImage: '.woocommerce-product-gallery > ol > li:nth-child(3) > img',
    galleryFourthImage: '.woocommerce-product-gallery > ol > li:nth-child(4) > img',
    galleryFifthImage: '.woocommerce-product-gallery > ol > li:nth-child(5) > img',

    firstNameInput: '#first-name',
    genderSelector: '.select > .field-skin', // Use cy.get('genderSelector').select('Female') or 'Male
    dateOfBirthSelector: '#date-of-birth',
    timeOfBirthSelector: '#time-of-birth',
    birthLocationSelector: '#birth-location',
    emailInput: '#email',
    addToCartButton: "[name='add-to-cart']",
    oneTimePurchaseSelector: '.one-time-option > label > input',
    subscriptionPurchaseSelector: '.subscription-option > label > input',



}
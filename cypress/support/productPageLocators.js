/// <reference types="cypress" />

export default {

    mainProductEntryTitle: '.entry-title',
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

    cartPageProductAdded: '.woocommerce-message',
    cartPageContinueShoppingButton: '.woocommerce-message > div > .button',
    cartPageRemoveProductX: '.remove', 
    cartPageCouponField: '#coupon_code',
    cartPageApplyCoupon: '.coupon > .button',
    cartPageCheckoutButton: '.checkout-button',
    // Coupon code - 3KR9NFWR
    cartPageIconCheck: 'icon-check-circle',
    cartPageMessageConfirmation: '.woocommerce-message > div', // Coupon code applied successfully.

    checkoutPageCountrySelector: 'select2-selection__rendered',
    checkoutPageBillingEmail: '#billing_email',
    checkoutPagePasswordField: '#account_password',
    checkoutPageTermsCheckBox: '.woocommerce-terms-and-conditions-checkbox-text',
    checkoutPageBuyNowButton: '#place_order',

    checkoutPageLoginLink: '.showlogin',
    checkoutPageCreateAccountBox: 'createaccount',

    confirmPageReportThumb: '.attachment-woocommerce_thumbnail',
    confirmPageReadReportLink: '.read_report',
    confirmPageOrderOverview: '.woocommerce-order-overview',
    confirmPageOrderNotice: '.woocommerce-notice',



}
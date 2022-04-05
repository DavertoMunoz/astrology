/// <reference types="cypress" />


export default {

    // Shop - product
    itemAddonTitle: '.item_title', // This is for the add on product
    // productEntryTitle: '.entry_title', // This is for the main product title
    aPlusMainTitle: '.product_title', // This is for the Astrology+ subscription title main page 
    mainProductTitle: '.entry-title',
    

    // Page titles and subtitle
    pageSubtitle: '.page__subtitle',
    pageTitle: ".page__title",

    // Sign picker widget
    signPickerWidget: '.sign-picker-widget',

    ariesCard: '.libra',
    taurusCard: '.taurus',
    geminiCard: '.gemini',
    cancerCard: '.cancer',
    leoCard: '.leo',
    virgoCard: '.virgo',
    libraCard: '.libra',
    scorpioCard: '.scorpio',
    sagittariusCard: '.sagittarius',
    capricornCard: '.capricorn',
    auqariusCard: '.aquarius',
    piscesCard: '.pisces',

    // Icon signs locators
    ariesIcon: '.icon-aries',
    taurusIcon: '.icon-taurus',
    geminiIcon: '.icon-gemini',
    cancerIcon: '.icon-cancer',
    leoIcon: '.icon-leo',
    virgoIcon: '.icon-virgo',
    libraIcon: '.icon-libra',
    scorpioIcon: '.icon-scorpio',
    saggIcon: '.icon-sagittarius',
    capricornIcon: '.icon-capricorn',
    aquariusIcon: '.icon-aquarius',
    piscesIcon: '.icon-pisces',

    // Sign titles
    ariesName: '.aries > .title-3',
    taurusName: '.taurus > .title-3',
    geminiName: '.gemini > .title-3',
    cancerName: '.cancer > .title-3',
    leoName: '.leo > .title-3',
    virgoName: '.virgo > .title-3',
    libraName: '.libra > .title-3',
    scorpioName: '.scorpio > .title-3',
    sagittariusName: '.sagittarius > .title-3',
    capricornName: '.capricorn > .title-3',
    aquariusName: '.aquarius > .title-3',
    piscesName: '.pisces > .title-3',

    // Sign dates    
    ariesDate: '.aries > .sign-date', // Mar 21 - Apr 19
    taurusDate: '.taurus > .sign-date', // Apr 20 - May 20
    geminiDate: '.gemini > .sign-date', // May 21 - Jun 20
    cancerDate: '.cancer > .sign-date', // Jun 21 - Jul 22
    leoDate: '.leo > .sign-date', // Aug 23 - Aug 22
    virgoDate: '.virgo > .sign-date', // Aug 23 - Sep 22
    libraDate: '.libra > .sign-date', // Sep 23 - Oct 22
    scorpioDate: '.scorpio > .sign-date', // Oct 23 - Nov 21
    sagittariusDate: '.sagittarius > .sign-date', // Nov 22 - Dec 21
    capricornDate: '.capricorn > .sign-date', // Dec 22 - Jan 19
    aquariusDate: '.aquarius > .sign-date', // Jan 20 - Feb 18
    piscesDate: '.pisces > .sign-date', // Feb 19 - Mar 20

    // Index-Tempo title "The sky..."
    theSkyTitle: '.snippet > .section__title', // Works for daily, weekly, monthly and yearly

    firstContentBody: '.snippet__body > p', // first paragraph
    // continueReadingLink:  // use cy.contains('Continue Reading').click() // Click on first el containing 'Continue Reading'

    adCardJoinplusSidebar: '.ad-card-join-aplus', // A+ card sidebar
    adVideoSidebar: '#d_flexrec_t_sky_m_none_1',
    carouselSectionTitle: '.carousel-container > .section__title',

    
    MoreHorocarouselPreviousArrow: '.more-horoscopes-carousel > .carousel-container > .main-carousel > .previous',
    MoreHorocarouselNextArrow: '.more-horoscopes-carousel > .carousel-container > .main-carousel > .next',

    // Carousel tempo horoscope cards
    cardDaily: '.card--daily',
    cardWeekly: '.card--weekly',
    cardMonthly: '.card--monthly',
    cardYearly: '.card--yearly',
    cardChinese: '.card--chinese',
    cardLove: '.card--love',
    cardWork: '.card--work',
    cardDating: '.card--dating',

    // Carousel tempo card titles
    cardDailyTitle: '.card--daily .card__title',
    cardWeeklyTitle: '.card--weekly .card__title',    
    cardMonthlyTitle: '.card--love .card__title',
    cardYearlyTitle: '.card--yearly .card__title',
    cardChineseTitle: '.card--chinese .card__title',
    cardLoveTitle: '.card--love .card__title',
    cardWorkTitle: '.card--work .card__title',
    cardDatingTitle: '.card--dating .card__title',
    

    cardDailyReadMore: '.card--daily .card__cta',
    cardWeeklyReadMore: '.card--weekly .card__cta',
    cardYearlyReadMore: '.card--yearly .card__cta',
    cardChineseReadMore: '.card--chinese .card__cta',
    cardLoveReadMore: '.card--love .card__cta',
    cardWorkReadMore: '.card--work .card__cta',
    cardDatingReadMore: '.card--dating .card__cta',

    loveHeaderLinkList: '.love > .column__header',
    loveLinkList: '.love > .links',

    workHeaderLinkList: '.love > .column__header',
    workLinkList: '.love > .links',

    datingHeaderLinkList: '.dating > .column__header',
    datingLinkList: '.love > .links',

    // // Recommended reports images - STORE section
    // Adjust the name of the report depending of the location

    recommendedNextArrow: ".mt-1 .next",
    recommendedPreviousArrow: ".mt-1 .previous",


    firstSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(1)',
    secondSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(2)', 
    thirdSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(3)', 
    fourthSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(4)', 
    fifthSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(5)', 
    sixthSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(6)', 
    seventhSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(7)',
    eigthSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(8)',

    // Use these locators to confirm the card titles, depending of the page they can change

    firstSliderReportTitle: '.mt-1 .flickity-slider > div:nth-of-type(1) .card__title',
    secondSliderReportTitle: '.mt-1 .flickity-slider > div:nth-of-type(2) .card__title',
    thirdsSliderReportTitle: '.mt-1 .flickity-slider > div:nth-of-type(3) .card__title',
    fourthSliderReportTitle: '.mt-1 .flickity-slider > div:nth-of-type(4) .card__title',
    fifthSliderReportTitle: '.mt-1 .flickity-slider > div:nth-of-type(5) .card__title',
    sixthSliderReportTitle: '.mt-1 .flickity-slider > div:nth-of-type(6) .card__title',
    seventhSliderReportTitle: '.mt-1 .flickity-slider > div:nth-of-type(7) .card__title',
    eightSliderReportTitle: '.mt-1 .flickity-slider > div:nth-of-type(8) .card__title',

    // Complete card
    firstSliderCard: ".mt-1 div:nth-of-type(1) > .card",
    secondSliderCard: ".mt-1 div:nth-of-type(2) > .card",
    thirdSliderCard: ".mt-1 div:nth-of-type(3) > .card",
    fourthSliderCard: ".mt-1 div:nth-of-type(4) > .card",
    fifthSliderCard: ".mt-1 div:nth-of-type(5) > .card",
    sixthSliderCard: ".mt-1 div:nth-of-type(6) > .card",
    seventhSliderCard: ".mt-1 div:nth-of-type(7) > .card",
    eighthSliderCard: ".mt-1 div:nth-of-type(8) > .card",


    

    // Link title to the store
    firstSliderLinkTitle: '.mt-1 div:nth-of-type(1) > .card > div > h5',
    secondSliderLinkTitle: '.mt-1 div:nth-of-type(2) > .card > div > h5',//'.mt-1 div:nth-of-type(2) > .card > div:nth-child(2) > h5',
    thirdSliderLinkTitle: '.mt-1 div:nth-of-type(3) > .card > div > h5',
    fourthSliderLinkTitle: '.mt-1 div:nth-of-type(4) > .card > div > h5',
    fifthSliderLinkTitle: '.mt-1 div:nth-of-type(5) > .card > div > h5',
    sixthSliderLinkTitle: '.mt-1 div:nth-of-type(6) > .card > div > h5',

    // Most Popular Widgets on Astrology slides
    mostPopularNextArrow: ".most-popular-on-acom-carousel .next",
    mostPopularPreviousArrow: ".most-popular-on-acom-carousel .previous",

    // 

    mostPopYesNoTarotTitle: ".quartz",
    mostPopYesNoCardNum1: ".card-1",
    mostPopYesNoCardNum2: ".card-2",
    mostPopYesNoCardNum3: ".card-3",
    mostPopYesNoCardNum4: ".card-4",
    mostPopYesNoCardNum5: ".card-5",
    mostPopYesNoCardNum6: ".card-6",
    


    mostPopfreeBCTitle: "#title_BC",


    mostPopKeenWidget: ".most-popular-on-acom-carousel div:nth-of-type(3) .tag",
    keenMapMarker: ".icon-psychic-hub",
    keenTalkPsychicBtn: ".module-keen-talk-with-psychic > .btn",

    loveCompWidgetTitle: "#title",
    loveCompWidgetFirstSign: "#first-sign",
    loveCompWidgetSecondSign: "#second-sign",

     // Ask the genie
    askTheGenieTitle: ".is-selected > #module-content-parent > .tag",


    // Ad banner bottom
    adBottomBanner: "#d_banner_t_banner_m_none_1",
    postQuestionBtn: "[name='genie_module'] > .btn",

    // Ad banner top
    adTopNavBar: "#d_banner_t_banner_m_tinybanner_1",

    // Ad sticky right rail
    adStickyRightRail: ".sticky",

    // Small banner below recommended reports
    adBannerBelowReports: "#skm-boomerang-el-2-1 > div",

}
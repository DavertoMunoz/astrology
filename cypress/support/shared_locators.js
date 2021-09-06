/// <reference types="cypress" />


export default {

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
    carouselPreviousArrow: '.previous',
    carouselNextArrow: '.next',

    // Carousel tempo horoscope cards
    cardDaily: '.card--daily',
    cardWeekly: '.card--weekly',
    cardMonthly: '.card--monthly',
    cardYearly: '.card--yearly',
    cardChinese: '.card--chinese',
    cardLove: '.card--love',
    cardWork: '.card--work',
    cardDating: '.card--dating',
    

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


    // Ad banner bottom
    adBottomBanner: '#d_banner_t_banner_m_none_1'
}
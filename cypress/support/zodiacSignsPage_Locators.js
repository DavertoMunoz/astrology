/// <reference types="cypress" />

import shared_locators from "./shared_locators"

export default {
    // zodiac signs subtitle
    zodiacSignsSubtitleText: shared_locators.pageSubtitle,

    // Zodiac sign icon images
    ariesCircleIcon: ".icon-sign-aries",
    taurusCircleIcon: ".icon-sign-taurus",
    geminiCircleIcon: ".icon-sign-gemini",
    cancerCircleIcon: ".icon-sign-cancer",
    leoCircleIcon: ".icon-sign-leo",
    virgoCircleIcon: ".icon-sign-virgo",
    libraCircleIcon: ".icon-sign-libra",
    scorpioCircleIcon: ".icon-sign-scorpio",
    sagittariusCircleIcon: ".icon-sign-sagittarius",
    capricornCircleIcon: ".icon-sign-capricorn",
    aquariusCirceleIcon: ".icon-sign-aquarius",
    piscesCircleIcon: ".icon-sign-pisces",
    
    // Sign cards (icon, name and date with link to click)
    ariesSignCard: ".aries.sign-card",
    taurusSignCard: ".taurus.sign-card",
    geminiSignCard: ".gemini.sign-card",
    cancerSignCard: ".cancer.sign-card",
    leoSignCard: ".leo.sign-card",
    virgoSignCard: ".virgo.sign-card",
    libraSignCard: ".libra.sign-card",
    scorpioSignCard: ".scorpio.sign-card",
    sagittariusSignCard: ".sagittarius.sign-card",
    capricornSignCard: ".capricorn.sign-card",
    aquariusSignCard: ".aquarius.sign-card",
    piscesSignCard: ".pisces.sign-card",

    // Recommended Reports slides and links

    firstSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(1)', // Birth horoscope and natal chart
    secondSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(2)', // Premium monthly horoscope
    thirdSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(3)', // premium annual horoscope
    fourthSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(4)', // Annual numerology
    fifthSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(5)', // Natal Moon report
    sixthSliderReportImg: '.recommended-reports-carousel > div > div > div > div > div:nth-child(6)', // Annual vedic horoscope
    seventhSliderReportImg: ".recommended-reports-carousel > div > div > div > div > div:nth-child(7)", // 12 month personal transits
    eightSliderReportImg: ".recommended-reports-carousel > div > div > div > div > div:nth-child(8)" // career report

    // Most Popular on Astrology slides on shared locators file 
        


}


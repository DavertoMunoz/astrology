/// <reference types="cypress" />



it('Test new Free Birth Chart page', function() {



    cy.visit('https://shop-stage.astrology.com/birth-chart/');
    cy.get('.alpha').contains('Birth Chart Calculator');
    cy.get('.trim-content > :nth-child(3)').contains('What Does Your Birth Chart Tell You?');
    // image loading
    cy.get("[alt='sample birth chart']").should('be.visible');
    // Sub header
    //cy.get('.trim-content > h3').should('contains', 'Your birth chart, also known as an astrology or natal chart');
    cy.get('#TermOfServicesCheckBox').click();
    cy.get('#first-name').type('Wayne Godot');
    cy.get('#gender-selector').select('Male');
    cy.get('#date-of-birth').type('08/05/1980');
    cy.get('#time-of-birth').type('12:30');
    cy.get('#birth-location').type('Los ');
    cy.wait(300);
    cy.get('#birth-location').type('{downarrow}');
    cy.get('.form__media > img').click();
    cy.get('#birth-location').type('{downarrow}');
    cy.get('#birth-location').type('{downarrow}').click();
    cy.get('#email').type('cypresstest03@yopmail.com');
    cy.get('.form-skin > [type="submit"]').click();
    cy.wait(300);
    cy.url().should('include', 'https://reports.astrology.com/v1/reports/');
    /// New assertion added here
    cy.get("[src='https://reports.astrology.com/assets/images/report-StEdNa-header.jpg']").should('be.visible');
    
})
/// <reference types="Cypress" />

var HomePage = function(){
    // var url = '/'
    // var title = 'Home | Trello'
}

HomePage.prototype = Object.create({}, {

    navigationBar: { get: ()=> { return cy.get('.home-left-sidebar-container ul li > a') }},

    logOut: {value: ()=> {
        cy.visit('/logged-out')
        .url().should('be.equal', 'https://trello.com/logged-out')
        .get('h1').should('have.text', 'Thanks for using Trello.')
    }}

})

module.exports = HomePage
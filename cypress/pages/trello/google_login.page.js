/// <reference types="Cypress" />
var HomePage = require('../../pages/trello/home.page')

var GoogleLoginPage = function(){
}

GoogleLoginPage.prototype = Object.create({},{
    emailField: {get: function(){ return cy.get('input[name="identifier"]') }},
    passwordField: {get: function(){ return cy.get('input[name="password"]') }},

    loginWith: { value (user, password) {
        this.emailField.type(user).type('{enter}')
        this.passwordField.should('be.visible')
        .type(password).type('{enter}')
        return new HomePage()
    }}


})

module.exports = GoogleLoginPage
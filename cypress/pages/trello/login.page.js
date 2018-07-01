
/// <reference types="Cypress" />

var GoogleLoginPage = require('./../../pages/trello/google_login.page')
var HomePage = require('../../pages/trello/home.page')

var LoginPage = function(){
    // var url = '/login'
    // var title = 'Log in to Trello'
}

LoginPage.prototype = Object.create({},{
    loginForm: {get: function(){ return cy.get('#login-form') }},
    emailField: {get: function(){ return cy.get('#user') }},
    passwordField: {get: function(){ return cy.get('#password') }},
    submitButton: {get: function(){ return cy.get('#login') }},
    googleLoginButton: {get: ()=>{ return cy.get('#google-link') }},
    ssoLoginButton: { get: ()=> { return cy.get('a[href*="/login/sso"]') }},
    forgotPasswordLink: { get: ()=> { return cy.get('a[href*="/forgot"]') }},
    
    open: {value: function(){
        cy.visit('/login')
        .title().should('be.equal', 'Log in to Trello')
        return this
    }},

    loginWith: { value (user, password) {
        this.emailField.type(user)
        this.passwordField.scrollIntoView().type(password)
        this.loginForm.submit()
        return new HomePage()
    }},

    loginWithGoogle: { value (user, password) {
        this.googleLoginButton.click()
        var googlePage = new GoogleLoginPage()
        googlePage.emailField.should('be.visible')
        return googlePage.loginWith(user, password)
    }}


})

module.exports = LoginPage
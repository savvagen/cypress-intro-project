/// <reference types="Cypress" />

describe('Login Tests', ()=>{

    afterEach(()=>{
        cy.visit('/logged-out')
        .url().should('be.equal', 'https://trello.com/logged-out')
        .get('h1').should('have.text', 'Thanks for using Trello.')
    })


    it('should login from login-form', ()=>{
        cy.visit('/login')
        .get('#login-form').should('be.visible')
        .get('#user')
        .type('genchevskiy.test@gmail.com')
        .get('#password')
        .scrollIntoView()
        .type('s.g19021992')
        .get('#login-form').submit()
        .url().should('be.equal', 'https://trello.com/')
        .get('.home-left-sidebar-container ul li > a')
        .eq(0).should('be.visible').find('span:nth-child(2)').contains('Home')
    })
})

describe('Test on Ipad 2', ()=> {

    afterEach(()=>{
        cy.visit('/logged-out')
        .url().should('be.equal', 'https://trello.com/logged-out')
        .get('h1').should('have.text', 'Thanks for using Trello.')
    })


    it('should login to mobile version', ()=> {
        cy.viewport('iphone-6+')
        cy.visit('/login')
        .get('#login-form').should('be.visible')
        .get('#user')
        .type('genchevskiy.test@gmail.com')
        .get('#password')
        .scrollIntoView()
        .type('s.g19021992')
        .get('#login-form').submit()
        .url().should('be.equal', 'https://trello.com/')
        .get('.home-main-content-container').should('be.visible')

    })

})
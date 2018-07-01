/// <reference types="Cypress" />

var LoginPage = require('../../pages/trello/login.page')
var HomePage = require('../../pages/trello/home.page')

describe('Login Tests', () => {

    var homePage 
    var loginPage 

    beforeEach(()=>{
        homePage = new HomePage()
        loginPage = new LoginPage()
    })

    afterEach(()=> {
        homePage.logOut()
    })
    
    it('should login from login-form', ()=>{
        var page = loginPage.open().loginWith('genchevskiy.test@gmail.com', 's.g19021992')
        page.navigationBar.eq(0).should('be.visible').find('span:nth-child(2)').contains('Home')
        cy.url().should('be.equal', 'https://trello.com/')
    })


    it('enter to dashboard', ()=>{
        var page = loginPage.open().loginWith('genchevskiy.test@gmail.com', 's.g19021992')
        page.navigationBar.eq(1).click()
        cy.get('ul.boards-page-board-section-list li')
        .each(($el)=>{
            if(cy.wrap($el).find('a span:nth-child(2) > span').contains('My first Board')){
                cy.wrap($el).find('a').click()
            }
        })
        cy.get(".board-header-btn-text").should('be.visible').should('contain', 'My first Board')

    })


})

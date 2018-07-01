var page = require('../../pages/google/search.page')

context('Firt tests', ()=> {
    it('should search in google', () => {
        cy.visit("/").url().should('contain', 'www.google.com')
        cy.get('input[name="q"]').type("Selenium is Dead!").type('{enter}')
        //cy.get('input[name="btnK"]').click()
        const list = cy.get('.srg .g')
        list.should('have.length', 9)
        list.should('be.visible')
        list.each(($el)=>{
            ecpect($el.should('be.visible')).to.be(true)
        })
        list.eq(0).find('h3 a').contains('Selenium is dead, ')
    })

    it('should search again', function(){
        var resultPage = page.open().search('Selenium is Dead!')
        resultPage.searchResults.should('have.length', 9)
                                .should('be.visible')
                                .eq(0).find('h3 a').contains('Selenium is dead, ')
    })
})
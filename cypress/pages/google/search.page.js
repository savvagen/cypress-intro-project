
var SearchPage = function(){

}

SearchPage.prototype = Object.create({}, {
    searchField: { get: function () { return cy.get('input[name="q"]') }},
    searchResults: { get: function () { return cy.get('.srg .g') }},

    open: {value: function(){
            cy.visit('/')
            return this
    }},
    search: {value: function (text) {
            this.searchField.type(text).type('{enter}')
            return this
    }}

})

module.exports = new SearchPage()
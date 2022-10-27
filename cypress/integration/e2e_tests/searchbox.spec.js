describe('Searchbox Test', () => {
    before(() => {
        cy.visit('/')
    })

    it('should type into searchbox and submit with pressing enter', () => {
        cy.get('#searchTerm').type('Text {enter}')
    })

    it('should show search results page', () => {
        cy.get('h2').contains('Search Results:').should('be.visible')
    })
})
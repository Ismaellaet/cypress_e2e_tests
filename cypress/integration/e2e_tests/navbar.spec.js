describe('Navbar Test', () => {
    before(() => {
        cy.visit('/')
    })

    it('should display online banking content', () => {
        cy.get('div strong').contains('Online Banking').click()

        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('contain.text', 'Online Banking')
    })

    it('should display feedback content', () => {
        cy.get('div strong').contains('Feedback').click()

        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('be.visible')
    })

    it('should display HomePage content', () => {
        cy.get('a.brand').contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    })
})
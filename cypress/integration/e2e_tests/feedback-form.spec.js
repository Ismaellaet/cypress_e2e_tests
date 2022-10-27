describe('Feedback Form Test', () => {
    before(() => {
        cy.visit('/feedback.html')
    })

    it('should fill feedback form', () => {
        cy.get('#name').type('Name')
        cy.get('#email').type('fake_email@email.com')
        cy.get('#subject').type('Fake subject')
        cy.get('#comment').type('Fake comment')
    })

    it('should submit feedback form', () => {
        cy.get('.btn-signin').click()
    })

    it('should display feedback message', () => {
        cy.contains('Thank you for your comments').should('be.visible')
    })
})
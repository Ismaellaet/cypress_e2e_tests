describe('Filter Transaction', () => {
    before(() => {
        cy.visit('/login.html')
        cy.fixture("user").then(user => {
            const {username, password} = user
            cy.login(username, password)
        })
    })

    it('should filter transactions', () => {
        cy.get('#account_activity_tab').click()
        cy.contains('Find Transactions').click()
        cy.get('#aa_fromAmount').type('200')
        cy.get('#aa_toAmount').type('1000')
        cy.get('button').contains('Find').click()
    })

    it('should display results', () => {
        cy.get('#filtered_transactions_for_account').should('be.visible')
        cy.get('tbody > tr').its('length').should('be.gt', 0)
    })
})
describe('Transfer Funds Verification Test', () => {
    before(() => {
        cy.visit('/login.html')
        cy.fixture("user").then(user => {
            const {username, password} = user
            cy.login(username, password)
        })
    })

    it('should fill transfer funds form', () => {
        cy.get('#transfer_funds_tab').click()
        cy.get('#tf_fromAccountId').select('2')
        cy.get('#tf_toAccountId').select('4')
        cy.get('#tf_amount').type('2000')
        cy.get('#tf_description').type('Description')
        cy.get('#btn_submit').click()
    })

    it('should verify correct data', () => {
        cy.get('#tf_fromAccountId').should('have.value', 'Checking')
        cy.get('#tf_toAccountId').should('have.value', 'Loan')
        cy.get('#tf_amount').should('have.value', '2000')
    })
})
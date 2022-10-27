describe('Payment Test', () => {
    before(() => {
        cy.visit('/login.html')
        cy.fixture("user").then(user => {
            const {username, password} = user
            cy.login(username, password)
        })
    })

    it('should send new payment', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('Apple')
        cy.get('#sp_account').select('Loan')
        cy.get('#sp_amount').type('1020')
        cy.get('#sp_date').type('2022-10-26 {enter}')
        cy.get('#sp_description').type('Description')
        cy.get('#pay_saved_payees').click()
    })

    it('should show success message', () => {
        cy.get('#alert_content')
        .should('contain', 'The payment was successfully submitted.')
    })
})
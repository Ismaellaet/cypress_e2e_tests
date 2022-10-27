describe('Currency Exchange Test', () => {
    before(() => {
        cy.visit('/login.html')
        cy.fixture("user").then(user => {
            const {username, password} = user
            cy.login(username, password)
        })
    })

    it('should fill conversion form', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('EUR')
        cy.get('#pc_amount').type('2000')
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click()
    })

    it('should display conversion amount', () => {
        cy.get('#pc_conversion_amount').should('contain', 'USD')
    })
})
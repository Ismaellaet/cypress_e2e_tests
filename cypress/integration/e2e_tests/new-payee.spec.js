describe('New Payee Test', () => {
    before(() => {
        cy.visit('/login.html')
        cy.fixture("user").then(user => {
            const {username, password} = user
            cy.login(username, password)
        })
    })

    it('should add new payee to the list', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_address').type('Address')
        cy.get('#np_new_payee_account').type('1234567')
        cy.get('#np_new_payee_details').type('Details')
        cy.get('#add_new_payee').click()
    })

    it('should show sucess message', () => {
        cy.get('#alert_content')
        .should('contain', 'The new payee Name was successfully created.')
    })
})
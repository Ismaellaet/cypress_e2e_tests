describe('Password Test', () => {
    before(() => {
        cy.visit('/')
    })

    it('should click on the SignIn button', () => {
        cy.get('#signin_button').click()
    })

    it('should click on the Forgotten Password', () => {
        cy.get('a').contains('Forgot your password ?').click()
    })

    it('should fill email form', () => {
        cy.get('#user_email').type('some_email@email.com')
    })

    it('should submit the email form', () => {
        cy.get('input[value="Send Password"]').click()
    })
})
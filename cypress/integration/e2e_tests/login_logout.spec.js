describe('Login and Logout Test', () => {
    before(() => {
        cy.visit('/login.html')
    })

    it('should try to login with invalid credentials', () => {
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[value="Sign in"]').click()
    })

    it('should display error message', () => {
        cy.get('.alert-error')
        .should('be.visible')
        .and('contain.text', 'Login and/or password are wrong.')
    })

    it('should login to application', () => {
        cy.fixture("user").then(user => {
            const {username, password} = user
            cy.login(username, password)
        })
        cy.get('.nav-tabs').should('be.visible')
    })

    it('should logout from application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include', 'index.html')
    })
})
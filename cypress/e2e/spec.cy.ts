describe('Check the login page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Renders the home page', () => {
        cy.visit('/login');
    })
})

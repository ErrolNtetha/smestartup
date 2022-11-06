describe('Login', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('it renders the login button with "Login"', () => {
        cy.visit('/login');

        cy.get('[type=email]').type('mphumier@gmail.com');
        cy.get('[type=password]').type('12345');
        cy.get('[type=Submit]').click();

        cy.contains('a', 'Suppliers');
        cy.url().should('match', /feed$/);
    });
});

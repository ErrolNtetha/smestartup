describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Renders the login page', () => {
        cy.visit('/login');

        cy.get('[data-cy="email"]').type('mphumier@gmail.com');
        cy.get('[data-cy="password"]').type('12345');
        cy.get('[data-cy="submit"]').click();

        cy.url().should('include', '/feed');
    });
});

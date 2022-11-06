describe('Login', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Check all routes are working as supposed to', () => {
        cy.visit('/login');
        cy.get('[type=email]').type('mphumier@gmail.com');
        cy.get('[type=password]').type('12345');
        cy.get('[type=Submit]').click();

        cy.contains('a', 'Suppliers');
        cy.url().should('match', /feed$/);
    });

    it('check all routes are working as expected', () => {
        cy.visit('/suppliers');
        cy.visit('/founders');
    });
});

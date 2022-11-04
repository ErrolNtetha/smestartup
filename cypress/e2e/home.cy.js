describe('Login', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('checks the localstorage if empty', () => {
        cy.clearLocalStorage().should((ls) => {
          expect(ls.getItem('accessToken')).to.be.null
          expect(ls.getItem('refreshToken')).to.be.null
        });
    });

    it('checks if Get started button appers', () => {
        cy.get('.hero__left--action').should('have.text', ' get started ');
    });
});

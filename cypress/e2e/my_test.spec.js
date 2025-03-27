describe('App Component - E2E Tests', () => {
    it('Should render the App component with Theme Toggler', () => {
      cy.visit('/');
  
      cy.get('[data-cy="theme-toggler"]').should('exist').should('be.visible');
    });
  });
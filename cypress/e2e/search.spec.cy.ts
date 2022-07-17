describe('When I visit the Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('I should be redirected to the search movie page', () => {
    cy.url().should('include', '/search');
  });
});

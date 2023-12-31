import { moviesResponse } from './mocks';

describe('When I visit the Home page:', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');

    cy.intercept(
      {
        method: 'GET',
        url: 'movies',
      },
      moviesResponse,
    ).as('getMovies');
  });

  it('Should be redirected to the search movie page with the movie panel', () => {
    cy.url().should('include', '/search');
    cy.get('#page-layout').find('footer');
    cy.get('#page-layout').find('header');
    cy.get('#page-layout').find('article');
    cy.get('[data-cy="movie-panel"').should('be.visible');
    cy.get('[data-cy="movie-item"').should(($movies) => {
      expect($movies).to.have.length(10);
    });
  });

  it('Should be able to search a movie by typing a query in the search field', () => {
    cy.get('input[name="movie"]').type('The Greatest Showman');
    cy.get('#search-movie-button').click();
    cy.wait(3000);
    cy.url().should('include', '?search=The+Greatest+Showman');
    cy.get('[data-cy="movie-item"').should(($movie) => {
      expect($movie).to.be.visible;
      expect($movie).to.contain('The Greatest Showman');
      expect($movie).to.contain('2017');
      expect($movie).to.contain('Drama, Music');
    });
  });

  it('Should be able to switch between tabs and get new movies by tab genre', () => {
    cy.contains('Animation').click().wait(3000);
    cy.url().should('include', '?genre=Animation');
    cy.get('[data-cy="movie-item"').each(($movie) => {
      expect($movie).to.contain('Animation');
    });
    cy.contains('Comedy').click().wait(3000);
    cy.url().should('include', '?genre=Comedy');
    cy.get('[data-cy="movie-item"').each(($movie) => {
      expect($movie).to.contain('Comedy');
    });
  });
});

export {};

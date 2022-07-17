import { Guid } from 'guid-typescript';

describe('When I visit the Home page:', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('I should be redirected to the search movie page with the movie panel', () => {
    cy.url().should('include', '/search');
    cy.get('[data-cy="page-layout"').find('footer');
    cy.get('[data-cy="page-layout"').find('header');
    cy.get('[data-cy="page-layout"').find('article');
    cy.get('[data-cy="movie-panel"').should('be.visible');
    cy.get('[data-cy="movie-item"').should(($movies) => {
      expect($movies).to.have.length(10);
    });
  });

  it('I should be able to search a movie by typing a query in the search field', () => {
    cy.get('input[name="movie"]').type('The Greatest Showman');
    cy.get('#search-movie-button').click();
    cy.url().should('include', '?search=The+Greatest+Showman');
    cy.get('[data-cy="movie-item"').should(($movie) => {
      expect($movie).to.be.visible;
      expect($movie).to.contain('The Greatest Showman');
      expect($movie).to.contain('2017');
      expect($movie).to.contain('Drama, Music');
    });
  });

  it('I should be able to open the Add movie form', () => {
    cy.get('[data-cy="edit-movie-form"').should('not.exist');
    cy.get('button[title="Add movie"]').click();
    cy.get('[data-cy="edit-movie-form"').should(($form) => {
      expect($form).to.be.visible;
      expect($form).to.contain('Title');
      expect($form).to.contain('Movie url');
      expect($form).to.contain('Genres');
      expect($form).to.contain('Release date');
      expect($form).to.contain('Rating');
      expect($form).to.contain('Runtime');
      expect($form).to.contain('Overview');
    });
  });

  it('I should be able add a new movie and the delete it', () => {
    // Open the form
    cy.get('button[title="Add movie"]').click();

    // Generate a unique title to avoid test data overlapping
    const uniqueTitle = `Movie-${Guid.create().toString()}`;

    // Fill in the required fields
    cy.get('input[name="title"]').type(uniqueTitle);
    cy.get('input[name="url"]').type('https://test.com/test.jpg');
    cy.get('input[name="date"]').type('2022-02-02');
    cy.get('input[name="rating"]').type('7');
    cy.get('input[name="runtime"]').type('110');
    cy.get('.dropdown-heading-dropdown-arrow').click();
    cy.get('[type="checkbox"]').first().check({ force: true });
    cy.get('textarea[name="overview"]').type('Some test text');

    // Press the submit button
    cy.get('#submit-movie-data').click({ force: true });
    cy.wait(500);

    // The form closes automatically
    cy.get('[data-cy="edit-movie-form"').should('not.exist');

    // Find the recently added movie
    cy.get('input[name="movie"]').clear().type(uniqueTitle);
    cy.get('#search-movie-button').click();
    cy.get('[data-cy="movie-item"').should(($movie) => {
      expect($movie).to.be.visible;
      expect($movie).to.contain(uniqueTitle);
      expect($movie).to.contain('2022');
    });

    // Open the delete confirmation
    cy.get('[data-cy="movie-item"').trigger('mouseover');
    cy.get('button[title="Movie menu"]').click({ force: true });
    cy.get('li[title="Delete this movie"]').click({ force: true });
    cy.wait(500);
    cy.get('button[title="Confirm movie delete"]').click({ force: true });

    // Check that the movie was removed
    cy.get('input[name="movie"]').clear().type(uniqueTitle);
    cy.get('#search-movie-button').click();
    cy.get('[data-cy="movie-item"').should('not.exist');
    cy.get('[data-cy="movie-panel"').should(($panel) => {
      expect($panel).to.contain('0 movies found');
    });
  });

  it('I should be edit the existing movie', () => {
    // Find the movie
    cy.get('input[name="movie"]').clear().type('The Shape of Water');
    cy.get('#search-movie-button').click();
    cy.get('[data-cy="movie-item"').should(($movie) => {
      expect($movie).to.be.visible;
      expect($movie).to.contain('The Shape of Water');
      expect($movie).to.contain('2017');
    });

    // Open the edit form
    cy.get('[data-cy="movie-item"').trigger('mouseover');
    cy.get('button[title="Movie menu"]').click({ force: true });
    cy.get('li[title="Edit this movie"]').click({ force: true });

    // Change the movie year and title
    cy.get('input[name="title"]').clear().type('CHANGED: The Shape of Water');
    cy.get('input[name="date"]').type('2022-01-01');

    // Press the submit button
    cy.get('#submit-movie-data').click({ force: true });
    cy.wait(500);

    // Check that changes were applied
    cy.get('input[name="movie"]').clear().type('CHANGED: The Shape of Water');
    cy.get('#search-movie-button').click();
    cy.get('[data-cy="movie-item"').should(($movie) => {
      expect($movie).to.be.visible;
      expect($movie).to.contain('CHANGED: The Shape of Water');
      expect($movie).to.contain('2022');
    });

    // Return the initial data back
    cy.get('[data-cy="movie-item"').trigger('mouseover');
    cy.get('button[title="Movie menu"]').click({ force: true });
    cy.get('li[title="Edit this movie"]').click({ force: true });
    cy.get('input[name="title"]').clear().type('The Shape of Water');
    cy.get('input[name="date"]').type('2017-12-01');
    cy.get('#submit-movie-data').click({ force: true });
    cy.wait(500);
    cy.get('input[name="movie"]').clear().type('The Shape of Water');
    cy.get('#search-movie-button').click();
    cy.get('[data-cy="movie-item"').should(($movie) => {
      expect($movie).to.be.visible;
      expect($movie).to.contain('The Shape of Water');
      expect($movie).to.contain('2017');
    });
  });

  it('I should be able to switch between tabs and get new movies by tab genre', () => {
    cy.contains('Animation').click();
    cy.url().should('include', '?genre=Animation');
    cy.wait(1000);
    cy.get('[data-cy="movie-item"').each(($movie) => {
      expect($movie).to.contain('Animation');
    });
    cy.contains('Comedy').click();
    cy.wait(1000);
    cy.url().should('include', '?genre=Comedy');
    cy.get('[data-cy="movie-item"').each(($movie) => {
      expect($movie).to.contain('Comedy');
    });
  });
});

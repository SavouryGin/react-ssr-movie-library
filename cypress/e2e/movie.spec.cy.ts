import { Guid } from 'guid-typescript';

describe('When I visit the Home page:', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('I should be able add a new movie and then delete it', () => {
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
});

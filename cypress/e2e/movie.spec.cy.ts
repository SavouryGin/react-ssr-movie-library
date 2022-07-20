import { Guid } from 'guid-typescript';

describe('When I visit the Home page:', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Should be able add a new movie and then delete it', () => {
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
    cy.get('#submit-movie-data').click({ force: true }).wait(3000);

    // The form closes automatically
    cy.get('#edit-movie-form').should('not.exist');

    // Find the recently added movie and assert
    cy.get('input[name="movie"]').clear().type(uniqueTitle);
    cy.get('#search-movie-button').click().wait(3000);
    cy.get('[data-cy="movie-item"').should(($movie) => {
      expect($movie).to.be.visible;
      expect($movie).to.contain(uniqueTitle);
    });

    // Open the delete confirmation
    cy.get('[data-cy="movie-item"').trigger('mouseover');
    cy.get('button[title="Movie menu"]').click({ force: true });
    cy.get('li[title="Delete this movie"]').click({ force: true }).wait(1000);
    cy.get('button[title="Confirm movie delete"]').click({ force: true }).wait(1000);

    // Check that the movie was removed
    cy.get('input[name="movie"]').clear().type(uniqueTitle);
    cy.get('#search-movie-button').click().wait(3000);
    cy.get('[data-cy="movie-item"').should('not.exist');
    cy.get('[data-cy="movie-panel"').should(($panel) => {
      expect($panel).to.contain('0 movies found');
    });
  });

  it('Should be edit the existing movie', () => {
    // Find the movie
    cy.get('input[name="movie"]').clear().type('The Shape of Water');
    cy.get('#search-movie-button').click().wait(3000);
    cy.get('[data-cy="movie-item"').should(($movie) => {
      expect($movie).to.be.visible;
      expect($movie).to.contain('The Shape of Water');
    });

    // Open the edit form
    cy.get('[data-cy="movie-item"').trigger('mouseover');
    cy.get('button[title="Movie menu"]').click({ force: true });
    cy.get('li[title="Edit this movie"]').click({ force: true });

    // Change the movie title
    cy.get('input[name="title"]').clear().type('CHANGED: The Shape of Water');

    // Press the submit button
    cy.get('#submit-movie-data').click({ force: true }).wait(2000);

    // Check that changes were applied
    cy.get('input[name="movie"]').clear().type('CHANGED: The Shape of Water');
    cy.get('#search-movie-button').click().wait(3000);
    cy.get('[data-cy="movie-item"').should(($movie) => {
      expect($movie).to.be.visible;
      expect($movie).to.contain('CHANGED: The Shape of Water');
    });

    // Return the initial data back
    cy.get('[data-cy="movie-item"').trigger('mouseover');
    cy.get('button[title="Movie menu"]').click({ force: true });
    cy.get('li[title="Edit this movie"]').click({ force: true }).wait(1000);
    cy.get('input[name="title"]').clear().type('The Shape of Water');
    cy.get('#submit-movie-data').click({ force: true }).wait(1000);

    // Check than the initial data has been saved
    cy.get('input[name="movie"]').clear().type('The Shape of Water');
    cy.get('#search-movie-button').click().wait(3000);
    cy.get('[data-cy="movie-item"').should(($movie) => {
      expect($movie).to.be.visible;
      expect($movie).to.contain('The Shape of Water');
    });
  });
});

export {};

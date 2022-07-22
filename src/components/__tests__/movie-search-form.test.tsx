import MovieSearchForm from 'components/movie/search-form';
import React from 'react';
import { mockedReducer, mockedState } from '__mocks__/redux-mock';
import { renderWithRedux } from '__mocks__/test-utils';
import { screen } from '@testing-library/react';

describe('MovieSearchForm component:', () => {
  beforeEach(() => {
    renderWithRedux(<MovieSearchForm />, mockedReducer, mockedState);
  });

  it('displays the form header', () => {
    expect(screen.getByText('Find your movie')).toBeInTheDocument();
  });

  it('renders the form element', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('renders the search textbox', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('the search textbox has the correct placeholder', () => {
    expect(screen.getByPlaceholderText('What do you want to watch?')).toBeInTheDocument();
  });

  it('has the Submit button', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveProperty('type', 'submit');
    expect(button).toHaveTextContent('Submit');
  });
});

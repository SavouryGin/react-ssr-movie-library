import MovieItem from 'components/movie/item';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { mockedReducer, mockedState } from '__mocks__/redux-mock';
import { movieList } from '__mocks__/movie-list';
import { renderWithRedux } from '__mocks__/test-utils';
import { screen } from '@testing-library/react';

const testProps = {
  className: 'test-class',
  ...movieList[0],
};

describe('MovieItem component:', () => {
  beforeEach(() => {
    renderWithRedux(<MovieItem {...testProps} />, mockedReducer, mockedState);
  });

  it('displays the movie title', () => {
    expect(screen.getByText('Pulp Fiction')).toBeInTheDocument();
  });

  it('displays the movie image', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('displays the movie year', () => {
    expect(screen.getByText('1994')).toBeInTheDocument();
  });

  it('displays the movie genres', () => {
    expect(screen.getByText('Crime, Comedy')).toBeInTheDocument();
  });

  it('opens the movie menu if user clicks on button', () => {
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    userEvent.click(screen.getByTitle('Movie menu'));
    expect(screen.queryByRole('menu')).toBeInTheDocument();
  });
});

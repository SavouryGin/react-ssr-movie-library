import MovieItem from '../item';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { combineReducers } from '@reduxjs/toolkit';
import { movieList } from '__mocks__/movie-list';
import { moviesInitialState, moviesSlice } from 'store/movies/slice';
import { renderWithRedux } from '__mocks__/test-utils';
import { screen } from '@testing-library/react';

const mockedReducer = combineReducers({
  movies: moviesSlice.reducer,
});

const mockedState = {
  movies: moviesInitialState,
};

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

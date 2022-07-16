import Header from './index';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { combineReducers } from '@reduxjs/toolkit';
import { moviesInitialState, moviesSlice } from 'store/movies/slice';
import { renderWithRedux } from '__mocks__/test-utils';
import { screen } from '@testing-library/react';

const mockedReducer = combineReducers({
  movies: moviesSlice.reducer,
});

const mockedState = {
  movies: moviesInitialState,
};

describe('Header component:', () => {
  beforeEach(() => {
    renderWithRedux(<Header />, mockedReducer, mockedState);
  });

  it('matches the snapshot', () => {
    const { asFragment } = renderWithRedux(<Header />, mockedReducer, mockedState);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the header element', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('has the Add movie button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Add movie');
  });

  it('opens the Add movie form after user clicks on the Add button', () => {
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
    userEvent.click(screen.getByTitle('Add movie'));
    expect(screen.queryByRole('form')).toBeInTheDocument();
  });
});

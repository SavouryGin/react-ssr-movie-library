import Header from './index';
import React from 'react';
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
  it('renders the header element', () => {
    renderWithRedux(<Header />, mockedReducer, mockedState);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { asFragment } = renderWithRedux(<Header />, mockedReducer, mockedState);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has the Add movie button', () => {
    renderWithRedux(<Header />, mockedReducer, mockedState);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Add movie');
  });
});

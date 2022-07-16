import Layout from './index';
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

describe('Layout component:', () => {
  beforeEach(() => {
    renderWithRedux(<Layout />, mockedReducer, mockedState);
  });

  it('matches the snapshot', () => {
    const { asFragment } = renderWithRedux(<Layout />, mockedReducer, mockedState);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the header component', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders the footer component', () => {
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the main component', () => {
    expect(screen.getByTestId('main-container')).toBeInTheDocument();
  });
});

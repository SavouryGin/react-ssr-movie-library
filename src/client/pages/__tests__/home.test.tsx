import Home from 'pages/home';
import React from 'react';
import { GENRE_TABS } from 'pages/home/constants';
import { mockedReducer, mockedState } from '__mocks__/redux-mock';
import { renderWithRedux } from '__mocks__/test-utils';
import { screen } from '@testing-library/react';

describe('Home page:', () => {
  it('matches the snapshot', () => {
    const { asFragment } = renderWithRedux(<Home />, mockedReducer, mockedState);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains the genre tabs with correct ids', () => {
    renderWithRedux(<Home />, mockedReducer, mockedState);
    GENRE_TABS.forEach((tabName) => {
      const id = `${tabName}-movies`;
      const tab = screen.getByTestId(id);
      expect(tab).toBeInTheDocument();
      expect(tab).toHaveProperty('id', id);
    });
  });

  it('contains the search movie form', () => {
    renderWithRedux(<Home />, mockedReducer, mockedState);
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByText('Find your movie')).toBeInTheDocument();
  });
});

import Layout from 'components/layout/index';
import React from 'react';
import { mockedReducer, mockedState } from '__mocks__/redux-mock';
import { renderWithRedux } from '__mocks__/test-utils';
import { screen } from '@testing-library/react';

describe('Layout component:', () => {
  beforeEach(() => {
    renderWithRedux(<Layout />, mockedReducer, mockedState);
  });

  it('Should match the snapshot', () => {
    const { asFragment } = renderWithRedux(<Layout />, mockedReducer, mockedState);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the header component', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('Should render the footer component', () => {
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('Should render the main component', () => {
    expect(screen.getByTestId('main-container')).toBeInTheDocument();
  });
});

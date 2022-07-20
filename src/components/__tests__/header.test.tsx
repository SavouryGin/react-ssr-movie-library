import Header from 'components/header/index';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { mockedReducer, mockedState } from '__mocks__/redux-mock';
import { renderWithRedux } from '__mocks__/test-utils';
import { screen } from '@testing-library/react';

describe('Header component:', () => {
  beforeEach(() => {
    renderWithRedux(<Header />, mockedReducer, mockedState);
  });

  it('Should match the snapshot', () => {
    const { asFragment } = renderWithRedux(<Header />, mockedReducer, mockedState);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the header element', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('Should have the Add movie button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Add movie');
  });

  it('Should open the Add movie form after user clicks on the Add button', () => {
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
    userEvent.click(screen.getByTitle('Add movie'));
    expect(screen.queryByRole('form')).toBeInTheDocument();
  });
});

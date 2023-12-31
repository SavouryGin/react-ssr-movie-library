import MovieDeleteConfirmation from 'components/movie/delete-confirmation';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

const testProps = {
  className: 'test-class',
  onConfirm: jest.fn(),
};

describe('MovieDeleteConfirmation component:', () => {
  it('Should matche the snapshot', () => {
    const { asFragment } = render(<MovieDeleteConfirmation {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should call the onConfirm handler', () => {
    // arrange
    render(<MovieDeleteConfirmation {...testProps} />);
    const button = screen.getByText('Confirm');

    // act
    userEvent.click(button);

    // asset
    expect(testProps.onConfirm).toHaveBeenCalledTimes(1);
  });
});

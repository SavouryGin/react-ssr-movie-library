import MovieMenu from 'components/movie/menu';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

const testProps = {
  className: 'test-class',
  onClose: jest.fn(),
  editMovie: jest.fn(),
  deleteMovie: jest.fn(),
};

describe('MovieMenu component:', () => {
  beforeEach(() => {
    render(<MovieMenu {...testProps} />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<MovieMenu {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls the editMovie handler', () => {
    // arrange
    const editButton = screen.getByText('Edit');

    // act
    userEvent.click(editButton);

    // assert
    expect(testProps.editMovie).toHaveBeenCalledTimes(1);
  });

  it('calls the deleteMovie handler', () => {
    // arrange
    const deleteButton = screen.getByText('Delete');

    // act
    userEvent.click(deleteButton);

    // assert
    expect(testProps.deleteMovie).toHaveBeenCalledTimes(1);
  });

  it('calls the onClose handler', () => {
    // arrange
    const closeButton = screen.getByRole('button');

    // act
    userEvent.click(closeButton);

    // assert
    expect(testProps.onClose).toHaveBeenCalledTimes(1);
  });
});

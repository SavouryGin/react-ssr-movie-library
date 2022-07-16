import MovieMenu from '../menu';
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
    const editButton = screen.getByText('Edit');
    userEvent.click(editButton);
    expect(testProps.editMovie).toHaveBeenCalledTimes(1);
  });

  it('calls the deleteMovie handler', () => {
    const deleteButton = screen.getByText('Delete');
    userEvent.click(deleteButton);
    expect(testProps.deleteMovie).toHaveBeenCalledTimes(1);
  });

  it('calls the onClose handler', () => {
    const closeButton = screen.getByRole('button');
    userEvent.click(closeButton);
    expect(testProps.onClose).toHaveBeenCalledTimes(1);
  });
});

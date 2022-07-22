import Button from 'components/controls/button/index';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { ButtonProps } from 'types/controls';
import { Icon } from 'enums/icon';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const testProps: ButtonProps = {
  icon: Icon.Check,
  onClick: jest.fn(),
  text: 'test button',
  title: 'test title',
  type: 'reset',
};

describe('Button component:', () => {
  beforeEach(() => {
    render(<Button {...testProps} />);
  });

  it('Should render the button element with the default type', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Should have the passed type', () => {
    expect(screen.getByRole('button')).toHaveProperty('type', testProps.type);
  });

  it('Should have the passed text', () => {
    expect(screen.getByText(testProps.text || '')).toBeInTheDocument();
  });

  it('Should fire the onClick handler', () => {
    // arrange
    const btn = screen.getByRole('button');

    // act
    userEvent.click(btn);

    // assert
    expect(testProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('Should have the title attribute', () => {
    expect(screen.getByRole('button')).toHaveProperty('title', testProps.title);
  });
});

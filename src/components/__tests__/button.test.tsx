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

  it('renders the button element with the default type', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has the passed type', () => {
    expect(screen.getByRole('button')).toHaveProperty('type', testProps.type);
  });

  it('has the passed text', () => {
    expect(screen.getByText(testProps.text || '')).toBeInTheDocument();
  });

  it('fires the onClick handler', () => {
    const btn = screen.getByRole('button');
    userEvent.click(btn);
    expect(testProps.onClick).toHaveBeenCalledTimes(1);
    userEvent.dblClick(btn);
    expect(testProps.onClick).toHaveBeenCalledTimes(3);
  });

  it('has the title attribute', () => {
    expect(screen.getByRole('button')).toHaveProperty('title', testProps.title);
  });
});

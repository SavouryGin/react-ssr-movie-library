import App from '../index';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('AppLink component:', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders the test header element', () => {
    screen.debug();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('displays the test text', () => {
    expect(screen.getByText('ReactJS GMP')).toHaveClass('test-header');
  });
});

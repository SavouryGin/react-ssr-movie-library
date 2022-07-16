import Footer from './index';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Footer component:', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the footer container', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});

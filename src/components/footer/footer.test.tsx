import Footer from './index';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Footer component:', () => {
  it('renders the footer container', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});

import Footer from 'components/footer/index';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Footer component:', () => {
  it('Should matche the snapshot', () => {
    const { asFragment } = render(<Footer className='test-classname' />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the footer container', () => {
    render(<Footer className='test-classname' />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});

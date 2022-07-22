import NotFoundPage from 'pages/not-found';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('NotFoundPage page:', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains the error title and the link', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
    );
    const header = screen.getByRole('heading');
    const link = screen.getByRole('link');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('404 Error');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Go Home');
  });
});

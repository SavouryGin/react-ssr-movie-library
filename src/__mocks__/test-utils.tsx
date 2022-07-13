import React, { ReactElement, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Reducer, configureStore } from '@reduxjs/toolkit';
import { RenderOptions, RenderResult, render } from '@testing-library/react';
import { Field, Form } from 'react-final-form';

export const renderWithRedux = (ui: ReactElement, reducer: Reducer, preloadedState = {}, renderOptions?: RenderOptions): RenderResult => {
  const mockedStore = configureStore({ reducer, preloadedState });
  const Wrapper: React.FC = ({ children }: { children?: ReactNode }) => {
    return (
      <Provider store={mockedStore}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export const renderInsideForm = (ui: ReactElement, renderOptions?: RenderOptions): RenderResult => {
  const Wrapper: React.FC = ({ children }: { children?: ReactNode }) => {
    return (
      <Form
        onSubmit={jest.fn()}
        render={() => {
          return <>{children}</>;
        }}
      />
    );
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

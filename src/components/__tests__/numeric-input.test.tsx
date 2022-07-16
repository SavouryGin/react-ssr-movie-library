import NumericInput from 'components/controls/numeric-input';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { Field } from 'react-final-form';
import { renderInsideForm } from '__mocks__/test-utils';
import { screen } from '@testing-library/react';

const testProps = {
  name: 'test-name',
  label: 'test label',
  defaultInputValue: 7,
  max: 10,
  min: 1,
  step: 1,
};

describe('NumericInput component:', () => {
  beforeEach(() => {
    renderInsideForm(<Field component={NumericInput} {...testProps} />);
  });

  it('renders the input element with default props', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();
    expect(input).toHaveProperty('type', 'number');
  });

  it('the input has a label', () => {
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('receives the passed default value', () => {
    expect(screen.getByRole('textbox')).toHaveValue(testProps.defaultInputValue);
  });

  it('receives the max and min properties', () => {
    const input = screen.getByRole('textbox');
    expect(input).toHaveProperty('max', testProps.max.toString());
    expect(input).toHaveProperty('min', testProps.min.toString());
  });

  it('allows the user to enter numbers', () => {
    const input = screen.getByRole('textbox');
    userEvent.clear(input);
    userEvent.type(input, '3');
    expect(input).toHaveValue(3);
  });

  it('does not allow user to type common text', () => {
    const input = screen.getByRole('textbox');
    userEvent.clear(input);
    userEvent.type(input, 'test');
    expect(input).toHaveValue(0);
  });
});

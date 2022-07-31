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

  it('Should render the input element with default props', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();
    expect(input).toHaveProperty('type', 'number');
  });

  it('Should have a label', () => {
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('Should receive the passed default value', () => {
    expect(screen.getByRole('textbox')).toHaveValue(testProps.defaultInputValue);
  });

  it('Should receive the max and min properties', () => {
    const input = screen.getByRole('textbox');
    expect(input).toHaveProperty('max', testProps.max.toString());
    expect(input).toHaveProperty('min', testProps.min.toString());
  });

  it('Should allow the user to enter numbers', () => {
    // arrange
    const input = screen.getByRole('textbox');
    const testInput = 123;

    // act
    userEvent.clear(input);
    userEvent.type(input, testInput.toString());

    // assert
    expect(input).toHaveValue(testInput);
  });

  it('Should not allow user to type common text', () => {
    // arrange
    const input = screen.getByRole('textbox');

    // act
    userEvent.clear(input);
    userEvent.type(input, 'test');

    // assert
    expect(input).toHaveValue(0);
  });
});

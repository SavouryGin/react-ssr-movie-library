import React from 'react';
import TextInput from 'components/controls/text-input';
import userEvent from '@testing-library/user-event';
import { Field } from 'react-final-form';
import { renderInsideForm } from '__mocks__/test-utils';
import { screen } from '@testing-library/react';

const testProps = {
  name: 'test-name',
  label: 'test label',
  defaultInputValue: 'default value',
  placeholder: 'test placeholder',
  maxLength: 100,
  minLength: 10,
};

describe('TextInput component:', () => {
  beforeEach(() => {
    renderInsideForm(<Field component={TextInput} {...testProps} />);
  });

  it('renders the textbox element with default props', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();
  });

  it('the input has a label', () => {
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('receives the passed default value', () => {
    expect(screen.getByRole('textbox')).toHaveValue(testProps.defaultInputValue);
  });

  it('receives the length properties', () => {
    const input = screen.getByRole('textbox');
    expect(input).toHaveProperty('maxLength', testProps.maxLength);
    expect(input).toHaveProperty('minLength', testProps.minLength);
  });

  it('displays the passed placeholder for the input', () => {
    expect(screen.getByPlaceholderText(testProps.placeholder)).toBeInTheDocument();
  });

  it('allows the user to type some text', () => {
    // arrange
    const input = screen.getByRole('textbox');

    // act
    userEvent.clear(input);
    userEvent.type(input, 'test text');

    // assert
    expect(input).toHaveValue('test text');
  });
});

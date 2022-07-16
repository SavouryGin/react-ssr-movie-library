import React from 'react';
import TextArea from '../text-area';
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

describe('TextArea component:', () => {
  beforeEach(() => {
    renderInsideForm(<Field component={TextArea} {...testProps} />);
  });

  it('renders the textarea element with default props', () => {
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

  it('displays the passed placeholder for the textarea', () => {
    expect(screen.getByPlaceholderText(testProps.placeholder)).toBeInTheDocument();
  });

  it('allows the user to type some text', () => {
    const input = screen.getByRole('textbox');
    userEvent.clear(input);
    userEvent.type(input, 'test text');
    expect(input).toHaveValue('test text');
  });

  it('gets focus on tab press', () => {
    const textarea = screen.getByRole('textbox');
    expect(textarea).not.toHaveFocus();
    userEvent.tab();
    expect(textarea).toHaveFocus();
  });
});

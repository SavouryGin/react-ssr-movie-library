import CustomMultiSelect from '../multi-select';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { Field } from 'react-final-form';
import { mockMultiSelectOptions } from '__mocks__/test-options';
import { renderInsideForm } from '__mocks__/test-utils';
import { screen } from '@testing-library/react';

const testProps = {
  name: 'test-name',
  options: mockMultiSelectOptions,
  label: 'test-label',
};

describe('CustomMultiSelect field component:', () => {
  beforeEach(() => {
    renderInsideForm(<Field component={CustomMultiSelect} {...testProps} />);
  });

  it('renders a combobox element', () => {
    const field = screen.getByLabelText(testProps.label);
    expect(field).toBeInTheDocument();
    expect(field).toBeEnabled();
  });

  it('displays a label for the input', () => {
    const label = screen.getByText(testProps.label);
    expect(label).toBeInTheDocument();
  });

  it('gets focus on tab press', () => {
    const field = screen.getByLabelText(testProps.label);
    expect(field).not.toHaveFocus();
    userEvent.tab();
    expect(field).toHaveFocus();
  });
});

import React from 'react';
import Select from '../select';
import userEvent from '@testing-library/user-event';
import { mockSortOptions } from '__mocks__/test-options';
import { render, screen } from '@testing-library/react';

const testProps = {
  name: 'test-name',
  options: mockSortOptions,
  label: 'test-label',
  defaultOption: mockSortOptions[0],
};

describe('Select field component:', () => {
  beforeEach(() => {
    render(<Select {...testProps} />);
  });

  it('renders a select element', () => {
    const field = screen.getByRole('combobox');
    expect(field).toBeInTheDocument();
    expect(field).toBeEnabled();
  });

  it('displays a label for the input', () => {
    const label = screen.getByText(testProps.label);
    expect(label).toBeInTheDocument();
  });

  it('shows a list of options when user clicks on the field', () => {
    const field = screen.getByRole('combobox');
    userEvent.click(field);
    expect(screen.queryAllByRole('option')).toHaveLength(mockSortOptions.length);
  });

  it('gets focus on tab press', () => {
    const field = screen.getByRole('combobox');
    expect(field).not.toHaveFocus();
    userEvent.tab();
    expect(field).toHaveFocus();
  });
});

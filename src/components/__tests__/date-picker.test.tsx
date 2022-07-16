import DatePicker from 'components/controls/date-picker';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { Field } from 'react-final-form';
import { MAX_DATE, MIN_DATE } from 'components/controls/date-picker/constants';
import { renderInsideForm } from '__mocks__/test-utils';
import { screen } from '@testing-library/react';

const testProps = {
  name: 'test-name',
  label: 'test label',
  defaultInputValue: '2022-07-07',
};

describe('DatePicker component:', () => {
  beforeEach(() => {
    renderInsideForm(<Field component={DatePicker} {...testProps} />);
  });

  it('renders the textbox element with default props', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();
    expect(input).toHaveProperty('type', 'date');
  });

  it('the input has a label', () => {
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('receives the passed default value', () => {
    expect(screen.getByRole('textbox')).toHaveValue(testProps.defaultInputValue);
  });

  it('receives the min and max properties', () => {
    const input = screen.getByRole('textbox');
    expect(input).toHaveProperty('max', MAX_DATE);
    expect(input).toHaveProperty('min', MIN_DATE);
  });

  it('displays a toggle calender button', () => {
    const button = screen.getByTitle('Toggle calendar');
    expect(button).toBeInTheDocument();
  });

  it('allows user to type a year', () => {
    const input = screen.getByRole('textbox');
    userEvent.clear(input);
    userEvent.type(input, '2021-04-03');
    expect(input).toHaveValue('2021-04-03');
  });
});

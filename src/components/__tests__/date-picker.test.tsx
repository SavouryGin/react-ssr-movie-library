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

  it('Should render the textbox element with default props', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();
    expect(input).toHaveProperty('type', 'date');
  });

  it('Should have a label', () => {
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('Should receive the passed default value', () => {
    expect(screen.getByRole('textbox')).toHaveValue(testProps.defaultInputValue);
  });

  it('Should receive the min and max properties', () => {
    expect(screen.getByRole('textbox')).toHaveProperty('max', MAX_DATE);
    expect(screen.getByRole('textbox')).toHaveProperty('min', MIN_DATE);
  });

  it('Should display a toggle calender button', () => {
    expect(screen.getByTitle('Toggle calendar')).toBeInTheDocument();
  });

  it('Should allow user to type a year', () => {
    // arrange
    const input = screen.getByRole('textbox');

    // act
    userEvent.clear(input);
    userEvent.type(input, '2021-04-03');

    // assert
    expect(input).toHaveValue('2021-04-03');
  });
});

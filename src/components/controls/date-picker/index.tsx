import Button from '../button';
import Label from '../label';
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { DatePickerProps } from 'types/controls';
import { FormContext } from '../form';
import { Icon } from 'enums/icon';

const DatePicker = ({ name, onChange, className, label, ...rest }: DatePickerProps) => {
  const formContext = useContext(FormContext);
  const { onChangeInput } = formContext;
  const inputClass = classNames(style.input, { [`${className}`]: !!className });
  const [inputValue, setInputValue] = useState(rest.defaultValue || '');
  const id = rest.id || `date_picker_${name}`;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || '';
    setInputValue(value);

    if (onChangeInput) {
      onChangeInput(e);
    }
    if (onChange) {
      onChange();
    }
  };

  return (
    <div className={inputClass}>
      <Label inputId={id} labelText={label} />
      <input
        type='date'
        name={name}
        id={id}
        value={inputValue}
        onChange={onInputChange}
        onBlur={rest.onBlur}
        onFocus={rest.onFocus}
        min={rest.min || '1901-01-01'}
        max={rest.max || '2100-01-01'}
        className={style.field}
        disabled={rest.isDisabled}
        readOnly={rest.isReadOnly}
      />
      <Button view='only icon' icon={Icon.Calendar} className={style.button} />
    </div>
  );
};

export default DatePicker;

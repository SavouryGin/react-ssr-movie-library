import Button from '../button';
import ErrorLabel from '../error-label';
import Label from '../label';
import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { ButtonView } from 'enums/button-view';
import { DatePickerProps } from 'types/controls';
import { Icon } from 'enums/icon';
import { MAX_DATE, MIN_DATE } from './constants';

const DatePicker = ({ className, label, defaultInputValue, meta, input, ...rest }: DatePickerProps) => {
  const [inputValue, setInputValue] = useState<string>(defaultInputValue || '');

  const inputClass = classNames(style.input, { [className as string]: !!className });
  const id = useMemo(() => rest.id || `date_picker_${input.name}`, [rest.id]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || '';
    setInputValue(value);

    input.onChange(e);
  };

  return (
    <div className={inputClass}>
      <Label inputId={id} labelText={label || ''} />
      <input
        {...rest}
        type='date'
        name={input.name}
        id={id}
        value={inputValue}
        onChange={onInputChange}
        min={rest.min || MIN_DATE}
        max={rest.max || MAX_DATE}
        className={style.field}
        disabled={rest.isDisabled}
        readOnly={rest.isReadOnly}
      />
      <Button view={ButtonView.Icon} icon={Icon.Calendar} className={style.button} />
      <ErrorLabel message={meta.touched && meta.error} />
    </div>
  );
};

export default DatePicker;

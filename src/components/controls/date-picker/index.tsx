import Button from '../button';
import Label from '../label';
import React, { useContext, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { ButtonView } from 'enums/button-view';
import { DatePickerProps, FormContextProps } from 'types/controls';
import { FormContext } from '../form';
import { Icon } from 'enums/icon';
import { MAX_DATE, MIN_DATE } from './constants';

const DatePicker = ({ name, onChange, className, label, defaultValue, error, ...rest }: DatePickerProps) => {
  const formContext = useContext<FormContextProps>(FormContext);
  const [inputValue, setInputValue] = useState<string>(defaultValue || '');

  const { onChangeInput } = formContext;
  const inputClass = classNames(style.input, { [className as string]: !!className });
  const id = useMemo(() => rest.id || `date_picker_${name}`, [rest.id]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || '';
    setInputValue(value);

    if (onChangeInput) {
      onChangeInput(e);
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={inputClass}>
      <Label inputId={id} labelText={label} />
      <input
        {...rest}
        type='date'
        name={name}
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
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
};

export default DatePicker;

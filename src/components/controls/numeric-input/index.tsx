import ErrorLabel from '../error-label';
import Label from '../label';
import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { NumericInputProps } from 'types/controls';

const NumericInput = ({ className, label, defaultInputValue, meta, input, ...rest }: NumericInputProps) => {
  const [inputValue, setInputValue] = useState<number>(defaultInputValue || 0);

  const inputClass = classNames(style.input, { [className as string]: !!className });
  const id = useMemo(() => rest.id || `numeric_input_${input.name}`, [rest.id]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value) || 0;
    setInputValue(value);

    input.onChange(e);
  };

  return (
    <div className={inputClass}>
      {label && <Label inputId={id} labelText={label} />}
      <input
        {...rest}
        type='number'
        role='textbox'
        name={input.name}
        id={id}
        value={inputValue}
        onChange={onInputChange}
        className={style.field}
        disabled={rest.isDisabled}
        readOnly={rest.isReadOnly}
      />
      <ErrorLabel message={meta.touched && meta.error} />
    </div>
  );
};

export default NumericInput;

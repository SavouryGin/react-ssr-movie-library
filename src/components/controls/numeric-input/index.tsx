import Label from '../label';
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContext } from '../form';
import { NumericInputProps } from 'types/controls';

const NumericInput = ({ name, onChange, className, label, ...rest }: NumericInputProps) => {
  const formContext = useContext(FormContext);
  const { onChangeInput } = formContext;
  const inputClass = classNames(style.input, { [`${className}`]: !!className });
  const [inputValue, setInputValue] = useState(rest.defaultValue || '');
  const id = rest.id || `numeric_input_${name}`;

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
      {label && <Label inputId={id} labelText={label} />}
      <input
        type='number'
        name={name}
        id={id}
        value={inputValue}
        onChange={onInputChange}
        onBlur={rest.onBlur}
        onFocus={rest.onFocus}
        className={style.field}
        max={rest.max}
        min={rest.min}
        step={rest.step}
        placeholder={rest.placeholder}
        disabled={rest.isDisabled}
        readOnly={rest.isReadOnly}
      />
    </div>
  );
};

export default NumericInput;

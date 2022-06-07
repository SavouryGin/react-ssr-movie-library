import Label from '../label';
import React, { useContext, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContext } from '../form';
import { NumericInputProps } from 'types/controls';

const NumericInput = ({ name, onChange, className, label, ...rest }: NumericInputProps) => {
  const formContext = useContext(FormContext);
  const [inputValue, setInputValue] = useState<number>(rest.defaultValue || 0);

  const { onChangeInput } = formContext;
  const inputClass = classNames(style.input, { [className as string]: !!className });
  const id = useMemo(() => rest.id || `numeric_input_${name}`, [rest.id]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value) || 0;
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

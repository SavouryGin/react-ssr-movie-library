import Label from '../label';
import React, { useContext, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContext } from '../form';
import { FormContextProps, NumericInputProps } from 'types/controls';

const NumericInput = ({ name, onChange, className, label, defaultValue, error, ...rest }: NumericInputProps) => {
  const formContext = useContext<FormContextProps>(FormContext);
  const [inputValue, setInputValue] = useState<number>(defaultValue || 0);

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
      onChange(e);
    }
  };

  return (
    <div className={inputClass}>
      {label && <Label inputId={id} labelText={label} />}
      <input
        {...rest}
        type='number'
        name={name}
        id={id}
        value={inputValue}
        onChange={onInputChange}
        className={style.field}
        disabled={rest.isDisabled}
        readOnly={rest.isReadOnly}
      />
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
};

export default NumericInput;

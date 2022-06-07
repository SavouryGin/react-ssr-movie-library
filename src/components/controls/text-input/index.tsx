import Label from '../label';
import React, { useContext, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContext } from '../form';
import { TextInputProps } from 'types/controls';

const TextInput = ({ name, onChange, className, label, ...rest }: TextInputProps) => {
  const formContext = useContext(FormContext);
  const [inputValue, setInputValue] = useState<string>(rest.defaultValue || '');

  const { onChangeInput } = formContext;
  const inputClass = classNames(style.input, { [className as string]: !!className });
  const id = useMemo(() => rest.id || `text_input_${name}`, [rest.id]);

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
        type='text'
        name={name}
        id={id}
        value={inputValue}
        onChange={onInputChange}
        onBlur={rest.onBlur}
        onFocus={rest.onFocus}
        placeholder={rest.placeholder || 'Please type...'}
        className={style.field}
        disabled={rest.isDisabled}
        readOnly={rest.isReadOnly}
        maxLength={rest.maxLength}
        minLength={rest.minLength}
        autoComplete={rest.isAutocomplete ? 'on' : 'off'}
      />
    </div>
  );
};

export default TextInput;

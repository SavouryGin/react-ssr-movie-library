import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContext } from '../form';
import { TextInputProps } from 'types/controls';

function TextInput({ name, onChange, className, ...rest }: TextInputProps): React.ReactElement {
  const formContext = useContext(FormContext);
  const { onChangeInput } = formContext;
  const inputClass = classNames(style.input, { [`${className}`]: !!className });
  const [inputValue, setInputValue] = useState(rest.defaultValue || '');

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
      <input
        type='text'
        name={name}
        id={rest.id || `text_input_${name}`}
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
}

export default TextInput;

import ErrorLabel from '../error-label';
import Label from '../label';
import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { TextInputProps } from 'types/controls';

const TextInput = ({ className, label, defaultInputValue, meta, input, ...rest }: TextInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const inputClass = classNames(style.input, { [className as string]: !!className });
  const id = useMemo(() => rest.id || `text_input_${input.name}`, [rest.id]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || '';
    setInputValue(value);

    input.onChange(e);
  };

  useEffect(() => {
    setInputValue(defaultInputValue || '');
  }, [defaultInputValue]);

  return (
    <div className={inputClass}>
      {label && <Label inputId={id} labelText={label} />}
      <input
        {...rest}
        type='text'
        name={input.name}
        id={id}
        value={inputValue}
        onChange={onInputChange}
        placeholder={rest.placeholder || 'Please type...'}
        className={style.field}
        disabled={rest.isDisabled}
        readOnly={rest.isReadOnly}
        autoComplete={rest.isAutocomplete ? 'on' : 'off'}
      />
      <ErrorLabel message={meta.touched && meta.error} />
    </div>
  );
};

export default TextInput;

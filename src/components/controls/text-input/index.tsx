import Label from '../label';
import React, { useContext, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContext } from '../form';
import { FormContextProps, TextInputProps } from 'types/controls';

const TextInput = ({ name, onChange, className, label, defaultValue, ...rest }: TextInputProps) => {
  const formContext = useContext<FormContextProps>(FormContext);
  const [inputValue, setInputValue] = useState<string>(defaultValue || '');

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
        {...rest}
        type='text'
        name={name}
        id={id}
        value={inputValue}
        onChange={onInputChange}
        placeholder={rest.placeholder || 'Please type...'}
        className={style.field}
        disabled={rest.isDisabled}
        readOnly={rest.isReadOnly}
        autoComplete={rest.isAutocomplete ? 'on' : 'off'}
      />
    </div>
  );
};

export default TextInput;

import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types/basic';
import { FormContext } from '../form';
import { InputHandlersProps } from 'types/controls';
import './styles.scss';

export type TextInputProps = CommonProps &
  InputHandlersProps & {
    name: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isInvalid?: boolean;
    isAutocomplete?: boolean;
    maxLength?: number;
    minLength?: number;
    value?: string;
  };

function TextInput({ name, onChange, className, ...rest }: TextInputProps): React.ReactElement {
  const formContext = useContext(FormContext);
  const { onChangeInput } = formContext;
  const inputClass = classNames('text-input', { [`${className}`]: !!className });
  const id = rest.id || `text_input_${name}`;
  const placeholderText = rest.placeholder || 'Please type...';
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
        id={id}
        value={inputValue}
        onChange={onInputChange}
        onBlur={rest.onBlur}
        onFocus={rest.onFocus}
        placeholder={placeholderText}
        className='text-input__field'
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

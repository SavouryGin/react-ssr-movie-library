import Label from '../label';
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContext } from '../form';
import { TextAreaProps } from 'types/controls';

const TextArea = ({ className, name, label, onChange, ...rest }: TextAreaProps) => {
  const areaClass = classNames(style.area, { [`${className}`]: !!className });
  const formContext = useContext(FormContext);
  const { onChangeInput } = formContext;
  const [inputValue, setInputValue] = useState(rest.defaultValue || '');
  const id = rest.id || `textarea_${name}`;

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    <div className={areaClass}>
      {label && <Label inputId={id} labelText={label} />}
      <textarea
        name={name}
        id={id}
        value={inputValue}
        onChange={onTextAreaChange}
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

export default TextArea;

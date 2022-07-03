import Label from '../label';
import React, { useContext, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContext } from '../form';
import { FormContextProps, TextAreaProps } from 'types/controls';

const TextArea = ({ className, name, label, onChange, defaultValue, ...rest }: TextAreaProps) => {
  const formContext = useContext<FormContextProps>(FormContext);
  const [inputValue, setInputValue] = useState<string>(defaultValue || '');

  const areaClass = classNames(style.area, { [className as string]: !!className });
  const { onChangeInput } = formContext;
  const id = useMemo(() => rest.id || `textarea_${name}`, [rest.id]);

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value || '';
    setInputValue(value);

    if (onChangeInput) {
      onChangeInput(e);
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={areaClass}>
      {label && <Label inputId={id} labelText={label} />}
      <textarea
        {...rest}
        name={name}
        id={id}
        value={inputValue}
        onChange={onTextAreaChange}
        placeholder={rest.placeholder || 'Please type...'}
        className={style.field}
        disabled={rest.isDisabled}
        readOnly={rest.isReadOnly}
        autoComplete={rest.isAutocomplete ? 'on' : 'off'}
      />
    </div>
  );
};

export default TextArea;

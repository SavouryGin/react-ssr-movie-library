import ErrorLabel from '../error-label';
import Label from '../label';
import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { TextAreaProps } from 'types/controls';

const TextArea = ({ className, label, defaultInputValue, meta, input, ...rest }: TextAreaProps) => {
  const [inputValue, setInputValue] = useState<string>(defaultInputValue || '');

  const areaClass = classNames(style.area, { [className as string]: !!className });
  const id = useMemo(() => rest.id || `textarea_${input.name}`, [rest.id]);

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value || '';
    setInputValue(value);

    input.onChange(e);
  };

  return (
    <div className={areaClass}>
      {label && <Label inputId={id} labelText={label} />}
      <textarea
        {...rest}
        name={input.name}
        id={id}
        value={inputValue}
        onChange={onTextAreaChange}
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

export default TextArea;

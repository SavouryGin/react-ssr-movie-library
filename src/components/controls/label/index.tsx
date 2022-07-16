import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { LabelProps } from 'types/controls';

const Label = ({ className, inputId, labelText, labelId }: LabelProps) => {
  const labelClass = classNames(style.label, { [className as string]: !!className });

  return (
    <label className={labelClass} htmlFor={inputId} id={labelId}>
      {labelText}
    </label>
  );
};

export default Label;

import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { LabelProps } from 'types/controls';

const Label = ({ className, inputId, labelText }: LabelProps) => {
  const labelClass = classNames(style.label, { [className as string]: !!className });

  return (
    <label className={labelClass} htmlFor={inputId}>
      {labelText}
    </label>
  );
};

export default Label;

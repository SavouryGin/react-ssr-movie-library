import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { SpinnerProps } from 'types/basic';

const Spinner = ({ size = 64, className }: SpinnerProps) => {
  const spinnerClass = classNames(style.spinner, { [className as string]: !!className });

  return (
    <div className={spinnerClass}>
      <div className={style.circle} style={{ width: size, height: size }} />
    </div>
  );
};

export default Spinner;

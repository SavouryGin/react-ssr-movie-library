import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { SpinnerProps } from 'types/basic';

const Spinner = ({ size = 64, className }: SpinnerProps) => {
  const circleClass = classNames(style.circle, { [className as string]: !!className });

  return (
    <div className={style.spinner}>
      <div className={circleClass} style={{ width: size, height: size }} />
    </div>
  );
};

export default Spinner;

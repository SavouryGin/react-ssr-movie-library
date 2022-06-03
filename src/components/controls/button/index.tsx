import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { ButtonProps } from 'types/controls';

const Button = ({ type, text, onClick, className, view = 'primary', ...rest }: ButtonProps) => {
  const buttonText = text || 'Button';
  const buttonType = type || 'button';
  const buttonClass = classNames(style.button, { [`${className}`]: !!className, [style.secondary]: view === 'secondary' });

  return (
    <button className={buttonClass} type={buttonType} onClick={onClick} title={rest.title} disabled={rest.isDisabled}>
      {buttonText}
    </button>
  );
};

export default Button;

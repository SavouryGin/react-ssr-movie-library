import React from 'react';
import classNames from 'classnames';
import icons from './icons.module.scss';
import style from './style.module.scss';
import { ButtonProps } from 'types/controls';

const Button = ({ type, text, onClick, className, icon, view = 'primary', ...rest }: ButtonProps) => {
  const buttonText = text;
  const buttonType = type || 'button';
  const buttonClass = classNames(style.button, {
    [`${className}`]: !!className,
    [style.secondary]: view === 'secondary',
    [style.icon]: view === 'only icon',
  });
  const contentClass = classNames(style.content, icons[icon || '']);

  return (
    <button className={buttonClass} type={buttonType} onClick={onClick} title={rest.title} disabled={rest.isDisabled}>
      <span className={contentClass}>{buttonText}</span>
    </button>
  );
};

export default Button;

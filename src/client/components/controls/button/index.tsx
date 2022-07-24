import React from 'react';
import classNames from 'classnames';
import iconStyle from './icons.module.scss';
import style from './style.module.scss';
import { ButtonProps } from 'types/controls';
import { ButtonView } from 'enums/button-view';

const Button = ({ type, text, onClick, className, icon, view = ButtonView.Primary, isDisabled, ...rest }: ButtonProps) => {
  const buttonText = text;
  const buttonType = type || 'button';
  const buttonClass = classNames(style.button, {
    [className as string]: !!className,
    [style.secondary]: view === ButtonView.Secondary,
    [style.icon]: view === ButtonView.Icon,
  });
  const contentClass = classNames(style.content, iconStyle[icon || '']);

  return (
    <button className={buttonClass} type={buttonType} onClick={onClick} title={rest.title} disabled={isDisabled} {...rest}>
      <span className={contentClass}>{buttonText}</span>
    </button>
  );
};

export default Button;

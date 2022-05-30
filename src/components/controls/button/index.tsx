import React from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types/basic';
import './styles.scss';

type ButtonProps = CommonProps & {
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  title?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  view?: 'primary' | 'secondary';
};

const Button = ({ type, text, onClick, className, view = 'primary', ...rest }: ButtonProps) => {
  const buttonText = text || 'Button';
  const buttonType = type || 'button';
  const buttonClass = classNames('button', { [`${className}`]: !!className, button__secondary: view === 'secondary' });

  return (
    <button className={buttonClass} type={buttonType} onClick={onClick} title={rest.title} disabled={rest.isDisabled}>
      {buttonText}
    </button>
  );
};

export default Button;

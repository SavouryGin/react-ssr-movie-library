import React from 'react';
import style from './style.module.scss';

const ErrorLabel = ({ message }: { message?: string }) => {
  return message ? <span className={style.error}>{message}</span> : null;
};

export default ErrorLabel;

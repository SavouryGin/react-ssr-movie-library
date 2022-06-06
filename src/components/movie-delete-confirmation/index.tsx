import Button from 'components/controls/button';
import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { MovieDeleteConfirmationProps } from 'types/movies';

const DeleteConfirmation = ({ className, onConfirm }: MovieDeleteConfirmationProps) => {
  const confirmClass = classNames(style.confirm, { [`${className}`]: !!className });

  return (
    <div className={confirmClass}>
      <p>Are you sure you want to delete this movie?</p>
      <Button onClick={onConfirm} text='Confirm' />
    </div>
  );
};

export default DeleteConfirmation;

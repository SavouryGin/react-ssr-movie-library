import Button from 'components/controls/button';
import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { Icon } from 'enums/icon';
import { MovieMenuProps } from 'types/movies';

const MovieMenu = ({ onClose, className }: MovieMenuProps) => {
  const menuClass = classNames(style.menu, { [`${className}`]: !!className });

  return (
    <menu className={menuClass}>
      <Button onClick={onClose} icon={Icon.Close} view='only icon' className={style.close} />
      <li className={style.item}>Edit</li>
      <li className={style.item}>Delete</li>
    </menu>
  );
};

export default MovieMenu;

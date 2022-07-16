import Button from 'components/controls/button';
import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { ButtonView } from 'enums/button-view';
import { Icon } from 'enums/icon';
import { MovieMenuProps } from 'types/movies';

const MovieMenu = ({ className, onClose, editMovie, deleteMovie }: MovieMenuProps) => {
  const menuClass = classNames(style.menu, { [`${className}`]: !!className });

  return (
    <menu className={menuClass} role='menu'>
      <Button onClick={onClose} icon={Icon.Close} view={ButtonView.Icon} className={style.close} />
      <li className={style.item} onClick={editMovie}>
        Edit
      </li>
      <li className={style.item} onClick={deleteMovie}>
        Delete
      </li>
    </menu>
  );
};

export default MovieMenu;

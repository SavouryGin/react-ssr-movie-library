import Button from 'components/controls/button';
import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { CommonProps } from 'types/basic';

type HeaderProps = CommonProps;

const Header = ({ className }: HeaderProps) => {
  const headerClass = classNames(style.wrapper, { [`${className}`]: !!className });

  const onAddMovieClick = () => {
    // TODO: Implement movie adding
    console.log('Add movie');
  };

  return (
    <header className={headerClass}>
      <div className={style.content}>
        <span>
          <strong>netflix</strong>roulette
        </span>
        <Button text='+ Add movie' title='Add movie' view='secondary' onClick={onAddMovieClick} />
      </div>
    </header>
  );
};

export default Header;

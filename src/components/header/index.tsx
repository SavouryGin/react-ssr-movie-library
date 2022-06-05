import Button from 'components/controls/button';
import ModalWindow from 'components/modal-window';
import MovieEdit from 'components/movie-edit';
import React, { useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { CommonProps } from 'types/basic';
import { Icon } from 'enums/icon';

type HeaderProps = CommonProps;

const Header = ({ className }: HeaderProps) => {
  const headerClass = classNames(style.wrapper, { [`${className}`]: !!className });
  const [isAddMovieOpened, setIsAddMovieOpened] = useState(false);

  const onAddMovieClick = () => {
    // TODO: Implement movie adding
    setIsAddMovieOpened(true);
    console.log('Add movie');
  };

  const closeAddMovie = () => {
    setIsAddMovieOpened(false);
  };

  return (
    <header className={headerClass}>
      <div className={style.content}>
        <span>
          <strong className={Icon.Calendar}>netflix</strong>roulette
        </span>
        <Button text='Add movie' title='Add movie' view='secondary' onClick={onAddMovieClick} icon={Icon.Add} />
      </div>
      <ModalWindow isOpened={isAddMovieOpened} onClose={closeAddMovie} title={'Add movie'} content={<MovieEdit />} />
    </header>
  );
};

export default Header;

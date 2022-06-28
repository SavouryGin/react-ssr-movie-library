import Button from 'components/controls/button';
import ModalWindow from 'components/modal-window';
import MovieEdit from 'components/movie/edit';
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { ButtonView } from 'enums/button-view';
import { CommonProps } from 'types/basic';
import { Icon } from 'enums/icon';

interface HeaderProps extends CommonProps {}

const Header = ({ className }: HeaderProps) => {
  const [isAddMovieOpened, setIsAddMovieOpened] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  const headerClass = classNames(style.wrapper, { [className as string]: !!className });

  useEffect(() => {
    setElement(modalRef.current);
  }, []);

  const onAddMovieClick = () => {
    setIsAddMovieOpened(true);
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
        <Button text='Add movie' title='Add movie' view={ButtonView.Secondary} onClick={onAddMovieClick} icon={Icon.Add} />
      </div>
      <div ref={modalRef}>
        {element && (
          <ModalWindow element={element} isOpened={isAddMovieOpened} onClose={closeAddMovie} title={'Add movie'} content={<MovieEdit />} />
        )}
      </div>
    </header>
  );
};

export default Header;

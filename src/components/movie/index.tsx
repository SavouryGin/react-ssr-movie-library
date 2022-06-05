import Button from 'components/controls/button';
import Image from 'components/image';
import MovieMenu from 'components/movie-menu';
import React, { useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { Icon } from 'enums/icon';
import { MovieProps } from 'types/movies';

const Movie = ({ className, title, genres, year, imagePath }: MovieProps) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const movieClass = classNames(style.movie, { [`${className}`]: !!className });

  const openMenu = () => {
    setIsMenuOpened(true);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <div className={movieClass}>
      {isMenuOpened ? (
        <MovieMenu onClose={closeMenu} />
      ) : (
        <Button onClick={openMenu} icon={Icon.Menu} view='only icon' className={style.button} />
      )}
      <Image path={imagePath} altText={`Banner for "${title}"`} className={style.image} />
      <p className={style.title}>{title}</p>
      <p className={style.year}>{year}</p>
      <p className={style.genres}>{genres.join(', ')}</p>
    </div>
  );
};

export default Movie;

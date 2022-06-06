import Button from 'components/controls/button';
import Image from 'components/image';
import MovieMenu from 'components/movie-menu';
import React, { useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { Icon } from 'enums/icon';
import { MovieProps } from 'types/movies';

const Movie = ({ className, title, genres, date, ...rest }: MovieProps) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const movieClass = classNames(style.movie, { [`${className}`]: !!className });
  const year = new Date(date).getFullYear();
  const fallbackImagePath = 'assets/images/Fallback.jpg';
  const genresList = genres.map((item) => item.label).join(', ');

  const openMenu = () => {
    setIsMenuOpened(true);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <div className={movieClass} onMouseLeave={closeMenu}>
      {isMenuOpened ? (
        <MovieMenu onClose={closeMenu} />
      ) : (
        <Button onClick={openMenu} icon={Icon.Menu} view='only icon' className={style.button} />
      )}
      <Image path={rest.imagePath || fallbackImagePath} altText={`Banner for "${title}"`} className={style.image} />
      <p className={style.title}>{title}</p>
      <p className={style.year}>{year}</p>
      <p className={style.genres}>{genresList}</p>
    </div>
  );
};

export default Movie;

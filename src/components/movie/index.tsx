import Button from 'components/controls/button';
import Image from 'components/image';
import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { Icon } from 'enums/icon';
import { MovieProps } from 'types/movies';

const Movie = ({ className, title, genres, year, imagePath }: MovieProps) => {
  const movieClass = classNames(style.movie, { [`${className}`]: !!className });

  return (
    <div className={movieClass}>
      <Button onClick={() => console.log(title)} icon={Icon.Menu} view='only icon' className={style.menu} />
      <Image path={imagePath} altText={`Banner for "${title}"`} className={style.image} />
      <p className={style.title}>{title}</p>
      <p className={style.year}>{year}</p>
      <p className={style.genres}>{genres.join(', ')}</p>
    </div>
  );
};

export default Movie;

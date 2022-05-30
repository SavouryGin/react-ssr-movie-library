import Image from 'components/image';
import React from 'react';
import classNames from 'classnames';
import { MovieProps } from 'types/movies';

const Movie = ({ className, title, genres, year, imagePath }: MovieProps) => {
  const movieClass = classNames('movie', { [`${className}`]: !!className });

  return (
    <div className={movieClass}>
      <Image path={imagePath} altText={`Banner of "${title}"`} className={'movie__image'} />
      <p className='movie__title'>{title}</p>
      <p className='movie__year'>{year}</p>
      <p className='movie__genres'>{genres.join(', ')}</p>
    </div>
  );
};

export default Movie;

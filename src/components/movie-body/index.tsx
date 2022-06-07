import Image from 'components/image';
import React, { useMemo } from 'react';
import style from './style.module.scss';
import { FALLBACK_IMAGE_PATH } from './constants';
import { MovieBodyProps } from 'types/movies';

const MovieBody = ({ title, date, genres, imagePath }: MovieBodyProps) => {
  const year = useMemo(() => new Date(date).getFullYear(), [date]);
  const genresList = useMemo(() => genres.map((item) => item.label).join(', '), [genres]);

  return (
    <>
      <Image path={imagePath || FALLBACK_IMAGE_PATH} altText={`Banner for "${title}"`} className={style.image} />
      <p className={style.title}>{title}</p>
      <p className={style.year}>{year}</p>
      <p className={style.genres}>{genresList}</p>
    </>
  );
};

export default MovieBody;

import Image from 'components/image';
import React, { useCallback, useContext, useMemo } from 'react';
import style from './style.module.scss';
import { FALLBACK_IMAGE_PATH } from './constants';
import { MovieBodyProps } from 'types/movies';
import { MovieContext } from 'pages/home';

const MovieBody = ({ title, date, genres, imagePath, id }: MovieBodyProps) => {
  const movieContext = useContext(MovieContext);

  const year = useMemo(() => new Date(date).getFullYear(), [date]);
  const genresList = useMemo(() => genres.map((item) => item.label).join(', '), [genres]);
  const { onClickMovie } = movieContext;

  const onClickMovieImage = useCallback(() => {
    onClickMovie(id);
  }, [id]);

  return (
    <>
      <Image
        path={imagePath || FALLBACK_IMAGE_PATH}
        altText={`Banner for "${title}"`}
        className={style.image}
        onClickImage={onClickMovieImage}
      />
      <p className={style.title}>{title}</p>
      <p className={style.year}>{year}</p>
      <p className={style.genres}>{genresList}</p>
    </>
  );
};

export default MovieBody;

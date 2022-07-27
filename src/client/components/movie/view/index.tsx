import Button from 'components/controls/button';
import Image from 'components/image';
import React, { useEffect, useMemo } from 'react';
import Spinner from 'components/spinner';
import classNames from 'classnames';
import style from './style.module.scss';
import { ButtonView } from 'enums/button-view';
import { FALLBACK_IMAGE_PATH } from 'components/image/constants';
import { Icon } from 'enums/icon';
import { MovieViewProps } from 'types/movies';
import { defaultMovie } from '__mocks__/movie-list';
import { getDuration } from './helpers';
import { getIsSelectedMovieLoading, getSelectedMovie } from 'store/movies/selectors';
import { loadMovieById } from 'store/movies/thunks';
import { useAppDispatch, useAppSelector } from 'hooks/common';

const MovieView = ({ className, movieId, onCloseView }: MovieViewProps) => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(getSelectedMovie) || defaultMovie;
  const isLoading = useAppSelector(getIsSelectedMovieLoading);

  const { date, genres, title, imagePath, rating, runtime, overview } = movie;
  const year = useMemo(() => new Date(date).getFullYear(), [date]);
  const genresList = useMemo(() => genres.map((item) => item.label).join(', '), [genres.length]);
  const duration = useMemo(() => getDuration(runtime), [runtime]);

  useEffect(() => {
    dispatch(loadMovieById(movieId));
  }, [movieId]);

  const viewClass = classNames(style.view, { [className as string]: !!className });

  return (
    <div className={viewClass}>
      {isLoading && <Spinner className={style.spinner} />}
      <Button view={ButtonView.Icon} onClick={onCloseView} icon={Icon.Search} className={style.button} />
      <Image path={imagePath || FALLBACK_IMAGE_PATH} altText={`Banner for "${title}"`} className={style.image} />
      <h2 className={style.title}>
        {title} <span className={style.rating}>{rating}</span>
      </h2>
      <p className={style.genres}>{genresList}</p>
      <p className={style.year}>
        {year} <span className={style.duration}>{duration}</span>
      </p>
      <p className={style.overview}>{overview}</p>
    </div>
  );
};

export default MovieView;

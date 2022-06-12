import Button from 'components/controls/button';
import Image from 'components/image';
import React, { useMemo } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { ButtonView } from 'enums/button-view';
import { FALLBACK_IMAGE_PATH } from 'components/movie-body/constants';
import { Icon } from 'enums/icon';
import { MovieViewProps } from 'types/movies';
import { getDuration } from './helpers';
import { movieList } from '__mocks__/movie-list';

const MovieView = ({ className, movieId, onCloseView }: MovieViewProps) => {
  const movie = movieList.find((item) => item.id === movieId);
  if (!movie) {
    return null;
  }
  const { date, genres, title, imagePath, rating, runtime, overview } = movie;
  const viewClass = classNames(style.view, { [className as string]: !!className });
  const year = useMemo(() => new Date(date).getFullYear(), [movie]);
  const genresList = useMemo(() => genres.map((item) => item.label).join(', '), [movie]);
  const duration = useMemo(() => getDuration(runtime), [movie]);

  return (
    <div className={viewClass}>
      <Button view={ButtonView.Icon} onClick={onCloseView} icon={Icon.Close} className={style.button} />
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

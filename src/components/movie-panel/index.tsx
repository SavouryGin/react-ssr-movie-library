import ErrorBoundary from 'components/error-boundary';
import Movie from 'components/movie';
import React, { useEffect, useMemo, useState } from 'react';
import Select from 'components/controls/select';
import Spinner from 'components/spinner';
import classNames from 'classnames';
import style from './style.module.scss';
import { Guid } from 'guid-typescript';
import { MoviePanelProps } from 'types/movies';
import { SelectEntity, SortParams } from 'types/controls';
import { getIsMoviesLoadingStatus, getMovieList } from 'store/movies/selectors';
import { loadMovies } from 'store/movies/thunks';
import { sortOptions } from './constants';
import { useAppDispatch, useAppSelector } from 'hooks';

const MoviePanel = ({ className, panelGenre }: MoviePanelProps) => {
  const dispatch = useAppDispatch();
  const [sortOption, setSortOption] = useState<SelectEntity>(sortOptions[0]);
  const moviesList = useAppSelector(getMovieList);
  const isLoading = useAppSelector(getIsMoviesLoadingStatus);
  const params: SortParams = useMemo(() => {
    return panelGenre ? { filter: [panelGenre], ...(sortOption.params as SortParams) } : (sortOption.params as SortParams);
  }, [sortOption.value, panelGenre]);

  useEffect(() => {
    dispatch(loadMovies(params));
  }, [sortOption, panelGenre]);

  const panelClass = classNames(style.panel, { [className as string]: !!className });
  const movies = moviesList.map((item) => {
    return (
      <li key={Guid.create().toString()} className={style.item}>
        <Movie {...item} />
      </li>
    );
  });

  const takeOption = (option: SelectEntity) => {
    setSortOption(option);
  };

  return (
    <div className={panelClass}>
      {isLoading && <Spinner />}
      <Select
        name='sortMovies'
        options={sortOptions}
        defaultOption={sortOptions[0]}
        label='Sort by'
        className={style.sort}
        passOption={takeOption}
      />
      <p className={style.counter}>
        <strong>{`${moviesList.length}`}</strong> movies found
      </p>
      <ErrorBoundary>
        <ul className={style.list}>{movies}</ul>
      </ErrorBoundary>
    </div>
  );
};

export default MoviePanel;

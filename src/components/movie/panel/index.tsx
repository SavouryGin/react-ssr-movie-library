import ErrorBoundary from 'components/error-boundary';
import MovieItem from 'components/movie/item';
import React, { useEffect, useMemo, useState } from 'react';
import Select from 'components/controls/select';
import Spinner from 'components/spinner';
import classNames from 'classnames';
import style from './style.module.scss';
import { Guid } from 'guid-typescript';
import { MoviePanelProps } from 'types/movies';
import { SEARCH_PATH } from 'pages/app-router/constants';
import { SelectEntity, SortParams } from 'types/controls';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { getIsMoviesLoadingStatus, getMovieItems } from 'store/movies/selectors';
import { loadMovies } from 'store/movies/thunks';
import { moviesActions } from 'store/movies/slice';
import { sortOptions } from './constants';
import { useAppDispatch, useAppSelector } from 'hooks';

const MoviePanel = ({ className, panelGenre }: MoviePanelProps) => {
  const dispatch = useAppDispatch();
  const [sortOption, setSortOption] = useState<SelectEntity>(sortOptions[0]);
  const navigate = useNavigate();
  const movieItems = useAppSelector(getMovieItems);
  const isLoading = useAppSelector(getIsMoviesLoadingStatus);
  const params: SortParams = useMemo(() => {
    return panelGenre ? { filter: [panelGenre], ...(sortOption.params as SortParams) } : (sortOption.params as SortParams);
  }, [sortOption.value, panelGenre]);

  useEffect(() => {
    dispatch(loadMovies(params));
    dispatch(moviesActions.setParams(params));
  }, [sortOption, panelGenre]);

  useEffect(() => {
    if (panelGenre) {
      navigate({ pathname: SEARCH_PATH, search: `?${createSearchParams({ genre: panelGenre as string })}` });
    } else {
      navigate({ pathname: SEARCH_PATH });
    }
  }, [panelGenre]);

  const onChangeSortOption = () => {
    navigate({ pathname: SEARCH_PATH, search: `?${createSearchParams(sortOption?.params as URLSearchParams)}` });
  };

  const panelClass = classNames(style.panel, { [className as string]: !!className });
  const movies = movieItems.map((item) => {
    return (
      <li key={Guid.create().toString()} className={style.item}>
        <MovieItem {...item} />
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
        onChange={onChangeSortOption}
      />
      <p className={style.counter}>
        <strong>{`${movieItems.length}`}</strong> movies found
      </p>
      <ErrorBoundary>
        <ul className={style.list}>{movies}</ul>
      </ErrorBoundary>
    </div>
  );
};

export default MoviePanel;

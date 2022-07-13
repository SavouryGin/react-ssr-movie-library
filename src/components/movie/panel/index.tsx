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
import { createSearchParams, useLocation } from 'react-router-dom';
import { getIsMoviesLoadingStatus, getMovieItems } from 'store/movies/selectors';
import { loadMovies } from 'store/movies/thunks';
import { sortOptions } from './constants';
import { useAppDispatch, useAppSelector, useSortOptionsFromSearchParams } from 'hooks';

const MoviePanel = ({ className, panelGenre, navigate }: MoviePanelProps) => {
  const dispatch = useAppDispatch();
  const [sortOption, setSortOption] = useState<SelectEntity>(sortOptions[0]);
  const searchSortOptions = useSortOptionsFromSearchParams(useLocation().search);
  const movieItems = useAppSelector(getMovieItems);
  const isLoading = useAppSelector(getIsMoviesLoadingStatus);
  const params = useMemo(() => {
    return panelGenre ? { filter: [panelGenre], ...(sortOption.params as SortParams) } : (sortOption.params as SortParams);
  }, [sortOption.value, panelGenre]);

  const panelClass = classNames(style.panel, { [className as string]: !!className });
  const movies = movieItems.map((item) => {
    return (
      <li key={Guid.create().toString()} className={style.item}>
        <MovieItem {...item} />
      </li>
    );
  });

  useEffect(() => {
    dispatch(loadMovies(params));
    if (navigate) {
      navigate({ pathname: SEARCH_PATH, search: `?${createSearchParams(sortOption?.params)}` });
    }
  }, [sortOption]);

  useEffect(() => {
    dispatch(loadMovies(params));
    if (navigate) {
      navigate(
        panelGenre
          ? { pathname: SEARCH_PATH, search: `?${createSearchParams({ genre: panelGenre as string })}` }
          : { pathname: SEARCH_PATH },
      );
    }
  }, [panelGenre]);

  useEffect(() => {
    if (searchSortOptions) {
      const option =
        sortOptions.find(
          (item) => item.params && item.params.sortBy === searchSortOptions.sortBy && item.params.sortOrder === searchSortOptions.sortOrder,
        ) || sortOptions[0];

      setSortOption(option);
    }
  }, [searchSortOptions]);

  const takeOption = (option: SelectEntity) => {
    setSortOption(option);
  };

  return (
    <div className={panelClass}>
      {isLoading && <Spinner />}
      <Select
        name='sortMovies'
        options={sortOptions}
        defaultOption={sortOption}
        label='Sort by'
        className={style.sort}
        passOption={takeOption}
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

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
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { getIsMoviesLoadingStatus, getMovieItems } from 'store/movies/selectors';
import { loadMovies } from 'store/movies/thunks';
import { moviesActions } from 'store/movies/slice';
import { sortOptions } from './constants';
import { useAppDispatch, useAppSelector, useSortOptionsFromSearchParams } from 'hooks';

const MoviePanel = ({ className, panelGenre }: MoviePanelProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState<SelectEntity>(sortOptions[0]);
  const [searchParams] = useSearchParams();
  const searchSortOptions = useSortOptionsFromSearchParams(searchParams);

  const movieItems = useAppSelector(getMovieItems);
  const isLoading = useAppSelector(getIsMoviesLoadingStatus);
  const params: SortParams = useMemo(() => {
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
    loadData();
  }, [sortOption, panelGenre]);

  useEffect(() => {
    if (panelGenre) {
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
          (item) => item.params?.sortBy === searchSortOptions.sortBy && item.params?.sortOrder === searchSortOptions.sortOrder,
        ) || sortOptions[0];
      setSortOption(option);
    }
  }, [searchSortOptions]);

  const loadData = () => {
    dispatch(loadMovies(params));
    dispatch(moviesActions.setParams(params));
  };

  const onChangeSortOption = () => {
    navigate({ pathname: SEARCH_PATH, search: `?${createSearchParams(sortOption?.params)}` });
  };

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

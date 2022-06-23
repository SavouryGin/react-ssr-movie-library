import ErrorBoundary from 'components/error-boundary';
import Movie from 'components/movie';
import React, { useEffect, useState } from 'react';
import Select from 'components/controls/select';
import Spinner from 'components/spinner';
import classNames from 'classnames';
import style from './style.module.scss';
import { Guid } from 'guid-typescript';
import { MoviePanelProps } from 'types/movies';
import { SelectEntity } from 'types/controls';
import { getIsLoadingStatus, getMovieList } from 'store/movies/selectors';
import { loadMovies } from 'store/movies/thunks';
import { sortOptions } from './constants';
import { useAppDispatch } from 'hooks';
import { useSelector } from 'react-redux';

const MoviePanel = ({ className, panelGenre }: MoviePanelProps) => {
  const [sortOption, setSortOption] = useState<SelectEntity>(sortOptions[0]);
  // const [list, setList] = useState<MovieItem[]>([]);
  const dispatch = useAppDispatch();
  const list = useSelector(getMovieList);
  const isLoading = useSelector(getIsLoadingStatus);

  // useEffect(() => {
  //   setList(items);
  //   sortMovies();
  // }, [items]);

  useEffect(() => {
    //sortMovies();
  }, [sortOption]);

  // Initial data loading
  useEffect(() => {
    console.log('loading...');
    const genreFilter = panelGenre ? { filter: [panelGenre] } : undefined;
    dispatch(loadMovies(genreFilter));
  }, [panelGenre]);

  const panelClass = classNames(style.panel, { [className as string]: !!className });
  const movies = list.map((item) => {
    return (
      <li key={Guid.create().toString()} className={style.item}>
        <Movie {...item} />
      </li>
    );
  });

  const takeOption = (option: SelectEntity) => {
    setSortOption(option);
  };

  // const sortMovies = () => {
  //   const sorted = getSortedList(items, sortOption);
  //   setList(sorted);
  // };

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
        <strong>{`${list.length}`}</strong> movies found
      </p>
      <ErrorBoundary>
        <ul className={style.list}>{movies}</ul>
      </ErrorBoundary>
    </div>
  );
};

export default MoviePanel;

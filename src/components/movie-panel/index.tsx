import ErrorBoundary from 'components/error-boundary';
import Movie from 'components/movie';
import React, { useEffect, useState } from 'react';
import Select from 'components/controls/select';
import classNames from 'classnames';
import { Guid } from 'guid-typescript';
import { MovieItem, MoviePanelProps } from 'types/movies';
import { SelectEntity } from 'types/controls';
import { SortValue, sortOptions } from './constants';
import { compareReleaseDates, compareTitles } from './helpers';
import './styles.scss';

const MoviePanel = ({ className, items }: MoviePanelProps) => {
  const panelClass = classNames('movie-panel', { [`${className}`]: !!className });
  const [sortOption, setSortOption] = useState<SelectEntity>(sortOptions[0]);
  const [list, setList] = useState<MovieItem[]>([]);
  const takeOption = (option: SelectEntity) => {
    setSortOption(option);
  };

  const sortMovies = () => {
    if (sortOption.value === SortValue.Date) {
      const byRelease = [...items].sort(compareReleaseDates);
      setList(byRelease);
    }
    if (sortOption.value === SortValue.Title) {
      const byTitle = [...items].sort(compareTitles);
      setList(byTitle);
    }
  };

  useEffect(() => {
    setList(items);
    sortMovies();
  }, [items]);

  useEffect(() => {
    sortMovies();
  }, [sortOption]);

  const movies = list.map((item) => {
    return (
      <li key={Guid.create().toString()} className='movie-panel__item'>
        <Movie title={item.title} year={item.year} genres={item.genres} imagePath={item.imagePath} />
      </li>
    );
  });

  return (
    <div className={panelClass}>
      <Select
        name='sortMovies'
        options={sortOptions}
        defaultOption={sortOptions[0]}
        label='Sort by'
        className='movie-panel__sort'
        passOption={takeOption}
      />
      <p className='movie-panel__counter'>
        <strong>{`${list.length}`}</strong> movies found
      </p>
      <ErrorBoundary>
        <ul className='movie-panel__list'>{movies}</ul>
      </ErrorBoundary>
    </div>
  );
};

export default MoviePanel;

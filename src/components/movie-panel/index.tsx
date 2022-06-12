import ErrorBoundary from 'components/error-boundary';
import Movie from 'components/movie';
import React, { useEffect, useState } from 'react';
import Select from 'components/controls/select';
import classNames from 'classnames';
import style from './style.module.scss';
import { Guid } from 'guid-typescript';
import { MovieItem, MoviePanelProps } from 'types/movies';
import { SelectEntity } from 'types/controls';
import { SortingValues } from 'enums/sorting-values';
import { compareRatings, compareReleaseDates, compareRuntime, compareTitles } from './helpers';
import { sortOptions } from './constants';

const MoviePanel = ({ className, items }: MoviePanelProps) => {
  const [sortOption, setSortOption] = useState<SelectEntity>(sortOptions[0]);
  const [list, setList] = useState<MovieItem[]>([]);

  useEffect(() => {
    setList(items);
    sortMovies();
  }, [items]);

  useEffect(() => {
    sortMovies();
  }, [sortOption]);

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

  const sortMovies = () => {
    switch (sortOption.value) {
      case SortingValues.Date: {
        const byRelease = [...items].sort(compareReleaseDates);
        setList(byRelease);
        break;
      }

      case SortingValues.Title: {
        const byTitle = [...items].sort(compareTitles);
        setList(byTitle);
        break;
      }

      case SortingValues.Rating: {
        const byRating = [...items].sort(compareRatings);
        setList(byRating);
        break;
      }

      case SortingValues.Runtime: {
        const byRuntime = [...items].sort(compareRuntime);
        setList(byRuntime);
        break;
      }
    }
  };

  return (
    <div className={panelClass}>
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

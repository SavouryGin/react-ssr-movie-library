import Movie from 'components/movie';
import React from 'react';
import Select from 'components/controls/select';
import classNames from 'classnames';
import { Guid } from 'guid-typescript';
import { MoviePanelProps } from 'types/movies';
import './styles.scss';

const MoviePanel = ({ className, items }: MoviePanelProps) => {
  const panelClass = classNames('movie-panel', { [`${className}`]: !!className });

  const sortOptions = [
    {
      option: 'Release date',
      value: 'date',
    },
    {
      option: 'Title',
      value: 'title',
    },
  ];

  const movies = items.map((item) => {
    const id = Guid.create().toString();

    return (
      <li key={id} className='movie-panel__item'>
        <Movie title={item.title} year={item.year} genres={item.genres} imagePath={item.imagePath} />
      </li>
    );
  });

  return (
    <div className={panelClass}>
      <Select name='sortMovies' options={sortOptions} defaultOption={sortOptions[0]} label={'Sort by'} className={'movie-panel__sort'} />
      <p className='movie-panel__counter'>
        <strong>{`${movies.length}`}</strong> movies found
      </p>
      <ul className='movie-panel__list'>{movies}</ul>
    </div>
  );
};

export default MoviePanel;

import Movie from 'components/movie';
import React from 'react';
import classNames from 'classnames';
import { Guid } from 'guid-typescript';
import { MoviePanelProps } from 'types/movies';
import './styles.scss';

const MoviePanel = ({ className, items }: MoviePanelProps) => {
  const panelClass = classNames('movie-panel', { [`${className}`]: !!className });

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
      <p className='movie-panel__counter'>
        <strong>{`${movies.length}`}</strong> movies found
      </p>
      <ul className='movie-panel__list'>{movies}</ul>
    </div>
  );
};

export default MoviePanel;

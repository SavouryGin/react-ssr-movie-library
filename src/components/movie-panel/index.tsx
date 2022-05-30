import Movie from 'components/movie';
import React from 'react';
import classNames from 'classnames';
import { Guid } from 'guid-typescript';
import { MoviePanelProps } from 'types/movies';

const MoviePanel = ({ className, items }: MoviePanelProps) => {
  const panelClass = classNames('movie-panel', { [`${className}`]: !!className });

  const movies = items.map((item) => {
    const id = Guid.create().toString();

    return <Movie key={id} title={item.title} year={item.year} genres={item.genres} imagePath={item.imagePath} />;
  });

  return <ul className={panelClass}>{movies}</ul>;
};

export default MoviePanel;

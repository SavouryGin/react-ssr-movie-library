import { MovieItem } from 'types/movies';
import { defaultMovie, movieList } from '__mocks__/movie-list';
import { useEffect, useState } from 'react';

export const getDuration = (minutes: number): string => {
  if (minutes === 0) {
    return '0 min';
  }

  const hours = Math.trunc(minutes / 60);
  const min = minutes % 60;

  return `${hours}h ${min} min`;
};

export const useMovieSearch = (movieId: string): MovieItem => {
  const [movie, setMovie] = useState<MovieItem>(defaultMovie);

  useEffect(() => {
    // TODO: Replace with an API call
    const result = movieList.find((item) => item.id === movieId);

    if (result) {
      setMovie(result);
    }
  });

  return movie;
};

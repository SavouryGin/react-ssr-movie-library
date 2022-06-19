import ErrorBoundary from 'components/error-boundary';
import MovieSearchForm from 'components/movie-search-form';
import MovieView from 'components/movie-view';
import React, { useEffect, useState } from 'react';
import TabList from 'components/tab-list';
import style from './style.module.scss';
import { MovieContextProps } from 'types/movies';
import { homeTabs } from './constants';
import { loadAllMovies } from 'store/movies/thuks/load-all-movies';
import { useAppDispatch } from 'hooks';

export const MovieContext = React.createContext({} as MovieContextProps);

const Home = () => {
  const [movieId, setMovieId] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const onClickMovie = (id: string) => {
    setMovieId(id);
  };

  const onClickSearch = () => {
    setMovieId(null);
  };

  // Initial data loading
  useEffect(() => {
    console.log('loading...');
    dispatch(loadAllMovies());
  }, []);

  const homeHeader = movieId ? <MovieView movieId={movieId} onCloseView={onClickSearch} className={style.movie} /> : <MovieSearchForm />;

  return (
    <article className={style.home}>
      <ErrorBoundary>{homeHeader}</ErrorBoundary>
      <MovieContext.Provider value={{ onClickMovie }}>
        <TabList tabs={homeTabs} />
      </MovieContext.Provider>
    </article>
  );
};

export default Home;

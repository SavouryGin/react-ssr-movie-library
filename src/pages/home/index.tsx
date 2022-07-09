import ErrorBoundary from 'components/error-boundary';
import MovieSearchForm from 'components/movie/search-form';
import MovieView from 'components/movie/view';
import React, { useState } from 'react';
import TabList from 'components/tab-list';
import style from './style.module.scss';
import { MovieContextProps } from 'types/movies';
import { SEARCH_PATH } from 'pages/app-router/constants';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { homeTabs } from './constants';

export const MovieContext = React.createContext({} as MovieContextProps);

const Home = () => {
  const [movieId, setMovieId] = useState<string | null>(null);
  const navigate = useNavigate();

  const onClickMovie = (id: string) => {
    setMovieId(id);
    navigate({ pathname: SEARCH_PATH, search: `?${createSearchParams({ movie: id })}` });
  };

  const onClickSearch = () => {
    setMovieId(null);
    navigate({ pathname: SEARCH_PATH });
  };

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

import ErrorBoundary from 'components/error-boundary';
import MovieSearchForm from 'components/movie/search-form';
import MovieView from 'components/movie/view';
import React, { useEffect, useState } from 'react';
import TabList from 'components/tab-list';
import style from './style.module.scss';
import { MovieContextProps } from 'types/movies';
import { SEARCH_PATH } from 'pages/app-router/constants';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { homeTabs } from './constants';
import { useMovieIdFromSearchParams, useSearchQueryFromSearchParams, useSelectedTabFromSearchParams } from 'hooks';

export const MovieContext = React.createContext({} as MovieContextProps);

const Home = () => {
  const [movieId, setMovieId] = useState<string | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchTab = useSelectedTabFromSearchParams(searchParams);
  const searchQuery = useSearchQueryFromSearchParams(searchParams);
  const searchMovieId = useMovieIdFromSearchParams(searchParams);

  useEffect(() => {
    if (searchMovieId) {
      onClickMovie(searchMovieId);
    }
  }, [searchMovieId]);

  const onClickMovie = (id: string) => {
    setMovieId(id);
    navigate({ pathname: SEARCH_PATH, search: `?${createSearchParams({ movie: id })}` });
  };

  const onClickSearch = () => {
    setMovieId(null);
    navigate({ pathname: SEARCH_PATH });
  };

  const homeHeader = movieId ? (
    <MovieView movieId={movieId} onCloseView={onClickSearch} className={style.movie} />
  ) : (
    <MovieSearchForm searchQuery={searchQuery} />
  );

  return (
    <article className={style.home}>
      <ErrorBoundary>{homeHeader}</ErrorBoundary>
      <MovieContext.Provider value={{ onClickMovie }}>
        <TabList tabs={homeTabs} selectedTab={searchTab} />
      </MovieContext.Provider>
    </article>
  );
};

export default Home;

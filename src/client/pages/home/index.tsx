import ErrorBoundary from 'components/error-boundary';
import MoviePanel from 'components/movie/panel';
import MovieSearchForm from 'components/movie/search-form';
import MovieView from 'components/movie/view';
import React, { useEffect, useMemo, useState } from 'react';
import TabList from 'components/tab-list';
import style from './style.module.scss';
import { GENRE_TABS } from './constants';
import { MovieContextProps } from 'types/movies';
import { SEARCH_PATH } from 'pages/app-router/constants';
import { TabItem } from 'types/tabs';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { useMovieIdFromSearchParams, useSearchQueryFromSearchParams, useSelectedTabFromSearchParams } from 'hooks';

export const MovieContext = React.createContext({} as MovieContextProps);

const Home = () => {
  const [movieId, setMovieId] = useState<string | null>(null);
  const navigate = useNavigate();
  const searchString = useLocation().search;
  const searchTab = useSelectedTabFromSearchParams(searchString);
  const searchQuery = useSearchQueryFromSearchParams(searchString);
  const searchMovieId = useMovieIdFromSearchParams(searchString);

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

  const homeTabs: TabItem[] = useMemo(
    () => [
      {
        tabContent: <MoviePanel navigate={navigate} />,
        tabTitle: 'All',
        tabId: 'all-movies',
      },
      ...GENRE_TABS.map((genre) => ({
        tabContent: <MoviePanel panelGenre={genre} navigate={navigate} />,
        tabTitle: genre,
        tabId: `${genre}-movies`,
      })),
    ],
    [GENRE_TABS.length, searchString],
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

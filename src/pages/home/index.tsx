import ErrorBoundary from 'components/error-boundary';
import MoviePanel from 'components/movie-panel';
import MovieSearchForm from 'components/movie-search-form';
import MovieView from 'components/movie-view';
import React, { useState } from 'react';
import TabList from 'components/tab-list';
import style from './style.module.scss';
import { Genre } from 'enums/genre';
import { MovieContextProps } from 'types/movies';
import { TabItem } from 'types/tabs';

export const MovieContext = React.createContext({} as MovieContextProps);

const Home = () => {
  const [movieId, setMovieId] = useState<string | null>(null);

  const onClickMovie = (id: string) => {
    setMovieId(id);
  };

  const onClickSearch = () => {
    setMovieId(null);
  };

  const homeHeader = movieId ? <MovieView movieId={movieId} onCloseView={onClickSearch} className={style.movie} /> : <MovieSearchForm />;

  const homeTabs: TabItem[] = [
    {
      tabContent: <MoviePanel />,
      tabTitle: 'All',
      tabId: 'all-movies',
    },
    {
      tabContent: <MoviePanel panelGenre={Genre.Drama} />,
      tabTitle: Genre.Drama,
      tabId: 'drama-movies',
    },
    {
      tabContent: <MoviePanel panelGenre={Genre.Comedy} />,
      tabTitle: Genre.Comedy,
      tabId: 'comedy-movies',
    },
    {
      tabContent: <MoviePanel panelGenre={Genre.Animation} />,
      tabTitle: Genre.Animation,
      tabId: 'animation-movies',
    },
    {
      tabContent: <MoviePanel panelGenre={Genre.Adventure} />,
      tabTitle: Genre.Adventure,
      tabId: 'adventure-movies',
    },
    {
      tabContent: <MoviePanel panelGenre={Genre.Family} />,
      tabTitle: Genre.Family,
      tabId: 'family-movies',
    },
    {
      tabContent: <MoviePanel panelGenre={Genre.Action} />,
      tabTitle: Genre.Action,
      tabId: 'action-movies',
    },
  ];

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

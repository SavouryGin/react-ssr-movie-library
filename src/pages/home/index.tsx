import ErrorBoundary from 'components/error-boundary';
import MoviePanel from 'components/movie-panel';
import MovieSearchForm from 'components/movie-search-form';
import MovieView from 'components/movie-view';
import React, { useEffect, useState } from 'react';
import TabList from 'components/tab-list';
import style from './style.module.scss';
import { MovieContextProps } from 'types/movies';
import { TabItem } from 'types/tabs';
import { getMovieList } from 'store/movies/selectors';
import { loadAllMovies } from 'store/movies/thuks/load-all-movies';
import { useAppDispatch } from 'hooks';
import { useSelector } from 'react-redux';

export const MovieContext = React.createContext({} as MovieContextProps);

const Home = () => {
  const [movieId, setMovieId] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const movieList = useSelector(getMovieList);

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

  const homeTabs: TabItem[] = [
    {
      tabContent: <MoviePanel items={movieList} />,
      tabTitle: 'All',
      tabId: 'all-movies',
    },
    {
      tabContent: <MoviePanel items={movieList} />,
      tabTitle: 'Documentary',
      tabId: 'documentary-movies',
    },
    {
      tabContent: <MoviePanel items={movieList} />,
      tabTitle: 'Comedy',
      tabId: 'comedy-movies',
    },
    {
      tabContent: <MoviePanel items={movieList} />,
      tabTitle: 'Horror',
      tabId: 'horror-movies',
    },
    {
      tabContent: <MoviePanel items={movieList} />,
      tabTitle: 'Crime',
      tabId: 'crime-movies',
    },
    {
      tabContent: <MoviePanel items={movieList} />,
      tabTitle: 'Action',
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

import MovieSearchForm from 'components/movie-search-form';
import React, { useState } from 'react';
import TabList from 'components/tab-list';
import style from './style.module.scss';
import { homeTabs } from './constants';

export const MovieContext = React.createContext({} as MovieContextProps);

type MovieContextProps = {
  onClickMovie: (id: string) => void;
};

const Home = () => {
  const [movieId, setMovieId] = useState<string | null>(null);

  const onClickMovie = (id: string) => {
    console.log(id);
    setMovieId(id);
  };

  return (
    <article className={style.home}>
      {movieId ? <h1>{movieId}</h1> : <MovieSearchForm />}
      <MovieContext.Provider value={{ onClickMovie }}>
        <TabList tabs={homeTabs} />
      </MovieContext.Provider>
    </article>
  );
};

export default Home;

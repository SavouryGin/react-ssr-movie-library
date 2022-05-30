import MoviePanel from 'components/movie-panel';
import React from 'react';
import TabList from 'components/tab-list';
import { TabItem } from 'types/tabs';
import { movieList } from '__mocks__/movie-list';
import './styles.scss';

const Home = () => {
  const documentaryMovies = movieList.filter((item) => item.genres.includes('Biography') || item.genres.includes('Documentary'));
  const comedyMovies = movieList.filter((item) => item.genres.includes('Comedy'));
  const horrorMovies = movieList.filter((item) => item.genres.includes('Horror'));
  const crimeMovies = movieList.filter((item) => item.genres.includes('Crime'));
  const actionMovies = movieList.filter((item) => item.genres.includes('Action') || item.genres.includes('Adventure'));

  const homeTabs: TabItem[] = [
    {
      tabContent: <MoviePanel items={movieList} />,
      tabTitle: 'All',
      tabId: 'all-movies',
    },
    {
      tabContent: <MoviePanel items={documentaryMovies} />,
      tabTitle: 'Documentary',
      tabId: 'documentary-movies',
    },
    {
      tabContent: <MoviePanel items={comedyMovies} />,
      tabTitle: 'Comedy',
      tabId: 'comedy-movies',
    },
    {
      tabContent: <MoviePanel items={horrorMovies} />,
      tabTitle: 'Horror',
      tabId: 'horror-movies',
    },
    {
      tabContent: <MoviePanel items={crimeMovies} />,
      tabTitle: 'Crime',
      tabId: 'crime-movies',
    },
    {
      tabContent: <MoviePanel items={actionMovies} />,
      tabTitle: 'Action',
      tabId: 'action-movies',
    },
  ];

  return (
    <article className='home-page'>
      <TabList tabs={homeTabs} className='home-page__tabs' />
    </article>
  );
};

export default Home;

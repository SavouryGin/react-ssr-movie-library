import MoviePanel from 'components/movie-panel';
import React from 'react';
import TabList from 'components/tab-list';
import { TabItem } from 'types/tabs';
import { movieList } from '__mocks__/movie-list';
import './styles.scss';

const Home = () => {
  const homeTabs: TabItem[] = [
    {
      tabContent: <MoviePanel items={movieList} />,
      tabTitle: 'All',
      tabId: 'all-movies',
    },
    {
      tabContent: <>Test 2</>,
      tabTitle: 'Documentary',
      tabId: 'documentary-movies',
    },
    {
      tabContent: <>Test 3</>,
      tabTitle: 'Comedy',
      tabId: 'comedy-movies',
    },
    {
      tabContent: <>Test 4</>,
      tabTitle: 'Horror',
      tabId: 'horror-movies',
    },
    {
      tabContent: <>Test 5</>,
      tabTitle: 'Crime',
      tabId: 'crime-movies',
    },
  ];

  return (
    <article className='home-page'>
      <TabList tabs={homeTabs} className='home-page__tabs' />
    </article>
  );
};

export default Home;

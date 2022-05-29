import React from 'react';
import TabList from 'components/tab-list';
import { TabItem } from 'types/tabs';
import './styles.scss';

export const propositionsTabs: TabItem[] = [
  {
    tabContent: <>Test 1</>,
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

const Home = () => {
  return (
    <article className='home-page'>
      <TabList tabs={propositionsTabs} className='home-page__tabs' />
    </article>
  );
};

export default Home;

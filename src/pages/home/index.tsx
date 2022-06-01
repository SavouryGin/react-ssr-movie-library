import Form from 'components/controls/form';
import MoviePanel from 'components/movie-panel';
import React, { useState } from 'react';
import TabList from 'components/tab-list';
import TextInput from 'components/controls/text-input';
import { FormValues } from 'types/controls';
import { TabItem } from 'types/tabs';
import { genreChecker } from './helpers';
import { movieList } from '__mocks__/movie-list';
import './styles.scss';

const Home = () => {
  const searchFormInitialValue = { movie: '' };
  const [searchQuery, setSearchQuery] = useState(searchFormInitialValue);
  const takeValues = (values: FormValues) => {
    setSearchQuery(values as typeof searchFormInitialValue);
  };

  const documentaryMovies = movieList.filter((item) => genreChecker.isDocumentary(item));
  const comedyMovies = movieList.filter((item) => genreChecker.isComedy(item));
  const horrorMovies = movieList.filter((item) => genreChecker.isHorror(item));
  const crimeMovies = movieList.filter((item) => genreChecker.isCrime(item));
  const actionMovies = movieList.filter((item) => genreChecker.isAction(item));

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: perform search
    console.log(searchQuery);
  };

  return (
    <article className='home-page'>
      <div className='home-page__form'>
        <h2 className='home-page__heading'>Find your movie</h2>
        <Form
          onSubmit={onSubmit}
          passValues={takeValues}
          inputs={<TextInput name='movie' className='home-page__search-input' placeholder='What do you want to watch?' />}
          initialValues={searchFormInitialValue}
          className='home-page__search'
          submitButtonText='Search'
        />
      </div>
      <TabList tabs={homeTabs} className='home-page__tabs' />
    </article>
  );
};

export default Home;

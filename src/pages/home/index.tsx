import Form from 'components/controls/form';
import MoviePanel from 'components/movie-panel';
import React, { useState } from 'react';
import TabList from 'components/tab-list';
import TextInput from 'components/controls/text-input';
import { FormValues } from 'types/controls';
import { TabItem } from 'types/tabs';
import { movieList } from '__mocks__/movie-list';
import './styles.scss';

const Home = () => {
  const searchFormInitialValue = { movie: '' };
  const [searchQuery, setSearchQuery] = useState(searchFormInitialValue);
  const takeValues = (values: FormValues) => setSearchQuery(values as typeof searchFormInitialValue);

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchQuery);
    // dispatch(propositionsActions.addPromise(formValue.premise));
    // closePropositionsPopup(dispatch, 'isPremiseOpened');
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

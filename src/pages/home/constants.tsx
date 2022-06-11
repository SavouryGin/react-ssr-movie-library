import MoviePanel from 'components/movie-panel';
import React from 'react';
import { TabItem } from 'types/tabs';
import { genreChecker } from './helpers';
import { movieList } from '__mocks__/movie-list';

export const searchFormInitialValue = { movie: '' };

const documentaryMovies = movieList.filter((item) => genreChecker.isDocumentary(item));
const comedyMovies = movieList.filter((item) => genreChecker.isComedy(item));
const horrorMovies = movieList.filter((item) => genreChecker.isHorror(item));
const crimeMovies = movieList.filter((item) => genreChecker.isCrime(item));
const actionMovies = movieList.filter((item) => genreChecker.isAction(item));

export const homeTabs: TabItem[] = [
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

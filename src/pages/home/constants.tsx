import MoviePanel from 'components/movie-panel';
import React from 'react';
import { Genre } from 'enums/genre';
import { TabItem } from 'types/tabs';

export const homeTabs: TabItem[] = [
  {
    tabContent: <MoviePanel />,
    tabTitle: 'All',
    tabId: 'all-movies',
  },
  {
    tabContent: <MoviePanel panelGenre={Genre.Drama} />,
    tabTitle: Genre.Drama,
    tabId: `${Genre.Drama}-movies`,
  },
  {
    tabContent: <MoviePanel panelGenre={Genre.Comedy} />,
    tabTitle: Genre.Comedy,
    tabId: `${Genre.Comedy}-movies`,
  },
  {
    tabContent: <MoviePanel panelGenre={Genre.Animation} />,
    tabTitle: Genre.Animation,
    tabId: `${Genre.Animation}-movies`,
  },
  {
    tabContent: <MoviePanel panelGenre={Genre.Adventure} />,
    tabTitle: Genre.Adventure,
    tabId: `${Genre.Adventure}-movies`,
  },
  {
    tabContent: <MoviePanel panelGenre={Genre.Family} />,
    tabTitle: Genre.Family,
    tabId: `${Genre.Family}-movies`,
  },
  {
    tabContent: <MoviePanel panelGenre={Genre.Horror} />,
    tabTitle: Genre.Horror,
    tabId: `${Genre.Horror}-movies`,
  },
];

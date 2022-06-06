import { Genre } from 'enums/genre';
import { MovieValues } from 'types/movies';

export const movieInitialValues: MovieValues = { title: '', url: '', genres: [], date: '', rating: 0, runtime: 0, overview: '' };

export const genreOptions = [
  {
    label: 'Action',
    value: Genre.Action,
  },
  {
    label: 'Adventure',
    value: Genre.Adventure,
  },
  {
    label: 'Drama',
    value: Genre.Drama,
  },
  {
    label: 'Documentary',
    value: Genre.Documentary,
  },
  {
    label: 'Comedy',
    value: Genre.Comedy,
  },
  {
    label: 'Music',
    value: Genre.Music,
  },
  {
    label: 'Crime',
    value: Genre.Crime,
  },
  {
    label: 'Horror',
    value: Genre.Horror,
  },
  {
    label: 'Biography',
    value: Genre.Biography,
  },
];

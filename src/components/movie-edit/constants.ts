import { Genre } from 'enums/genre';
import { MovieItem } from 'types/movies';

export const movieDefaultValues: MovieItem = { id: '', title: '', url: '', genres: [], date: '', rating: 0, runtime: 0, overview: '' };

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

export const inputLimits = {
  maxTextInputLength: 1000,
  minTextInputLength: 0,
  maxRating: 10,
  minRating: 0,
  maxRuntime: 1000,
  minRuntime: 0,
  ratingStep: 0.1,
  runtimeStep: 1,
};

import { Genre } from 'enums/genre';
import { MovieItem } from 'types/movies';

export const movieList: MovieItem[] = [
  {
    title: 'Pulp Fiction',
    genres: [Genre.Crime, Genre.Comedy],
    year: 1994,
    imagePath: 'assets/images/Bitmap-1.jpg',
  },
  {
    title: 'Bohemian Rhapsody',
    genres: [Genre.Drama, Genre.Biography, Genre.Music],
    year: 2018,
    imagePath: 'assets/images/Bitmap-2.jpg',
  },
  {
    title: 'Kill Bill: Vol 2',
    genres: [Genre.Crime, Genre.Action],
    year: 2004,
    imagePath: 'assets/images/Bitmap-3.jpg',
  },
  {
    title: 'Avengers: War of Infinity',
    genres: [Genre.Action, Genre.Adventure],
    year: 2012,
    imagePath: 'assets/images/Bitmap-4.jpg',
  },
  {
    title: 'Inception',
    genres: [Genre.Action, Genre.Adventure],
    year: 2010,
    imagePath: 'assets/images/Bitmap-5.jpg',
  },
  {
    title: 'Reservoir dogs',
    genres: [Genre.Crime],
    year: 1992,
    imagePath: 'assets/images/Bitmap-6.jpg',
  },
];

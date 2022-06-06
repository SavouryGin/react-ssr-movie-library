import { Genre } from 'enums/genre';
import { MovieItem } from 'types/movies';

export const movieList: MovieItem[] = [
  {
    title: 'Pulp Fiction',
    genres: [
      { label: 'Crime', value: Genre.Crime },
      { label: 'Comedy', value: Genre.Comedy },
    ],
    date: '1994-01-01',
    imagePath: 'assets/images/Bitmap-1.jpg',
    url: '',
    rating: 8,
    runtime: 210,
    overview: '',
  },
  {
    title: 'Bohemian Rhapsody',
    genres: [
      { label: 'Music', value: Genre.Music },
      { label: 'Drama', value: Genre.Drama },
      { label: 'Documentary', value: Genre.Documentary },
    ],
    date: '2018-01-01',
    imagePath: 'assets/images/Bitmap-2.jpg',
    url: '',
    rating: 6.7,
    runtime: 140,
    overview: '',
  },
  {
    title: 'Kill Bill: Vol 2',
    genres: [
      { label: 'Crime', value: Genre.Crime },
      { label: 'Action', value: Genre.Action },
    ],
    date: '2004-01-01',
    imagePath: 'assets/images/Bitmap-3.jpg',
    url: '',
    rating: 7.4,
    runtime: 135,
    overview: '',
  },
  {
    title: 'Avengers: War of Infinity',
    genres: [
      { label: 'Action', value: Genre.Action },
      { label: 'Adventure', value: Genre.Adventure },
    ],
    date: '2012-01-01',
    imagePath: 'assets/images/Bitmap-4.jpg',
    url: '',
    rating: 8.2,
    runtime: 125,
    overview: '',
  },
  {
    title: 'Inception',
    genres: [
      { label: 'Action', value: Genre.Action },
      { label: 'Drama', value: Genre.Drama },
    ],
    date: '2010-01-01',
    imagePath: 'assets/images/Bitmap-5.jpg',
    url: '',
    rating: 7.5,
    runtime: 160,
    overview: '',
  },
  {
    title: 'Reservoir dogs',
    genres: [{ label: 'Crime', value: Genre.Crime }],
    date: '1992-01-01',
    imagePath: 'assets/images/Bitmap-6.jpg',
    url: '',
    rating: 6.9,
    runtime: 130,
    overview: '',
  },
];

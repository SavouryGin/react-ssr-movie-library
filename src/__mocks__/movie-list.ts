import { Genre } from 'enums/genre';
import { MovieItem } from 'types/movies';

export const movieList: MovieItem[] = [
  {
    id: 'test-movie-1',
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
    overview:
      'Pulp Fiction is a 1994 American black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.',
  },
  {
    id: 'test-movie-2',
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
    overview:
      'Bohemian Rhapsody is a 2018 biographical musical drama film directed by Bryan Singer[a] from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. The film tells the story of the life of Freddie Mercury, the lead singer of the British rock band Queen, from the formation of the band in 1970 up to their 1985 Live Aid performance at the original Wembley Stadium.',
  },
  {
    id: 'test-movie-2',
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
    id: 'test-movie-3',
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
    id: 'test-movie-4',
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
    id: 'test-movie-5',
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
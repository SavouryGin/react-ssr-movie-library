import { Genre } from 'enums/genre';
import { MovieItem } from 'types/movies';

export const genreChecker = {
  isDocumentary: (item: MovieItem): boolean => item.genres.includes(Genre.Biography) || item.genres.includes(Genre.Documentary),
  isComedy: (item: MovieItem): boolean => item.genres.includes(Genre.Comedy),
  isHorror: (item: MovieItem): boolean => item.genres.includes(Genre.Horror),
  isCrime: (item: MovieItem): boolean => item.genres.includes(Genre.Crime),
  isAction: (item: MovieItem): boolean => item.genres.includes(Genre.Action) || item.genres.includes(Genre.Adventure),
};

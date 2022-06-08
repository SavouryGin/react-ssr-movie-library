import { Genre } from 'enums/genre';
import { MovieItem } from 'types/movies';

export const genreChecker = {
  isDocumentary: (item: MovieItem): boolean => {
    const genreList = item.genres.map((option) => option.value);

    return genreList.includes(Genre.Biography) || genreList.includes(Genre.Documentary);
  },
  isComedy: (item: MovieItem): boolean => {
    const genreList = item.genres.map((option) => option.value);

    return genreList.includes(Genre.Comedy);
  },
  isHorror: (item: MovieItem): boolean => {
    const genreList = item.genres.map((option) => option.value);

    return genreList.includes(Genre.Horror);
  },
  isCrime: (item: MovieItem): boolean => {
    const genreList = item.genres.map((option) => option.value);

    return genreList.includes(Genre.Crime);
  },
  isAction: (item: MovieItem): boolean => {
    const genreList = item.genres.map((option) => option.value);

    return genreList.includes(Genre.Action);
  },
};

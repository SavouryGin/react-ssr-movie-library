import { MovieItem } from 'types/movies';

export const compareTitles = (a: MovieItem, b: MovieItem): number => {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }

  return 0;
};

export const compareReleaseDates = (a: MovieItem, b: MovieItem): number => {
  return b.year - a.year;
};

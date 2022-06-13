import { MovieItem } from 'types/movies';
import { SelectEntity } from 'types/controls';
import { SortingValues } from 'enums/sorting-values';

export const getSortedList = (items: MovieItem[], sortOption: SelectEntity): MovieItem[] => {
  switch (sortOption.value) {
    case SortingValues.Date: {
      return [...items].sort(compareReleaseDates);
    }

    case SortingValues.Title: {
      return [...items].sort(compareTitles);
    }

    case SortingValues.Rating: {
      return [...items].sort(compareRatings);
    }

    case SortingValues.Runtime: {
      return [...items].sort(compareRuntime);
    }

    default: {
      return items;
    }
  }
};

const compareTitles = (a: MovieItem, b: MovieItem): number => {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }

  return 0;
};

const compareReleaseDates = (a: MovieItem, b: MovieItem): number => {
  const bYear = new Date(b.date).getFullYear();
  const aYear = new Date(a.date).getFullYear();

  return bYear - aYear;
};

const compareRatings = (a: MovieItem, b: MovieItem): number => b.rating - a.rating;

const compareRuntime = (a: MovieItem, b: MovieItem): number => b.runtime - a.runtime;

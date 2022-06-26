import { SelectEntity } from 'types/controls';
import { SortingValues } from 'enums/sorting-values';

export const sortOptions: SelectEntity[] = [
  {
    option: 'Release (newest)',
    value: SortingValues.DateDesc,
    params: {
      sortBy: 'release_date',
      sortOrder: 'desc',
    },
  },
  {
    option: 'Release (oldest)',
    value: SortingValues.DateAsc,
    params: {
      sortBy: 'release_date',
      sortOrder: 'asc',
    },
  },
  {
    option: 'Title (A - Z)',
    value: SortingValues.TitleAsc,
    params: {
      sortBy: 'title',
      sortOrder: 'asc',
    },
  },
  {
    option: 'Title (Z - A)',
    value: SortingValues.TitleDesc,
    params: {
      sortBy: 'title',
      sortOrder: 'desc',
    },
  },
  {
    option: 'Rating (highest)',
    value: SortingValues.RatingDesc,
    params: {
      sortBy: 'vote_average',
      sortOrder: 'desc',
    },
  },
  {
    option: 'Rating (lowest)',
    value: SortingValues.RatingAsc,
    params: {
      sortBy: 'vote_average',
      sortOrder: 'asc',
    },
  },
  {
    option: 'Runtime (longest)',
    value: SortingValues.RuntimeDesc,
    params: {
      sortBy: 'runtime',
      sortOrder: 'desc',
    },
  },
  {
    option: 'Runtime (shortest)',
    value: SortingValues.RuntimeAsc,
    params: {
      sortBy: 'runtime',
      sortOrder: 'asc',
    },
  },
];

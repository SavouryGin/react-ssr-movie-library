import { SelectEntity } from 'types/controls';
import { SortOrder, SortingValues } from 'enums/params';

export const sortOptions: SelectEntity[] = [
  {
    option: 'Most popular',
    value: SortingValues.MostPopular,
  },
  {
    option: 'Release (newest)',
    value: SortingValues.DateDesc,
    params: {
      sortBy: 'release_date',
      sortOrder: SortOrder.Desc,
    },
  },
  {
    option: 'Release (oldest)',
    value: SortingValues.DateAsc,
    params: {
      sortBy: 'release_date',
      sortOrder: SortOrder.Asc,
    },
  },
  {
    option: 'Title (A - Z)',
    value: SortingValues.TitleAsc,
    params: {
      sortBy: 'title',
      sortOrder: SortOrder.Asc,
    },
  },
  {
    option: 'Title (Z - A)',
    value: SortingValues.TitleDesc,
    params: {
      sortBy: 'title',
      sortOrder: SortOrder.Desc,
    },
  },
  {
    option: 'Rating (highest)',
    value: SortingValues.RatingDesc,
    params: {
      sortBy: 'vote_average',
      sortOrder: SortOrder.Desc,
    },
  },
  {
    option: 'Rating (lowest)',
    value: SortingValues.RatingAsc,
    params: {
      sortBy: 'vote_average',
      sortOrder: SortOrder.Asc,
    },
  },
  {
    option: 'Runtime (longest)',
    value: SortingValues.RuntimeDesc,
    params: {
      sortBy: 'runtime',
      sortOrder: SortOrder.Desc,
    },
  },
  {
    option: 'Runtime (shortest)',
    value: SortingValues.RuntimeAsc,
    params: {
      sortBy: 'runtime',
      sortOrder: SortOrder.Asc,
    },
  },
];

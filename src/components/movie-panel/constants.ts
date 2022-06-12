import { SelectEntity } from 'types/controls';
import { SortingValues } from 'enums/sorting-values';

export const sortOptions: SelectEntity[] = [
  {
    option: 'Release date',
    value: SortingValues.Date,
  },
  {
    option: 'Title',
    value: SortingValues.Title,
  },
  {
    option: 'Rating',
    value: SortingValues.Rating,
  },
  {
    option: 'Runtime',
    value: SortingValues.Runtime,
  },
];

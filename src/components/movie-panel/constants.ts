import { SelectEntity } from 'types/controls';

export enum SortValue {
  Date,
  Title,
}

export const sortOptions: SelectEntity[] = [
  {
    option: 'Release date',
    value: SortValue.Date,
  },
  {
    option: 'Title',
    value: SortValue.Title,
  },
];

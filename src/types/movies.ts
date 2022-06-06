import { CommonProps } from './basic';
import { Genre } from 'enums/genre';

export type MovieProps = CommonProps & MovieItem;

export type MoviePanelProps = CommonProps & {
  items: MovieItem[];
};

export type MovieMenuProps = CommonProps & {
  onClose: () => void;
};

export type MovieEditProps = CommonProps & {
  isEditMode?: boolean;
};

type GenreOption = { label: string; value: Genre };

export type MovieItem = {
  title: string;
  url: string;
  genres: GenreOption[];
  date: string;
  rating: number;
  runtime: number;
  overview: string;
  imagePath?: string;
};

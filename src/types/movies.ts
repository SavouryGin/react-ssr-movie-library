import { CommonProps } from './basic';
import { Genre } from 'enums/genre';

export type MovieItem = {
  title: string;
  genres: Genre[];
  year: number;
  imagePath: string;
};

export type MovieProps = CommonProps &
  MovieItem & {
    description?: string;
  };

export type MoviePanelProps = CommonProps & {
  items: MovieItem[];
};

export type MovieMenuProps = CommonProps & {
  onClose: () => void;
};

export type MovieEditProps = CommonProps & {
  isEditMode?: boolean;
};

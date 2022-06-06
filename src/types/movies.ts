import { CommonProps } from './basic';
import { Genre } from 'enums/genre';

export type MovieItem = {
  id: string;
  title: string;
  url: string;
  genres: GenreOption[];
  date: string;
  rating: number;
  runtime: number;
  overview: string;
  imagePath?: string;
};

export type MovieProps = CommonProps & MovieItem;

export type MoviePanelProps = CommonProps & {
  items: MovieItem[];
};

export type MovieMenuProps = CommonProps & {
  onClose: () => void;
  editMovie: () => void;
  deleteMovie: () => void;
};

export type MovieEditProps = CommonProps & {
  isEditMode?: boolean;
  movie?: MovieItem;
};

export type MovieDeleteConfirmationProps = CommonProps & {
  onConfirm: () => void;
};

type GenreOption = { label: string; value: Genre };

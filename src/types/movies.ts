import { CommonProps } from './basic';
import { Genre } from 'enums/genre';
import { IBadRequestError } from './server-entities';

export type MovieItem = {
  id: string;
  title: string;
  genres: GenreOption[];
  date: string;
  rating: number;
  runtime: number;
  overview: string;
  url?: string;
  imagePath?: string;
  voteCount?: number;
  budget?: number;
  revenue?: number;
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

export type MovieViewProps = CommonProps & {
  movieId: string;
  onCloseView: () => void;
};

export type MovieBodyProps = {
  id: string;
  title: string;
  date: string;
  genres: GenreOption[];
  imagePath?: string;
};

export type MovieEditProps = CommonProps & {
  isEditMode?: boolean;
  movie?: MovieItem;
};

export type MovieDeleteConfirmationProps = CommonProps & {
  onConfirm: () => void;
};

export type MovieContextProps = {
  onClickMovie: (id: string) => void;
};

export type GenreOption = { label: string; value: Genre };

export type MoviesInitialState = {
  data: MovieItem[];
  isLoading: boolean;
  error: IBadRequestError | null;
};

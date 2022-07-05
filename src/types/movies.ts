import { CommonProps } from './basic';
import { Genre } from 'enums/genre';
import { IBadRequestError } from './server-entities';
import { SortParams } from './controls';

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
  panelGenre?: Genre;
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

export type MovieDeleteConfirmationProps = CommonProps & {
  onConfirm: () => void;
};

export type MovieContextProps = {
  onClickMovie: (id: string) => void;
};

export type GenreOption = { label: string; value: Genre };

export type MoviesInitialState = {
  items: MovieItem[];
  selectedMovie: MovieItem | null;
  error: IBadRequestError | null;
  editMovieId?: string;
  flags: MoviesFlags;
  loadMoviesParams?: SortParams;
};

export type MovieFormErrors = {
  title?: string;
  genres?: string;
  date?: string;
  rating?: string;
  runtime?: string;
  url?: string;
  overview?: string;
};

export interface MoviesFlags {
  moviesLoading: boolean;
  isSelectedMovieLoading: boolean;
  isEditMovieOpened: boolean;
  isEditRequestInProgress: boolean;
}

export type MoviesFlag = keyof MoviesFlags;

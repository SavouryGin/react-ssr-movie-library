import { CommonProps } from './basic';

export type MovieItem = {
  title: string;
  genres: string[];
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

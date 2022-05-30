import { CommonProps } from './basic';

export type MovieItem = {
  title: string;
  genres: genre[];
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

type genre = 'Comedy' | 'Documentary' | 'Horror' | 'Crime' | 'Drama' | 'Biography' | 'Music' | 'Adventure' | 'Action';

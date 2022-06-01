import { CommonProps } from './basic';

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

export enum Genre {
  Comedy = 'Comedy',
  Documentary = 'Documentary',
  Horror = 'Horror',
  Crime = 'Crime',
  Drama = 'Drama',
  Biography = 'Biography',
  Music = 'Music',
  Adventure = 'Adventure',
  Action = 'Action',
}

import { AxiosResponse } from 'axios';
import { Genre } from 'enums/genre';
import { GenreOption, MovieItem } from 'types/movies';
import { IMovieEntity, IMoviesResponse } from 'types/server-entities';
import { MIN_DATE } from 'components/controls/date-picker/constants';

export const transformGetMoviesResponse = (response: AxiosResponse<IMoviesResponse>): MovieItem[] => {
  return response.data.data.map((entity) => mapMovieEntityToMovieItem(entity));
};

export const transformGetMovieByIdResponse = (response: AxiosResponse<IMovieEntity>): MovieItem => {
  return mapMovieEntityToMovieItem(response.data);
};

const mapGenresToGenreOptions = (input: string[]): GenreOption[] => {
  return input.map((item) => {
    if (Object.values(Genre).includes(item as Genre)) {
      return {
        label: item,
        value: item as Genre,
      };
    } else {
      return {
        label: 'Unknown',
        value: Genre.Unknown,
      };
    }
  });
};

const mapMovieEntityToMovieItem = (entity: IMovieEntity): MovieItem => {
  return {
    id: entity.id.toString(),
    title: entity.title,
    genres: mapGenresToGenreOptions(entity.genres),
    date: entity.release_date || MIN_DATE,
    rating: entity.vote_average || 0,
    runtime: entity.runtime || 0,
    overview: entity.overview,
    voteCount: entity.vote_count,
    imagePath: entity.poster_path,
    budget: entity.budget,
    revenue: entity.revenue,
  };
};

import { Genre } from 'enums/genre';
import { GenreOption, MovieItem } from 'types/movies';
import { IBadRequestError, IMovieBaseEntity, IMovieEntity, IMoviesResponse } from 'types/server-entities';
import { MIN_DATE } from 'components/controls/date-picker/constants';

export const transformGetMoviesResponse = (response: IMoviesResponse): MovieItem[] =>
  response.data.map((entity) => mapMovieEntityToMovieItem(entity));

export const transformGetMovieByIdResponse = (response: IMovieEntity): MovieItem => mapMovieEntityToMovieItem(response);

export const transformMovieItemToBaseEntity = (item: MovieItem): IMovieBaseEntity => ({
  title: item.title,
  vote_average: +item.rating,
  release_date: item.date,
  poster_path: item.url ?? '',
  overview: item.overview,
  budget: item.budget ?? 0,
  revenue: item.revenue ?? 0,
  runtime: +item.runtime,
  genres: item.genres.map((option) => option.value),
});

export const transformMovieItemToMovieEntity = (item: MovieItem): IMovieEntity => ({
  id: +item.id,
  title: item.title,
  vote_average: +item.rating,
  release_date: item.date,
  poster_path: item.url ?? '',
  overview: item.overview,
  budget: item.budget ?? 0,
  revenue: item.revenue ?? 0,
  runtime: +item.runtime,
  genres: item.genres.map((option) => option.value),
});

const mapGenresToGenreOptions = (input: string[]): GenreOption[] =>
  input.map((item) => {
    const value = Object.values(Genre).includes(item as Genre) ? (item as Genre) : Genre.Unknown;
    const label = item;

    return { label, value };
  });

const mapMovieEntityToMovieItem = (entity: IMovieEntity): MovieItem => ({
  id: entity.id.toString(),
  title: entity.title,
  genres: mapGenresToGenreOptions(entity.genres),
  date: entity.release_date ?? MIN_DATE,
  rating: entity.vote_average ?? 0,
  runtime: entity.runtime ?? 0,
  overview: entity.overview,
  voteCount: entity.vote_count,
  imagePath: entity.poster_path,
  budget: entity.budget,
  revenue: entity.revenue,
  url: entity.poster_path,
});

export const transformUnknownError = (err: any): IBadRequestError => ({
  messages: err?.messages || [],
  message: err?.message || 'Something went wrong',
  status: err?.status || 500,
});

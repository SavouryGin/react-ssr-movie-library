import { Genre } from 'enums/genre';
import { SearchBy, SortOrder } from 'enums/params';

export interface IMovieBaseEntity {
  title: string; // Movie title
  tagline?: string; // Movie tagline
  vote_average?: number; // Movie average rating
  vote_count?: number; // Total count of votes for the movie
  release_date?: string; // Movie release date
  poster_path: string; // Url to the poster image
  overview: string; // Short description of the movie
  budget: number; // Movie production budget, minimum: 0
  revenue?: number; // Movie revenue, minimum: 0
  runtime: number; // Movie duration time, minimum: 0
  genres: string[]; // List of genres
}

export interface IMovieEntity extends IMovieBaseEntity {
  id: number; // Movie unique identifier
}

export interface IMoviesResponse {
  data: IMovieEntity[];
  total: number;
  offset: number;
  limit: number;
}

export interface IBadRequestError {
  messages: string[];
  message: string;
  status: number;
}

export interface IGetMoviesParams {
  sortBy?: string;
  sortOrder?: SortOrder;
  search?: string;
  searchBy?: SearchBy;
  filter?: Genre[];
  offset?: string;
  limit?: string;
}

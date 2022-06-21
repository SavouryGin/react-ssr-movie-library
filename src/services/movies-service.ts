import http from './http-common';
import { IGetMoviesParams } from 'types/server-entities';

const moviesService = {
  getMovies: (params?: IGetMoviesParams) => {
    return http.get('/movies', { params: { ...params, filter: params?.filter?.join(',') } });
  },

  getMovieById: (id: string) => {
    return http.get(`/movies/${id}`, { params: { id } });
  },

  deleteMovieById: (id: string) => {
    return http.delete(`/movies/${id}`, { params: { id } });
  },
};

export default Object.freeze(moviesService);

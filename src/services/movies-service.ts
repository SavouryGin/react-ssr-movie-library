import http from './http-common';
import { IGetMoviesParams, IMovieBaseEntity, IMovieEntity } from 'types/server-entities';

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

  createNewMovie: (data: IMovieBaseEntity) => {
    return http.post('/movies', data);
  },

  updateMovieById: (data: IMovieEntity) => {
    return http.put('/movies', data);
  },
};

export default Object.freeze(moviesService);

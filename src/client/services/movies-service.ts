import http from './http-common';
import { IGetMoviesParams, IMovieBaseEntity, IMovieEntity } from 'types/server-entities';
import { MOVIES_BASE_URL } from './constants';

const moviesService = {
  getMovies: (params?: IGetMoviesParams) => {
    return http
      .get(MOVIES_BASE_URL, { params: { ...params, filter: params?.filter?.join(',') } })
      .then((response) => response.data)
      .catch((error) => error);
  },

  getMovieById: (id: string) => {
    return http
      .get(`${MOVIES_BASE_URL}/${id}`, { params: { id } })
      .then((response) => response.data)
      .catch((error) => error);
  },

  deleteMovieById: (id: string) => {
    return http.delete(`${MOVIES_BASE_URL}/${id}`, { params: { id } });
  },

  createNewMovie: (data: IMovieBaseEntity) => {
    return http.post(MOVIES_BASE_URL, data);
  },

  updateMovieById: (data: IMovieEntity) => {
    return http.put(MOVIES_BASE_URL, data);
  },
};

export default Object.freeze(moviesService);

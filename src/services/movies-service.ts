import http from './http-common';

const moviesService = {
  getMovies: () => {
    return http.get('/movies');
  },

  getMovieById: (id: string) => {
    return http.get(`/movies/${id}`, { params: { id } });
  },

  deleteMovieById: (id: string, token: string) => {
    return http.delete(`/movies/${id}`, { params: { id }, headers: { Authorization: token } });
  },
};

export default Object.freeze(moviesService);

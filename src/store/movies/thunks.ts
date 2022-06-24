import service from 'services/movies-service';
import { AppDispatch } from 'types/basic';
import { AxiosResponse } from 'axios';
import { IBadRequestError, IGetMoviesParams, IMovieEntity, IMoviesResponse } from 'types/server-entities';
import { moviesActions as actions } from './slice';
import { transformGetMovieByIdResponse, transformGetMoviesResponse } from './helpers';

export const loadMovies = (params?: IGetMoviesParams) => async (dispatch: AppDispatch) => {
  dispatch(actions.setIsMoviesLoading(true));

  try {
    const response: AxiosResponse<IMoviesResponse> = await service.getMovies(params);
    dispatch(actions.setMovies(transformGetMoviesResponse(response)));
    dispatch(actions.setError(null));
  } catch (err: unknown) {
    dispatch(actions.setError(err as IBadRequestError));
  } finally {
    dispatch(actions.setIsMoviesLoading(false));
  }
};

export const loadMovieById = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(actions.setIsMoviesLoading(true));

  try {
    const response: AxiosResponse<IMovieEntity> = await service.getMovieById(id);
    dispatch(actions.setMovie(transformGetMovieByIdResponse(response)));
    dispatch(actions.setError(null));
  } catch (err: unknown) {
    dispatch(actions.setError(err as IBadRequestError));
  } finally {
    dispatch(actions.setIsMoviesLoading(false));
  }
};

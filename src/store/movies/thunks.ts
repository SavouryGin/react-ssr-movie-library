import service from 'services/movies-service';
import { AppDispatch } from 'types/basic';
import { AxiosResponse } from 'axios';
import { IBadRequestError, IGetMoviesParams, IMovieEntity, IMoviesResponse } from 'types/server-entities';
import { MovieItem } from 'types/movies';
import { moviesActions as actions } from './slice';
import {
  transformGetMovieByIdResponse,
  transformGetMoviesResponse,
  transformMovieItemToBaseEntity,
  transformMovieItemToMovieEntity,
} from './helpers';

export const loadMovies = (params?: IGetMoviesParams) => async (dispatch: AppDispatch) => {
  dispatch(actions.setUpFlag({ flag: 'isMoviesLoading', value: true }));

  try {
    const response: AxiosResponse<IMoviesResponse> = await service.getMovies(params);
    dispatch(actions.setMovies(transformGetMoviesResponse(response)));
    dispatch(actions.setError(null));
  } catch (err: unknown) {
    dispatch(actions.setError(err as IBadRequestError));
  } finally {
    dispatch(actions.setUpFlag({ flag: 'isMoviesLoading', value: false }));
  }
};

export const loadMovieById = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(actions.setUpFlag({ flag: 'isSelectedMovieLoading', value: true }));

  try {
    const response: AxiosResponse<IMovieEntity> = await service.getMovieById(id);
    dispatch(actions.setMovie(transformGetMovieByIdResponse(response)));
    dispatch(actions.setError(null));
  } catch (err: unknown) {
    dispatch(actions.setError(err as IBadRequestError));
  } finally {
    dispatch(actions.setUpFlag({ flag: 'isSelectedMovieLoading', value: false }));
  }
};

export const createNewMovie = (data: MovieItem) => async (dispatch: AppDispatch) => {
  dispatch(actions.setUpFlag({ flag: 'isEditRequestInProgress', value: true }));

  try {
    const payload = transformMovieItemToBaseEntity(data);
    await service.createNewMovie(payload);
    dispatch(actions.toggleEditMovieForm({ isOpened: false }));
    dispatch(actions.setError(null));
  } catch (err: unknown) {
    dispatch(actions.setError(err as IBadRequestError));
  } finally {
    dispatch(actions.setUpFlag({ flag: 'isEditRequestInProgress', value: false }));
  }
};

export const updateMovie = (data: MovieItem) => async (dispatch: AppDispatch) => {
  dispatch(actions.setUpFlag({ flag: 'isEditRequestInProgress', value: true }));

  try {
    const payload = transformMovieItemToMovieEntity(data);
    await service.updateMovieById(payload);
    dispatch(actions.toggleEditMovieForm({ isOpened: false }));
    dispatch(actions.setError(null));
  } catch (err: unknown) {
    dispatch(actions.setError(err as IBadRequestError));
  } finally {
    dispatch(actions.setUpFlag({ flag: 'isEditRequestInProgress', value: false }));
  }
};

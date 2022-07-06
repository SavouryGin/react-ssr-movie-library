import service from 'services/movies-service';
import { AppDispatch } from 'types/basic';
import { AxiosResponse } from 'axios';
import { IBadRequestError, IGetMoviesParams, IMovieEntity, IMoviesResponse } from 'types/server-entities';
import { MovieItem } from 'types/movies';
import { MoviesFlag } from 'enums/movies-flags';
import { moviesActions as actions } from './slice';
import { getLoadMoviesParams } from './selectors';
import { store } from 'store';
import {
  transformGetMovieByIdResponse,
  transformGetMoviesResponse,
  transformMovieItemToBaseEntity,
  transformMovieItemToMovieEntity,
} from './helpers';

export const loadMovies = (params?: IGetMoviesParams) => async (dispatch: AppDispatch) => {
  dispatch(actions.setUpFlag({ flag: MoviesFlag.MoviesLoading, value: true }));

  try {
    const response: AxiosResponse<IMoviesResponse> = await service.getMovies(params);
    dispatch(actions.setMovies(transformGetMoviesResponse(response)));
    dispatch(actions.setError(null));
  } catch (err: unknown) {
    dispatch(actions.setError(err as IBadRequestError));
  } finally {
    dispatch(actions.setUpFlag({ flag: MoviesFlag.MoviesLoading, value: false }));
  }
};

export const loadMovieById = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(actions.setUpFlag({ flag: MoviesFlag.SelectedMovieLoading, value: true }));

  try {
    const response: AxiosResponse<IMovieEntity> = await service.getMovieById(id);
    dispatch(actions.setMovie(transformGetMovieByIdResponse(response)));
    dispatch(actions.setError(null));
  } catch (err: unknown) {
    dispatch(actions.setError(err as IBadRequestError));
  } finally {
    dispatch(actions.setUpFlag({ flag: MoviesFlag.SelectedMovieLoading, value: false }));
  }
};

export const createNewMovie = (data: MovieItem) => async (dispatch: AppDispatch) => {
  dispatch(actions.setUpFlag({ flag: MoviesFlag.EditRequestInProgress, value: true }));

  try {
    const payload = transformMovieItemToBaseEntity(data);
    await service.createNewMovie(payload);
    dispatch(actions.toggleEditMovieForm({ isOpened: false }));
    dispatch(actions.setError(null));
    dispatch(refreshMoviesList());
  } catch (err: unknown) {
    dispatch(actions.setError(err as IBadRequestError));
  } finally {
    dispatch(actions.setUpFlag({ flag: MoviesFlag.EditRequestInProgress, value: false }));
  }
};

export const updateMovie = (data: MovieItem) => async (dispatch: AppDispatch) => {
  dispatch(actions.setUpFlag({ flag: MoviesFlag.EditRequestInProgress, value: true }));

  try {
    const payload = transformMovieItemToMovieEntity(data);
    await service.updateMovieById(payload);
    dispatch(actions.toggleEditMovieForm({ isOpened: false }));
    dispatch(actions.setError(null));
    dispatch(refreshMoviesList());
  } catch (err: unknown) {
    dispatch(actions.setError(err as IBadRequestError));
  } finally {
    dispatch(actions.setUpFlag({ flag: MoviesFlag.EditRequestInProgress, value: false }));
  }
};

export const deleteMovieById = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(actions.setUpFlag({ flag: MoviesFlag.MoviesLoading, value: true }));

  try {
    await service.deleteMovieById(id);
    dispatch(actions.setError(null));
    dispatch(refreshMoviesList());
  } catch (err: unknown) {
    dispatch(actions.setError(err as IBadRequestError));
  } finally {
    dispatch(actions.setUpFlag({ flag: MoviesFlag.MoviesLoading, value: false }));
  }
};

const refreshMoviesList = () => async (dispatch: AppDispatch) => {
  try {
    const params = getLoadMoviesParams(store.getState());

    const response: AxiosResponse<IMoviesResponse> = await service.getMovies(params);
    dispatch(actions.setMovies(transformGetMoviesResponse(response)));
    dispatch(actions.setError(null));
  } catch (err: unknown) {
    dispatch(actions.setError(err as IBadRequestError));
  }
};

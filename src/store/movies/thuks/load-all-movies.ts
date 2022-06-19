import mapper from 'services/mapper';
import service from 'services/movies-service';
import { AppDispatch } from 'types/basic';
import { AxiosResponse } from 'axios';
import { IBadRequestError, IMoviesResponse } from 'types/server-entities';
import { moviesActions as actions } from '../slice';

export const loadAllMovies = () => async (dispatch: AppDispatch) => {
  dispatch(actions.setIsMoviesLoading(true));

  try {
    const response: AxiosResponse<IMoviesResponse> = await service.getMovies();
    console.log('response', response);
    console.log('transformed', mapper.transformGetMoviesResponse(response));
    dispatch(actions.setMovies(mapper.transformGetMoviesResponse(response)));
    dispatch(actions.setError(null));
  } catch (err: unknown) {
    dispatch(actions.setError(err as IBadRequestError));
  } finally {
    dispatch(actions.setIsMoviesLoading(false));
  }
};

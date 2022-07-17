import { IBadRequestError } from 'types/server-entities';
import { MoviesFlag } from 'enums/movies-flags';
import { SortOrder } from 'enums/params';
import { SortParams } from 'types/controls';
import { mockedReducer, mockedState } from '__mocks__/redux-mock';
import { movieList } from '__mocks__/movie-list';
import { moviesActions, moviesInitialState } from 'store/movies/slice';

describe('Movies slice redux tests', () => {
  it('should return the initial state when passed an empty action', () => {
    const action = { type: '' };
    const result = mockedReducer(mockedState, action);
    expect(result).toEqual(mockedState);
  });

  it('should set up the movies list to the store', () => {
    const action = moviesActions.setMovies(movieList);
    const result = mockedReducer(mockedState, action);
    expect(result).toEqual({ movies: { ...moviesInitialState, items: movieList } });
  });

  it('should allow to reset the store state', () => {
    const setAction = moviesActions.setMovies(movieList);
    const resetAction = moviesActions.resetState();
    mockedReducer(mockedState, setAction);
    const result = mockedReducer(mockedState, resetAction);
    expect(result).toEqual(mockedState);
  });

  it('should set up the selected movie to the store', () => {
    const action = moviesActions.setMovie(movieList[0]);
    const result = mockedReducer(mockedState, action);
    expect(result).toEqual({ movies: { ...moviesInitialState, selectedMovie: movieList[0] } });
  });

  it('should set up a store flag', () => {
    const action = moviesActions.setUpFlag({ flag: MoviesFlag.MoviesLoading, value: true });
    const result = mockedReducer(mockedState, action);
    expect(result).toEqual({
      movies: {
        ...moviesInitialState,
        flags: { ...moviesInitialState.flags, [MoviesFlag.MoviesLoading]: true },
      },
    });
  });

  it('should allow to open the edit movie form', () => {
    const action = moviesActions.toggleEditMovieForm({ isOpened: true, editMovieId: movieList[0].id });
    const result = mockedReducer(mockedState, action);
    expect(result).toEqual({
      movies: {
        ...moviesInitialState,
        flags: { ...moviesInitialState.flags, [MoviesFlag.EditMovieOpened]: true },
        editMovieId: movieList[0].id,
      },
    });
  });

  it('should allow to set an error to the store', () => {
    const error: IBadRequestError = {
      messages: [],
      message: 'Error',
      status: 404,
    };
    const action = moviesActions.setError(error);
    const result = mockedReducer(mockedState, action);
    expect(result).toEqual({ movies: { ...moviesInitialState, error } });
  });

  it('should allow to save a search query', () => {
    const params: SortParams = {
      sortBy: 'title',
      sortOrder: SortOrder.Asc,
    };
    const action = moviesActions.setParams(params);
    const result = mockedReducer(mockedState, action);
    expect(result).toEqual({ movies: { ...moviesInitialState, loadMoviesParams: params } });
  });
});

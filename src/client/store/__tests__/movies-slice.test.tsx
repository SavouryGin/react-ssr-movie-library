import { IBadRequestError } from 'types/server-entities';
import { MoviesFlag } from 'enums/movies-flags';
import { SortOrder } from 'enums/params';
import { SortParams } from 'types/controls';
import { mockedReducer, mockedState } from '__mocks__/redux-mock';
import { movieList } from '__mocks__/movie-list';
import { moviesActions, moviesInitialState } from 'store/movies/slice';

describe('Movies slice redux tests', () => {
  it('should return the initial state when passed an empty action', () => {
    // arrange
    const action = { type: '' };
    // act
    const result = mockedReducer(mockedState, action);
    // assert
    expect(result).toEqual(mockedState);
  });

  it('should set up the movies list to the store', () => {
    // arrange
    const action = moviesActions.setMovies(movieList);
    // act
    const result = mockedReducer(mockedState, action);
    // assert
    expect(result).toEqual({ movies: { ...moviesInitialState, items: movieList } });
  });

  it('should allow to reset the store state', () => {
    // arrange
    const setAction = moviesActions.setMovies(movieList);
    const resetAction = moviesActions.resetState();
    mockedReducer(mockedState, setAction);
    // act
    const result = mockedReducer(mockedState, resetAction);
    // assert
    expect(result).toEqual(mockedState);
  });

  it('should set up the selected movie to the store', () => {
    // arrange
    const action = moviesActions.setMovie(movieList[0]);
    // act
    const result = mockedReducer(mockedState, action);
    // assert
    expect(result).toEqual({ movies: { ...moviesInitialState, selectedMovie: movieList[0] } });
  });

  it('should set up a store flag', () => {
    // arrange
    const action = moviesActions.setUpFlag({ flag: MoviesFlag.MoviesLoading, value: true });
    // act
    const result = mockedReducer(mockedState, action);
    // assert
    expect(result).toEqual({
      movies: {
        ...moviesInitialState,
        flags: { ...moviesInitialState.flags, [MoviesFlag.MoviesLoading]: true },
      },
    });
  });

  it('should allow to open the edit movie form', () => {
    // arrange
    const action = moviesActions.toggleEditMovieForm({ isOpened: true, editMovieId: movieList[0].id });
    // act
    const result = mockedReducer(mockedState, action);
    // assert
    expect(result).toEqual({
      movies: {
        ...moviesInitialState,
        flags: { ...moviesInitialState.flags, [MoviesFlag.EditMovieOpened]: true },
        editMovieId: movieList[0].id,
      },
    });
  });

  it('should allow to set an error to the store', () => {
    // arrange
    const error: IBadRequestError = {
      messages: [],
      message: 'Error',
      status: 404,
    };
    const action = moviesActions.setError(error);
    // act
    const result = mockedReducer(mockedState, action);
    // assert
    expect(result).toEqual({ movies: { ...moviesInitialState, error } });
  });

  it('should allow to save a search query', () => {
    // arrange
    const params: SortParams = {
      sortBy: 'title',
      sortOrder: SortOrder.Asc,
    };
    const action = moviesActions.setParams(params);
    // act
    const result = mockedReducer(mockedState, action);
    // assert
    expect(result).toEqual({ movies: { ...moviesInitialState, loadMoviesParams: params } });
  });
});

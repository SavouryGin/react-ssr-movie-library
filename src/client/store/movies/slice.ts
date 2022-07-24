import { IBadRequestError } from 'types/server-entities';
import { MovieItem, MoviesInitialState } from 'types/movies';
import { MoviesFlag } from 'enums/movies-flags';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortParams } from 'types/controls';

export const moviesInitialState: MoviesInitialState = {
  items: [],
  selectedMovie: null,
  error: null,
  flags: {
    [MoviesFlag.MoviesLoading]: false,
    [MoviesFlag.SelectedMovieLoading]: false,
    [MoviesFlag.EditMovieOpened]: false,
    [MoviesFlag.EditRequestInProgress]: false,
  },
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {
    resetState: () => {
      return moviesInitialState;
    },

    setMovies: (state, action: PayloadAction<MovieItem[]>) => {
      state.items = action.payload;
    },

    setMovie: (state, action: PayloadAction<MovieItem>) => {
      state.selectedMovie = action.payload;
    },

    setError: (state, action: PayloadAction<IBadRequestError | null>) => {
      state.error = action.payload;
    },

    setUpFlag: (state, action: PayloadAction<{ flag: MoviesFlag; value: boolean }>) => {
      const { flag, value } = action.payload;
      state.flags[flag] = value;
    },

    toggleEditMovieForm: (state, action: PayloadAction<{ isOpened: boolean; editMovieId?: string }>) => {
      const { isOpened, editMovieId } = action.payload;
      state.flags[MoviesFlag.EditMovieOpened] = isOpened;
      state.editMovieId = editMovieId;
    },

    setParams: (state, action: PayloadAction<SortParams | undefined>) => {
      state.loadMoviesParams = action.payload;
    },
  },
});

export const moviesActions = { ...moviesSlice.actions };

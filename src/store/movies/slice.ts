import { IBadRequestError } from 'types/server-entities';
import { MovieItem, MoviesInitialState } from 'types/movies';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const moviesInitialState: MoviesInitialState = {
  items: [],
  isMoviesLoading: false,
  isSelectedMovieLoading: false,
  error: null,
  selectedMovie: null,
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

    setIsMoviesLoading: (state, action: PayloadAction<boolean>) => {
      state.isMoviesLoading = action.payload;
    },

    setIsSelectedMovieLoading: (state, action: PayloadAction<boolean>) => {
      state.isSelectedMovieLoading = action.payload;
    },

    setError: (state, action: PayloadAction<IBadRequestError | null>) => {
      state.error = action.payload;
    },
  },
});

export const moviesActions = { ...moviesSlice.actions };

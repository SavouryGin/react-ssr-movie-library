import { IBadRequestError } from 'types/server-entities';
import { MovieItem, MoviesInitialState } from 'types/movies';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const moviesInitialState: MoviesInitialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {
    resetState: () => {
      return moviesInitialState;
    },

    setMovies: (state, action: PayloadAction<MovieItem[]>) => {
      state.data = action.payload;
    },

    loadAllMovies: (state, _action: PayloadAction) => {
      return state;
    },

    setIsMoviesLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setError: (state, action: PayloadAction<IBadRequestError | null>) => {
      state.error = action.payload;
    },
  },
});

export const moviesActions = { ...moviesSlice.actions };

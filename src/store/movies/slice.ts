import { MovieItem, MoviesInitialState } from 'types/movies';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const moviesInitialState: MoviesInitialState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {
    resetState: () => {
      return moviesInitialState;
    },

    setMovies: (state, action: PayloadAction<MovieItem[]>) => {
      state.movies = action.payload;
    },

    loadMovies: (state, _action: PayloadAction) => {
      return state;
    },
  },
});

export const moviesActions = { ...moviesSlice.actions };

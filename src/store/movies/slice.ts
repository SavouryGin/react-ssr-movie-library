import { IBadRequestError } from 'types/server-entities';
import { MovieItem, MoviesInitialState } from 'types/movies';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const moviesInitialState: MoviesInitialState = {
  items: [],
  isMoviesLoading: false,
  isSelectedMovieLoading: false,
  isEditMovieOpened: false,
  editMovieId: undefined,
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

    toggleEditMovieForm: (state, action: PayloadAction<{ isOpened: boolean; editMovieId?: string }>) => {
      const { isOpened, editMovieId } = action.payload;
      state.isEditMovieOpened = isOpened;
      state.editMovieId = editMovieId;
    },
  },
});

export const moviesActions = { ...moviesSlice.actions };

import { IBadRequestError } from 'types/server-entities';
import { MovieItem, MoviesFlag, MoviesInitialState } from 'types/movies';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const moviesInitialState: MoviesInitialState = {
  items: [],
  editMovieId: undefined,
  error: null,
  selectedMovie: null,
  flags: {
    isMoviesLoading: false,
    isSelectedMovieLoading: false,
    isEditMovieOpened: false,
    isEditRequestInProgress: false,
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
      state.flags.isEditMovieOpened = isOpened;
      state.editMovieId = editMovieId;
    },
  },
});

export const moviesActions = { ...moviesSlice.actions };

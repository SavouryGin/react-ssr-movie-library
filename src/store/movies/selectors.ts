import { IBadRequestError } from 'types/server-entities';
import { MovieItem, MoviesFlags } from 'types/movies';
import { RootState } from 'types/basic';
import { createSelector } from '@reduxjs/toolkit';

const getMoviesFlags = (state: RootState): MoviesFlags => state.movies.flags;

export const getMovieItems = (state: RootState): MovieItem[] => state.movies.items;

export const getSelectedMovie = (state: RootState): MovieItem | null => state.movies.selectedMovie;

export const getEditMovieItem = (state: RootState): MovieItem | undefined => {
  const id = state.movies.editMovieId;

  return state.movies.items.find((item) => item.id === id);
};

export const getError = (state: RootState): IBadRequestError | null => state.movies.error;

export const getIsMoviesLoadingStatus = createSelector(getMoviesFlags, (data: MoviesFlags): boolean => data.isMoviesLoading);

export const getIsSelectedMovieLoading = createSelector(getMoviesFlags, (data: MoviesFlags): boolean => data.isSelectedMovieLoading);

export const getIsEditMovieOpened = createSelector(getMoviesFlags, (data: MoviesFlags): boolean => data.isEditMovieOpened);

export const getIsEditRequestInProgress = createSelector(getMoviesFlags, (data: MoviesFlags): boolean => data.isEditRequestInProgress);

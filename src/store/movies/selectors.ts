import { MovieItem } from 'types/movies';
import { RootState } from 'types/basic';

export const getMovieItems = (state: RootState): MovieItem[] => state.movies.items;

export const getSelectedMovie = (state: RootState): MovieItem | null => state.movies.selectedMovie;

export const getIsMoviesLoadingStatus = (state: RootState): boolean => state.movies.isMoviesLoading;

export const getIsSelectedMovieLoading = (state: RootState): boolean => state.movies.isSelectedMovieLoading;

export const getIsEditMovieOpened = (state: RootState): boolean => state.movies.isEditMovieOpened;

export const getEditMovieItem = (state: RootState): MovieItem | undefined => {
  const id = state.movies.editMovieId;

  return state.movies.items.find((item) => item.id === id);
};

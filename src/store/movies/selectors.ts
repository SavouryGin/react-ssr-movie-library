import { MovieItem } from 'types/movies';
import { RootState } from 'types/basic';

export const getMovieList = (state: RootState): MovieItem[] => state.movies.list;
export const getIsLoadingStatus = (state: RootState): boolean => state.movies.isLoading;
export const getSelectedMovie = (state: RootState): MovieItem | null => state.movies.selectedMovie;

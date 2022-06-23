import { MovieItem } from 'types/movies';
import { RootState } from 'types/basic';

export const getMovieList = (state: RootState): MovieItem[] => state.movies.data;
export const getIsLoadingStatus = (state: RootState): boolean => state.movies.isLoading;

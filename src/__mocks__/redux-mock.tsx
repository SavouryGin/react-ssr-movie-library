import { combineReducers } from '@reduxjs/toolkit';
import { moviesInitialState, moviesSlice } from 'store/movies/slice';
import { movieList } from './movie-list';

export const mockedReducer = combineReducers({
  movies: moviesSlice.reducer,
});

export const mockedState = {
  movies: { ...moviesInitialState, list: movieList },
};

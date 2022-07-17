import { combineReducers } from '@reduxjs/toolkit';
import { moviesInitialState, moviesSlice } from 'store/movies/slice';

export const mockedReducer = combineReducers({
  movies: moviesSlice.reducer,
});

export const mockedState = {
  movies: moviesInitialState,
};

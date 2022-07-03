import { MovieFormErrors, MovieItem } from 'types/movies';
import { inputLimits } from './constants';

export const validateMovieEditForm = (values: MovieItem) => {
  const errors: MovieFormErrors = {};

  if (!values.title) {
    errors.title = 'Enter a movie title';
  }

  if (!values.genres) {
    errors.genres = 'Select at least one genre';
  }

  if (!values.date) {
    errors.date = 'Enter a release date';
  }

  if (!values.rating || values.rating > inputLimits.maxRating || values.rating < inputLimits.minRating) {
    errors.rating = 'Enter a correct rating value';
  }

  if (!values.runtime || values.runtime < inputLimits.minRuntime || values.runtime > inputLimits.maxRuntime) {
    errors.runtime = 'Enter a correct runtime value';
  }

  console.log(errors);

  return errors;
};

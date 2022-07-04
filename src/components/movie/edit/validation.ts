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

  if (!values.url || !isValidUrl(values.url)) {
    errors.url = 'Enter a valid url path to the movie poster';
  }

  if (!values.overview) {
    errors.overview = 'Enter a movie description';
  }

  return errors;
};

const isValidUrl = (input: string): boolean => {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$', // validate fragment locator
    'i',
  );

  return !!urlPattern.test(input);
};

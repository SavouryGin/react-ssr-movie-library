import CustomMultiSelect from 'components/controls/multi-select';
import DatePicker from 'components/controls/date-picker';
import Form from 'components/controls/form';
import NumericInput from 'components/controls/numeric-input';
import React, { useState } from 'react';
import TextArea from 'components/controls/text-area';
import TextInput from 'components/controls/text-input';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormValues } from 'types/controls';
import { MovieEditProps, MovieItem } from 'types/movies';
import { genreOptions, movieDefaultValues } from './constants';

const MovieEdit = ({ className, isEditMode, ...rest }: MovieEditProps) => {
  const movieEditFormClass = classNames(style.form, { [`${className}`]: !!className });
  const initialValues = isEditMode && rest.movie ? rest.movie : movieDefaultValues;
  const [movieValues, setMovieValues] = useState(initialValues);
  const takeValues = (values: FormValues) => {
    setMovieValues(values as MovieItem);
  };

  const addNewMovie = (movie: MovieItem) => {
    // TODO: Implement adding movie API call
    console.log(movie);
  };

  const updateMovie = (movie: MovieItem) => {
    // TODO: Implement updating movie API call
    console.log(movie);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isEditMode ? updateMovie(movieValues) : addNewMovie(movieValues);
  };

  const inputs = (
    <fieldset className={style.fieldset}>
      <TextInput name='title' label='Title' className={style.title} maxLength={100} defaultValue={initialValues.title} />
      <TextInput
        name='url'
        label='Movie url'
        className={style.url}
        placeholder='https://'
        maxLength={1000}
        defaultValue={initialValues.url}
      />
      <CustomMultiSelect
        name='genres'
        label='Genres'
        className={style.genre}
        options={genreOptions}
        placeholder='Select genre'
        defaultOptions={initialValues.genres}
      />
      <DatePicker name='date' label='Release date' className={style.date} defaultValue={initialValues.date} />
      <NumericInput
        name='rating'
        label='Rating'
        className={style.rating}
        max={10}
        min={0}
        step={0.1}
        placeholder='From 0 to 10'
        defaultValue={initialValues.rating}
      />
      <NumericInput
        name='runtime'
        label='Runtime'
        className={style.runtime}
        placeholder='minutes'
        step={1}
        min={0}
        max={1000}
        defaultValue={initialValues.runtime}
      />
      <TextArea name='overview' label='Overview' className={style.overview} maxLength={1000} defaultValue={initialValues.overview} />
    </fieldset>
  );

  return (
    <Form
      onSubmit={onSubmit}
      passValues={takeValues}
      inputs={inputs}
      initialValues={initialValues}
      submitButtonText='Submit'
      className={movieEditFormClass}
      hasResetButton
    />
  );
};

export default MovieEdit;

import CustomMultiSelect from 'components/controls/multi-select';
import Form from 'components/controls/form';
import NumericInput from 'components/controls/numeric-input';
import React, { useState } from 'react';
import TextArea from 'components/controls/text-area';
import TextInput from 'components/controls/text-input';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormValues } from 'types/controls';
import { MovieEditProps } from 'types/movies';
import { genreOptions, movieInitialValues } from './constants';

const MovieEdit = ({ className }: MovieEditProps) => {
  const movieEditClass = classNames(style.form, { [`${className}`]: !!className });
  const [movieValues, setMovieValues] = useState(movieInitialValues);
  const takeValues = (values: FormValues) => {
    setMovieValues(values as typeof movieInitialValues);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: perform Add/Update movie
    console.log(movieValues);
  };

  const inputs = (
    <fieldset className={style.fieldset}>
      <TextInput name='title' label='Title' className={style.title} />
      <TextInput name='url' label='Movie url' className={style.url} placeholder='https://' />
      <CustomMultiSelect name='genres' label='Genres' className={style.genre} options={genreOptions} placeholder='Select genre' />
      <TextInput name='date' label='Release date' className={style.date} />
      <NumericInput name='rating' label='Rating' className={style.rating} max={10} min={0} step={0.1} placeholder='From 0 to 10' />
      <NumericInput name='runtime' label='Runtime' className={style.runtime} placeholder='minutes' step={1} min={0} max={1000} />
      <TextArea name='overview' label='Overview' className={style.overview} />
    </fieldset>
  );

  return (
    <Form
      onSubmit={onSubmit}
      passValues={takeValues}
      inputs={inputs}
      initialValues={movieInitialValues}
      submitButtonText='Submit'
      className={movieEditClass}
      hasResetButton
    />
  );
};

export default MovieEdit;

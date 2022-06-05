import Form from 'components/controls/form';
import NumericInput from 'components/controls/numeric-input';
import React, { useState } from 'react';
import TextInput from 'components/controls/text-input';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormValues } from 'types/controls';
import { MovieEditProps } from 'types/movies';

const MovieEdit = ({ className }: MovieEditProps) => {
  const movieEditClass = classNames(style.form, { [`${className}`]: !!className });
  const movieInitialValues = { title: '', url: '', genre: '', date: '', rating: 0, runtime: 0, overview: '' };
  const [movieValues, setMovieValues] = useState(movieInitialValues);
  const takeValues = (values: FormValues) => {
    setMovieValues(values as typeof movieInitialValues);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: perform search
    console.log(movieValues);
  };

  const inputs = (
    <fieldset className={style.fieldset}>
      <TextInput name='title' label='Title' className={style.title} />
      <TextInput name='url' label='Movie url' className={style.url} placeholder='https://' />
      <TextInput name='genre' label='Genre' className={style.genre} />
      <TextInput name='date' label='Release date' className={style.date} />
      <NumericInput name='rating' label='Rating' className={style.rating} max={10} min={0} step={0.1} />
      <NumericInput name='runtime' label='Runtime' className={style.runtime} placeholder='minutes' step={1} min={0} max={1000} />
      <TextInput name='overview' label='Overview' className={style.overview} />
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

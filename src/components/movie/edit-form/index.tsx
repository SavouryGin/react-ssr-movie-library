import CustomMultiSelect from 'components/controls/multi-select';
import DatePicker from 'components/controls/date-picker';
import NumericInput from 'components/controls/numeric-input';
import React from 'react';
import TextArea from 'components/controls/text-area';
import TextInput from 'components/controls/text-input';
import style from './style.module.scss';
import { Field } from 'react-final-form';
import { MovieItem } from 'types/movies';
import { genreOptions, inputLimits } from '../edit/constants';

const MovieEditForm = ({ initialValues }: { initialValues: MovieItem }) => {
  return (
    <fieldset className={style.fieldset}>
      <Field
        name='title'
        label='Title'
        component={TextInput}
        className={style.title}
        maxLength={inputLimits.maxTextInputLength}
        defaultInputValue={initialValues.title}
      />
      <Field
        name='url'
        label='Movie url'
        placeholder='https://'
        component={TextInput}
        className={style.url}
        maxLength={inputLimits.maxTextInputLength}
        defaultInputValue={initialValues.url}
      />
      <Field
        name='genres'
        label='Genres'
        component={CustomMultiSelect}
        className={style.genre}
        options={genreOptions}
        placeholder='Select genre'
        defaultOptions={initialValues.genres}
      />
      <Field name='date' label='Release date' component={DatePicker} className={style.date} defaultInputValue={initialValues.date} />
      <Field
        name='rating'
        label='Rating'
        component={NumericInput}
        className={style.rating}
        max={inputLimits.maxRating}
        min={inputLimits.minRating}
        step={inputLimits.ratingStep}
        defaultInputValue={initialValues.rating}
      />
      <Field
        name='runtime'
        label='Runtime'
        placeholder='minutes'
        component={NumericInput}
        className={style.runtime}
        min={inputLimits.minRuntime}
        max={inputLimits.maxRuntime}
        step={inputLimits.runtimeStep}
        defaultInputValue={initialValues.runtime}
      />
      <Field
        name='overview'
        label='Overview'
        component={TextArea}
        className={style.overview}
        maxLength={inputLimits.maxTextInputLength}
        defaultInputValue={initialValues.overview}
      />
    </fieldset>
  );
};

export default MovieEditForm;

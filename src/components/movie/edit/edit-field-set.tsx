import CustomMultiSelect from 'components/controls/multi-select';
import DatePicker from 'components/controls/date-picker';
import NumericInput from 'components/controls/numeric-input';
import React from 'react';
import TextArea from 'components/controls/text-area';
import TextInput from 'components/controls/text-input';
import style from './style.module.scss';
import { Field, FieldRenderProps } from 'react-final-form';
import { MovieItem } from 'types/movies';
import { genreOptions, inputLimits } from './constants';

const EditFieldSet = ({ initialValues }: { initialValues: MovieItem }) => {
  return (
    <fieldset className={style.fieldset}>
      <Field name='title'>
        {({ meta, input }) => (
          <TextInput
            name={input.name}
            label='Title'
            className={style.title}
            maxLength={inputLimits.maxTextInputLength}
            defaultValue={initialValues.title}
            onChange={input.onChange}
            error={meta.touched && meta.error}
          />
        )}
      </Field>
      <Field name='url'>
        {({ meta, input }) => (
          <TextInput
            name={input.name}
            label='Movie url'
            className={style.url}
            placeholder='https://'
            maxLength={inputLimits.maxTextInputLength}
            defaultValue={initialValues.url}
            onChange={input.onChange}
            error={meta.touched && meta.error}
          />
        )}
      </Field>
      <Field name='genres'>
        {({ meta, input }: FieldRenderProps<string, HTMLElement, string>) => (
          <CustomMultiSelect
            name={input.name}
            label='Genres'
            className={style.genre}
            options={genreOptions}
            placeholder='Select genre'
            defaultOptions={initialValues.genres}
            onSelect={input.onChange}
            error={meta.touched && meta.error}
          />
        )}
      </Field>
      <Field name='date'>
        {({ meta, input }) => (
          <DatePicker
            name={input.name}
            label='Release date'
            className={style.date}
            defaultValue={initialValues.date}
            onChange={input.onChange}
            error={meta.touched && meta.error}
          />
        )}
      </Field>
      <Field name='rating'>
        {({ meta, input }) => (
          <NumericInput
            name={input.name}
            label='Rating'
            className={style.rating}
            max={inputLimits.maxRating}
            min={inputLimits.minRating}
            step={inputLimits.ratingStep}
            defaultValue={initialValues.rating}
            onChange={input.onChange}
            error={meta.touched && meta.error}
          />
        )}
      </Field>
      <Field name='runtime'>
        {({ meta, input }) => (
          <NumericInput
            name={input.name}
            label='Runtime'
            className={style.runtime}
            placeholder='minutes'
            min={inputLimits.minRuntime}
            max={inputLimits.maxRuntime}
            step={inputLimits.runtimeStep}
            defaultValue={initialValues.runtime}
            onChange={input.onChange}
            error={meta.touched && meta.error}
          />
        )}
      </Field>
      <Field name='overview'>
        {({ meta, input }) => (
          <TextArea
            name={input.name}
            label='Overview'
            className={style.overview}
            maxLength={inputLimits.maxTextInputLength}
            defaultValue={initialValues.overview}
            onChange={input.onChange}
            error={meta.touched && meta.error}
          />
        )}
      </Field>
    </fieldset>
  );
};

export default EditFieldSet;

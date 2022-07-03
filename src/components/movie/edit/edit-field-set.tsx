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

type EditFieldSetProps = {
  initialValues: MovieItem;
};

const EditFieldSet = ({ initialValues }: EditFieldSetProps) => {
  return (
    <fieldset className={style.fieldset}>
      <Field name='title'>
        {(props) => (
          <TextInput
            name={props.input.name}
            label='Title'
            className={style.title}
            maxLength={100}
            defaultValue={initialValues.title}
            onChange={props.input.onChange}
          />
        )}
      </Field>
      <Field name='url'>
        {(props) => (
          <TextInput
            name={props.input.name}
            label='Movie url'
            className={style.url}
            placeholder='https://'
            maxLength={inputLimits.maxTextInputLength}
            defaultValue={initialValues.url}
            onChange={props.input.onChange}
          />
        )}
      </Field>
      <Field name='genres'>
        {(props: FieldRenderProps<string, HTMLElement, string>) => (
          <CustomMultiSelect
            name={props.input.name}
            label='Genres'
            className={style.genre}
            options={genreOptions}
            placeholder='Select genre'
            defaultOptions={initialValues.genres}
            onSelect={props.input.onChange}
          />
        )}
      </Field>
      <Field name='date'>
        {(props) => (
          <DatePicker
            name={props.input.name}
            label='Release date'
            className={style.date}
            defaultValue={initialValues.date}
            onChange={props.input.onChange}
          />
        )}
      </Field>
      <Field name='rating'>
        {(props) => (
          <NumericInput
            name={props.input.name}
            label='Rating'
            className={style.rating}
            max={inputLimits.maxRating}
            min={inputLimits.minRating}
            step={inputLimits.ratingStep}
            placeholder='From 0 to 10'
            defaultValue={initialValues.rating}
            onChange={props.input.onChange}
          />
        )}
      </Field>
      <Field name='runtime'>
        {(props) => (
          <NumericInput
            name={props.input.name}
            label='Runtime'
            className={style.runtime}
            placeholder='minutes'
            min={inputLimits.minRuntime}
            max={inputLimits.maxRuntime}
            step={inputLimits.runtimeStep}
            defaultValue={initialValues.runtime}
            onChange={props.input.onChange}
          />
        )}
      </Field>
      <Field name='overview'>
        {(props) => (
          <TextArea
            name={props.input.name}
            label='Overview'
            className={style.overview}
            maxLength={inputLimits.maxTextInputLength}
            defaultValue={initialValues.overview}
            onChange={props.input.onChange}
          />
        )}
      </Field>
    </fieldset>
  );
};

export default EditFieldSet;

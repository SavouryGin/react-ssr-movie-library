import Button from 'components/controls/button';
import EditFieldSet from './edit-field-set';
import React, { useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { ButtonView } from 'enums/button-view';
import { Form, FormRenderProps } from 'react-final-form';
import { MovieEditProps, MovieItem } from 'types/movies';
import { movieDefaultValues } from './constants';

const MovieEdit = ({ className, isEditMode, movie }: MovieEditProps) => {
  const [formKey, setFormKey] = useState<number>(0);
  const initialValues = isEditMode && movie ? movie : movieDefaultValues;
  const movieEditFormClass = classNames(style.form, { [className as string]: !!className });

  const addNewMovie = (item: MovieItem) => {
    // TODO: Implement adding movie API call
    console.log(item);
  };

  const updateMovie = (item: MovieItem) => {
    // TODO: Implement updating movie API call
    console.log(item);
  };

  const onSubmit = (values: MovieItem) => {
    isEditMode ? updateMovie(values) : addNewMovie(values);
  };

  const onReset = (formProps: FormRenderProps<MovieItem, Partial<MovieItem>>) => {
    formProps.form.reset();
    setFormKey(formKey + 1);
  };

  return (
    <Form
      onSubmit={onSubmit}
      subscription={{ submitting: true, pristine: true }}
      render={(formProps) => {
        return (
          <form className={movieEditFormClass} onSubmit={formProps.handleSubmit} key={formKey}>
            <EditFieldSet initialValues={initialValues} />
            <div className={style.buttons}>
              <Button
                type='reset'
                text='Reset'
                view={ButtonView.Secondary}
                onClick={() => onReset(formProps)}
                isDisabled={formProps.submitting || formProps.pristine}
              />
              <Button type='submit' text='Submit' isDisabled={formProps.submitting} />
            </div>
          </form>
        );
      }}
    />
  );
};

export default MovieEdit;

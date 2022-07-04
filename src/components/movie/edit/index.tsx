import Button from 'components/controls/button';
import EditFieldSet from './edit-field-set';
import React, { useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { ButtonView } from 'enums/button-view';
import { Form, FormRenderProps } from 'react-final-form';
import { MovieEditProps, MovieItem } from 'types/movies';
import { createNewMovie } from 'store/movies/thunks';
import { movieDefaultValues } from './constants';
import { useAppDispatch } from 'hooks';
import { validateMovieEditForm } from './validation';

const MovieEdit = ({ className, isEditMode, movie }: MovieEditProps) => {
  const [formKey, setFormKey] = useState<number>(0);
  const dispatch = useAppDispatch();
  const initialValues = isEditMode && movie ? movie : movieDefaultValues;
  const movieEditFormClass = classNames(style.form, { [className as string]: !!className });

  const addNewMovie = (item: MovieItem) => {
    dispatch(createNewMovie(item));
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
      validate={validateMovieEditForm}
      render={(formRenderProps) => {
        return (
          <form className={movieEditFormClass} onSubmit={formRenderProps.handleSubmit} key={formKey}>
            <EditFieldSet initialValues={initialValues} />
            <div className={style.buttons}>
              <Button
                type='reset'
                text='Reset'
                view={ButtonView.Secondary}
                onClick={() => onReset(formRenderProps)}
                isDisabled={formRenderProps.submitting || formRenderProps.pristine}
              />
              <Button type='submit' text='Submit' isDisabled={formRenderProps.submitting} />
            </div>
            {formRenderProps.submitError && <div className='error'>{formRenderProps.submitError}</div>}
          </form>
        );
      }}
    />
  );
};

export default MovieEdit;

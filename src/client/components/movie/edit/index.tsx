import Button from 'components/controls/button';
import EditFieldSet from '../edit-form';
import React, { useState } from 'react';
import Spinner from 'components/spinner';
import classNames from 'classnames';
import style from './style.module.scss';
import { ButtonView } from 'enums/button-view';
import { CommonProps } from 'types/basic';
import { Form } from 'react-final-form';
import { MovieItem } from 'types/movies';
import { createNewMovie, updateMovie } from 'store/movies/thunks';
import { formSubscription, movieDefaultValues } from './constants';
import { getEditMovieItem, getError, getIsEditRequestInProgress } from 'store/movies/selectors';
import { moviesActions } from 'store/movies/slice';
import { useAppDispatch, useAppSelector } from 'hooks/index';
import { validateMovieEditForm } from './validation';

const MovieEdit = ({ className }: CommonProps) => {
  const [formKey, setFormKey] = useState<number>(0);
  const dispatch = useAppDispatch();
  const movie = useAppSelector(getEditMovieItem);
  const isLoading = useAppSelector(getIsEditRequestInProgress);
  const serverError = useAppSelector(getError);

  const isEditMode = !!movie;
  const initialValues = isEditMode && movie ? movie : movieDefaultValues;
  const movieEditFormClass = classNames(style.form, { [className as string]: !!className });

  const onSubmit = (values: MovieItem) => {
    isEditMode ? dispatch(updateMovie({ ...movie, ...values })) : dispatch(createNewMovie(values));
  };

  const onReset = () => {
    setFormKey(formKey + 1);
    dispatch(moviesActions.setError(null));
  };

  return (
    <Form
      onSubmit={onSubmit}
      subscription={formSubscription}
      validate={validateMovieEditForm}
      initialValues={initialValues}
      render={(formRenderProps) => (
        <form className={movieEditFormClass} onSubmit={formRenderProps.handleSubmit} key={formKey} role='form' id='edit-movie-form'>
          {isLoading && <Spinner className={style.spinner} />}
          <EditFieldSet initialValues={initialValues} />
          <div className={style.buttons}>
            <Button
              type='reset'
              text='Reset'
              view={ButtonView.Secondary}
              onClick={onReset}
              isDisabled={formRenderProps.submitting || formRenderProps.pristine}
              id='reset-movie-data'
            />
            <Button type='submit' text='Submit' isDisabled={formRenderProps.submitting} id='submit-movie-data' />
          </div>
          {serverError && <div className={style.error}>{`Something went wrong... ${serverError.message}`}</div>}
        </form>
      )}
    />
  );
};

export default MovieEdit;

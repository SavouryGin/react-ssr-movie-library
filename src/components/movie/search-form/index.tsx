import Button from 'components/controls/button';
import React, { useEffect } from 'react';
import TextInput from 'components/controls/text-input';
import style from './style.module.scss';
import { Field, Form } from 'react-final-form';
import { SEARCH_PATH } from 'pages/app-router/constants';
import { SearchBy } from 'enums/params';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { loadMovies } from 'store/movies/thunks';
import { useAppDispatch } from 'hooks';

const MovieSearchForm = ({ searchQuery }: { searchQuery?: string }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues = { movie: searchQuery };

  const onSubmit = (values: { movie: string }) => {
    const params = { searchBy: SearchBy.Title, search: values.movie };
    dispatch(loadMovies(params));
    navigate({ pathname: SEARCH_PATH, search: `?${createSearchParams({ search: values.movie })}` });
  };

  useEffect(() => {
    if (searchQuery) {
      onSubmit({ movie: searchQuery });
    }
  }, [searchQuery]);

  return (
    <div className={style.form}>
      <h2 className={style.heading}>Find your movie</h2>
      <Form
        onSubmit={onSubmit}
        subscription={{ submitting: true, pristine: true }}
        initialValues={initialValues}
        render={(formRenderProps) => {
          return (
            <form className={style.search} onSubmit={formRenderProps.handleSubmit} aria-label='search movie form'>
              <Field
                name='movie'
                component={TextInput}
                className={style.input}
                placeholder='What do you want to watch?'
                defaultInputValue={initialValues.movie}
              />
              <div className={style.button}>
                <Button type='submit' text='Submit' isDisabled={formRenderProps.submitting} />
              </div>
            </form>
          );
        }}
      />
    </div>
  );
};

export default MovieSearchForm;

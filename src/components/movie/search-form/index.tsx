import Form from 'components/controls/form';
import React, { useState } from 'react';
import TextInput from 'components/controls/text-input';
import style from './style.module.scss';
import { FormValues } from 'types/controls';
import { IGetMoviesParams } from 'types/server-entities';
import { SearchBy } from 'enums/params';
import { loadMovies } from 'store/movies/thunks';
import { useAppDispatch } from 'hooks';

const MovieSearchForm = () => {
  const searchFormInitialValue = { movie: '' };
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState<FormValues>(searchFormInitialValue);
  const takeValues = (values: FormValues) => {
    setSearchQuery(values as typeof searchFormInitialValue);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params: IGetMoviesParams = { searchBy: SearchBy.Title, search: searchQuery.movie as string };
    dispatch(loadMovies(params));
  };

  return (
    <div className={style.form}>
      <h2 className={style.heading}>Find your movie</h2>
      <Form
        onSubmit={onSubmit}
        passValues={takeValues}
        inputs={<TextInput name='movie' className={style.input} placeholder='What do you want to watch?' />}
        initialValues={searchFormInitialValue}
        className={style.search}
        submitButtonText='Search'
      />
    </div>
  );
};

export default MovieSearchForm;

import Layout from 'components/layout';
import React, { Suspense } from 'react';
import loadable from '@loadable/component';
import { Loader } from '../loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ROOT_PATH, SEARCH_PATH } from './constants';
import { store } from 'store/index';
import 'styles/reset.scss';

const HomePage = loadable(() => import('pages/home'));
const NotFoundPage = loadable(() => import('pages/not-found'));

export const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROOT_PATH} element={<Layout />}>
            <Route path={ROOT_PATH} element={<Navigate to={SEARCH_PATH} replace />} />
            <Route path={SEARCH_PATH} element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Provider>
  );
};

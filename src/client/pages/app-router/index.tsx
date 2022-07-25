import Layout from 'components/layout';
import React, { Suspense } from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from '@shared/loader';
import { ROOT_PATH, SEARCH_PATH } from '@shared/app/constants';

const HomePage = loadable(() => import('pages/home'));
const NotFoundPage = loadable(() => import('pages/not-found'));

const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROOT_PATH} element={<Layout />}>
          <Route path={ROOT_PATH} element={<Navigate to={SEARCH_PATH} replace />} />
          <Route path={SEARCH_PATH} element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default AppRouter;

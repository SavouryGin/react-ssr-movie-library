import Home from 'pages/home';
import Layout from 'components/layout';
import NotFoundPage from 'pages/not-found';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROOT_PATH, SEARCH_PATH } from './constants';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROOT_PATH} element={<Layout />}>
        <Route path={ROOT_PATH} element={<Navigate to={SEARCH_PATH} replace />} />
        <Route path={SEARCH_PATH} element={<Home />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;

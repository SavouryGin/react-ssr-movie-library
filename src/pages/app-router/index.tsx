import Home from 'pages/home';
import Layout from 'components/layout';
import NotFoundPage from 'pages/not-found';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function AppRouter(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/search' element={<Home />} />
          <Route path='/' element={<Navigate to='/search' replace />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

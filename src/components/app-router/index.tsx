import Home from 'pages/home';
import Layout from 'components/layout';
import NotFoundPage from 'pages/not-found';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRouter(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

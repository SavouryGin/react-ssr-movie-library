import Footer from 'components/footer';
import Header from 'components/header';
import React from 'react';
import style from './style.module.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={style.layout} id='page-layout'>
      <Header className={style.header} />
      <main className={style.main} data-testid='main-container'>
        <Outlet />
      </main>
      <Footer className={style.footer} />
    </div>
  );
};

export default Layout;

import Footer from 'components/footer';
import Header from 'components/header';
import React from 'react';
import { Outlet } from 'react-router-dom';

import './styles.scss';

const Layout = () => {
  return (
    <div className='layout'>
      <Header className='layout__header' />
      <main className='layout__main'>
        <Outlet />
      </main>
      <Footer className='layout__footer' />
    </div>
  );
};

export default Layout;

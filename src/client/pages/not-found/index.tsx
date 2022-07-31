import React from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <article className={style.page}>
      <h2>404 Error</h2>
      <p>
        Sorry, your page was not found. <Link to='/'>Go Home</Link>
      </p>
    </article>
  );
};

export default NotFoundPage;

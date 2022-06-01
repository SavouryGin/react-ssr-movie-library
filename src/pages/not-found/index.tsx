import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const NotFoundPage = () => {
  return (
    <article className='not-found-page'>
      <h2>404 Error</h2>
      <p>
        Sorry, your page was not found. <Link to='/'>Go Home</Link>
      </p>
    </article>
  );
};

export default NotFoundPage;

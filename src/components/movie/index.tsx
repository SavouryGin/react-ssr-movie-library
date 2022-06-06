import Button from 'components/controls/button';
import DeleteConfirmation from 'components/movie-delete-confirmation';
import Image from 'components/image';
import ModalWindow from 'components/modal-window';
import MovieEdit from 'components/movie-edit';
import MovieMenu from 'components/movie-menu';
import React, { useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { Icon } from 'enums/icon';
import { MovieProps } from 'types/movies';

const Movie = (props: MovieProps) => {
  const { className, title, genres, date, ...rest } = props;
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isEditMovieOpened, setIsEditMovieOpened] = useState(false);
  const [isDeleteConfirmationOpened, setIsDeleteConfirmationOpened] = useState(false);
  const movieClass = classNames(style.movie, { [`${className}`]: !!className });
  const year = new Date(date).getFullYear();
  const fallbackImagePath = 'assets/images/Fallback.jpg';
  const genresList = genres.map((item) => item.label).join(', ');

  const openMenu = () => {
    setIsMenuOpened(true);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  const closeEditForm = () => {
    setIsEditMovieOpened(false);
  };

  const openEditForm = () => {
    setIsEditMovieOpened(true);
  };

  const openDeleteConfirmation = () => {
    setIsDeleteConfirmationOpened(true);
  };

  const closeDeleteConfirmation = () => {
    setIsDeleteConfirmationOpened(false);
  };

  const confirmMovieDeletion = () => {
    // TODO: Implement delete movie API call
    setIsDeleteConfirmationOpened(false);
  };

  return (
    <div className={movieClass} onMouseLeave={closeMenu}>
      {isMenuOpened ? (
        <MovieMenu onClose={closeMenu} editMovie={openEditForm} deleteMovie={openDeleteConfirmation} />
      ) : (
        <Button onClick={openMenu} icon={Icon.Menu} view='only icon' className={style.button} />
      )}
      <Image path={rest.imagePath || fallbackImagePath} altText={`Banner for "${title}"`} className={style.image} />
      <p className={style.title}>{title}</p>
      <p className={style.year}>{year}</p>
      <p className={style.genres}>{genresList}</p>
      <ModalWindow
        isOpened={isEditMovieOpened}
        onClose={closeEditForm}
        title={'Edit movie'}
        content={<MovieEdit isEditMode movie={props} />}
      />
      <ModalWindow
        isOpened={isDeleteConfirmationOpened}
        onClose={closeDeleteConfirmation}
        title={'Delete movie'}
        content={<DeleteConfirmation onConfirm={confirmMovieDeletion} />}
      />
    </div>
  );
};

export default Movie;

import Button from 'components/controls/button';
import ModalWindow from 'components/modal-window';
import MovieBody from 'components/movie-body';
import MovieDeleteConfirmation from 'components/movie-delete-confirmation';
import MovieEdit from 'components/movie-edit';
import MovieMenu from 'components/movie-menu';
import React, { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { ButtonView } from 'enums/button-view';
import { Icon } from 'enums/icon';
import { MovieContext } from 'pages/home';
import { MovieProps } from 'types/movies';

const Movie = (props: MovieProps) => {
  const { className, title, genres, date, id, ...rest } = props;

  const editRef = useRef<HTMLDivElement>(null);
  const deleteRef = useRef<HTMLDivElement>(null);
  const movieContext = useContext(MovieContext);
  const [editElement, setEditElement] = useState<HTMLDivElement | null>(null);
  const [deleteElement, setDeleteElement] = useState<HTMLDivElement | null>(null);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [isEditMovieOpened, setIsEditMovieOpened] = useState<boolean>(false);
  const [isDeleteConfirmationOpened, setIsDeleteConfirmationOpened] = useState<boolean>(false);

  const { onClickMovie } = movieContext;
  const movieClass = classNames(style.movie, { [`${className}`]: !!className });

  useEffect(() => {
    setEditElement(editRef.current);
    setDeleteElement(deleteRef.current);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const toggleEditForm = () => {
    setIsEditMovieOpened(!isEditMovieOpened);
    closeMenuOnLeave();
  };

  const toggleDeleteConfirmation = () => {
    setIsDeleteConfirmationOpened(!isDeleteConfirmationOpened);
    closeMenuOnLeave();
  };

  const closeMenuOnLeave = () => {
    setIsMenuOpened(false);
  };

  const confirmMovieDeletion = () => {
    // TODO: Implement delete movie API call
    setIsDeleteConfirmationOpened(false);
  };

  return (
    <div className={movieClass} onMouseLeave={closeMenuOnLeave} onClick={() => onClickMovie(id)}>
      {isMenuOpened ? (
        <MovieMenu onClose={toggleMenu} editMovie={toggleEditForm} deleteMovie={toggleDeleteConfirmation} />
      ) : (
        <Button onClick={toggleMenu} icon={Icon.Menu} view={ButtonView.Icon} className={style.button} />
      )}
      <MovieBody title={title} date={date} genres={genres} imagePath={rest.imagePath} />
      <div ref={editRef}>
        {editElement && (
          <ModalWindow
            element={editElement}
            isOpened={isEditMovieOpened}
            onClose={toggleEditForm}
            title={'Edit movie'}
            content={<MovieEdit isEditMode movie={props} />}
          />
        )}
      </div>
      <div ref={deleteRef}>
        {deleteElement && (
          <ModalWindow
            element={deleteElement}
            isOpened={isDeleteConfirmationOpened}
            onClose={toggleDeleteConfirmation}
            title={'Delete movie'}
            content={<MovieDeleteConfirmation onConfirm={confirmMovieDeletion} />}
          />
        )}
      </div>
    </div>
  );
};

export default Movie;

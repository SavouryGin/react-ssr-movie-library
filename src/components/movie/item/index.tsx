import Button from 'components/controls/button';
import ModalWindow from 'components/modal-window';
import MovieBody from 'components/movie/body';
import MovieDeleteConfirmation from 'components/movie/delete-confirmation';
import MovieMenu from 'components/movie/menu';
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { ButtonView } from 'enums/button-view';
import { Icon } from 'enums/icon';
import { MovieProps } from 'types/movies';
import { moviesActions } from 'store/movies/slice';
import { useAppDispatch } from 'hooks';

const MovieItem = (props: MovieProps) => {
  const { className, title, genres, date, id, ...rest } = props;

  const dispatch = useAppDispatch();
  const deleteRef = useRef<HTMLDivElement>(null);
  const [deleteElement, setDeleteElement] = useState<HTMLDivElement | null>(null);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [isDeleteConfirmationOpened, setIsDeleteConfirmationOpened] = useState<boolean>(false);

  const movieClass = classNames(style.movie, { [`${className}`]: !!className });

  useEffect(() => {
    setDeleteElement(deleteRef.current);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const toggleEditForm = () => {
    dispatch(moviesActions.toggleEditMovieForm({ isOpened: true, editMovieId: id }));
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
    <>
      <div className={movieClass} onMouseLeave={closeMenuOnLeave}>
        {isMenuOpened ? (
          <MovieMenu onClose={toggleMenu} editMovie={toggleEditForm} deleteMovie={toggleDeleteConfirmation} />
        ) : (
          <Button onClick={toggleMenu} icon={Icon.Menu} view={ButtonView.Icon} className={style.button} />
        )}
        <MovieBody title={title} date={date} genres={genres} imagePath={rest.imagePath} id={id} />
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
    </>
  );
};

export default MovieItem;

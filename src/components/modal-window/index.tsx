import Button from 'components/controls/button';
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import style from './style.module.scss';
import { ButtonView } from 'enums/button-view';
import { Icon } from 'enums/icon';
import { ModalWindowProps } from 'types/basic';

const ModalWindow = ({ isOpened, onClose, content, title, className, element }: ModalWindowProps): React.ReactElement | null => {
  const modalClass = classNames(style.window, { [className as string]: !!className });

  const closeWindow = () => {
    onClose();
  };

  const window = (
    <div className={modalClass} role='dialog' aria-modal='true'>
      <header className={style.header}>
        <h2 className={style.heading}>{title}</h2>
        <Button onClick={closeWindow} icon={Icon.Close} view={ButtonView.Icon} className={style.close} />
      </header>
      <div className={style.content} role='region' aria-labelledby='modal-window-heading'>
        {content}
      </div>
    </div>
  );

  const portal = <div className={style.background}>{window}</div>;

  return isOpened && element ? ReactDOM.createPortal(portal, element) : null;
};

export default ModalWindow;

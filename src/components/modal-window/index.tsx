import Button from 'components/controls/button';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import style from './style.module.scss';
import { Icon } from 'enums/icon';
import { ModalWindowProps } from 'types/basic';

const ModalWindow = ({ isOpened, onClose, content, title, ...rest }: ModalWindowProps): React.ReactElement | null => {
  const targetElement = document.getElementById('modal');
  const bodyElement = document.querySelector('body');
  const modalClass = classNames(style.window, { [`${rest.className}`]: !!rest.className });

  useEffect(() => {
    if (bodyElement) {
      // Disable the maim scroll on open modal window
      const overflow = isOpened ? 'hidden' : 'auto';
      bodyElement.style.overflow = overflow;
    }
  }, [isOpened]);

  const closeWindow = () => {
    onClose();
  };

  const window = (
    <div className={modalClass} role='dialog' aria-modal='true'>
      <header className={style.header}>
        <h2 className={style.heading}>{title}</h2>
        <Button onClick={closeWindow} icon={Icon.Close} view='only icon' className={style.close} />
      </header>
      <div className={style.content} role='region' aria-labelledby='modal-window-heading'>
        {content}
      </div>
    </div>
  );

  const portal = <div className={style.background}>{window}</div>;

  return !isOpened || !targetElement ? null : ReactDOM.createPortal(portal, targetElement);
};

export default ModalWindow;

import React from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types/basic';
import './styles.scss';

type HeaderProps = CommonProps;

const Header = ({ className }: HeaderProps) => {
  const headerClass = classNames({ header: true, [`${className}`]: !!className });

  return (
    <header className={headerClass}>
      <div className='header__content'>Header</div>
    </header>
  );
};

export default Header;

import React from 'react';
import classNames from 'classnames';
import { ComponentProps } from 'types/basic';
import './styles.scss';

type HeaderProps = ComponentProps;

const Header = ({ className }: HeaderProps) => {
  const headerClass = classNames({ header: true, [`${className}`]: !!className });

  return <header className={headerClass}>Header</header>;
};

export default Header;

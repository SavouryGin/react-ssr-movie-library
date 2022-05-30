import Button from 'components/controls/button';
import React from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types/basic';
import './styles.scss';

type HeaderProps = CommonProps & {
  content?: React.ReactElement;
};

const Header = ({ className, content }: HeaderProps) => {
  const headerClass = classNames('header', { [`${className}`]: !!className });

  return (
    <header className={headerClass}>
      <div className='header__heading'>
        <span>
          <strong>netflix</strong>roulette
        </span>
        <Button text='+ Add movie' title='Add movie' view='secondary' />
      </div>
      <div className='header__content'>{content}</div>
    </header>
  );
};

export default Header;

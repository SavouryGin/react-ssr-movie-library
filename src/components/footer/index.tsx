import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { CommonProps } from 'types/basic';

const Footer = ({ className }: CommonProps) => {
  const footerClass = classNames(style.wrapper, { [className as string]: !!className });

  return (
    <footer className={footerClass}>
      <span className={style.text}>
        <strong>netflix</strong>roulette
      </span>
    </footer>
  );
};

export default Footer;

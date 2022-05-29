import React from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types/basic';
import './styles.scss';

type FooterProps = CommonProps;

const Footer = ({ className }: FooterProps) => {
  const footerClass = classNames({ footer: true, [`${className}`]: !!className });

  return (
    <footer className={footerClass}>
      <span className='footer__text'>
        <strong>netflix</strong>roulette
      </span>
    </footer>
  );
};

export default Footer;

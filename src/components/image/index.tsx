import React from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types/basic';

type ImageProps = CommonProps & {
  path: string;
  altText: string;
};

const Image = ({ className, path, altText }: ImageProps) => {
  const imageClass = classNames('image', { [`${className}`]: !!className });

  return (
    <div className={imageClass}>
      <img src={path} className='mms_logo_img' alt={altText} role='img' />
    </div>
  );
};

export default Image;

import React from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types/basic';

type ImageProps = CommonProps & {
  path: string;
  altText: string;
  onClickImage?: () => void;
};

const Image = ({ className, path, altText, onClickImage }: ImageProps) => {
  const imageClass = classNames({ [className as string]: !!className });

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (onClickImage) {
      onClickImage();
    }
  };

  return (
    <div className={imageClass} onClick={onClick}>
      <img src={path} alt={altText} role='img' />
    </div>
  );
};

export default Image;

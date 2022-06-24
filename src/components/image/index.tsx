import React from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types/basic';
import { FALLBACK_IMAGE_PATH } from 'components/image/constants';

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
      <img
        src={path}
        alt={altText}
        role='img'
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = FALLBACK_IMAGE_PATH;
        }}
      />
    </div>
  );
};

export default Image;

import Image from 'components/image/index';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { FALLBACK_IMAGE_PATH } from '../image/constants';
import { render, screen } from '@testing-library/react';

const testProps = {
  path: FALLBACK_IMAGE_PATH,
  altText: 'test alt text',
  onClickImage: jest.fn(),
};

describe('Image component:', () => {
  it('Should render the image', () => {
    render(<Image {...testProps} />);
    const image = screen.getByAltText(testProps.altText);
    expect(image).toBeInTheDocument();
  });

  it('Should match the snapshot', () => {
    const { asFragment } = render(<Image {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should call the passed onClickImage handler', () => {
    render(<Image {...testProps} />);
    const image = screen.getByRole('img');
    userEvent.click(image);
    expect(testProps.onClickImage).toHaveBeenCalledTimes(1);
  });
});

import MovieBody from 'components/movie/body';
import React from 'react';
import { movieList } from '__mocks__/movie-list';
import { render } from '@testing-library/react';

const testMovie = movieList[0];

const testProps = {
  title: testMovie.title,
  date: testMovie.date,
  genres: testMovie.genres,
  imagePath: testMovie.imagePath,
  id: testMovie.id,
  className: 'test-class',
};

describe('MovieBody component:', () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<MovieBody {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

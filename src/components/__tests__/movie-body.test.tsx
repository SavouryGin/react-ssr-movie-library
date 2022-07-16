import MovieBody from 'components/movie/body';
import React from 'react';
import { movieList } from '__mocks__/movie-list';
import { render } from '@testing-library/react';

const testProps = {
  title: movieList[0].title,
  date: movieList[0].date,
  genres: movieList[0].genres,
  imagePath: movieList[0].imagePath,
  id: movieList[0].id,
  className: 'test-class',
};

describe('MovieBody component:', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<MovieBody {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

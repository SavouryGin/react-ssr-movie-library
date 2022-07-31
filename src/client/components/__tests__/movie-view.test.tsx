import MovieView from 'components/movie/view';
import React from 'react';
import { mockedReducer, mockedState } from '__mocks__/redux-mock';
import { renderWithRedux } from '__mocks__/test-utils';

const testProps = {
  movieId: 'test-id',
  onCloseView: jest.fn(),
  className: 'test-class',
};

describe('MovieView component:', () => {
  it('matches the snapshot', () => {
    const { asFragment } = renderWithRedux(<MovieView {...testProps} />, mockedReducer, mockedState);
    expect(asFragment()).toMatchSnapshot();
  });
});

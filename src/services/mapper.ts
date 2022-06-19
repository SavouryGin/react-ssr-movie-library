import { AxiosResponse } from 'axios';
import { Genre } from 'enums/genre';
import { GenreOption, MovieItem } from 'types/movies';
import { IMoviesResponse } from 'types/server-entities';
import { MIN_DATE } from 'components/controls/date-picker/constants';

const mapper = {
  transformGetMoviesResponse: (response: AxiosResponse<IMoviesResponse>): MovieItem[] => {
    console.log('response map', response);

    return response.data.data.map((item) => {
      return {
        id: item.id.toString(),
        title: item.title,
        genres: mapGenresToGenreOptions(item.genres),
        date: item.release_date || MIN_DATE,
        rating: item.vote_average || 0,
        runtime: item.runtime,
        overview: item.overview,
        voteCount: item.vote_count,
        imagePath: item.poster_path,
        budget: item.budget,
        revenue: item.revenue,
      };
    });
  },
};

const mapGenresToGenreOptions = (input: string[]): GenreOption[] => {
  return input.map((item) => {
    if (Object.values(Genre).includes(item as Genre)) {
      return {
        label: item,
        value: item as Genre,
      };
    } else {
      return {
        label: 'Unknown',
        value: Genre.Unknown,
      };
    }
  });
};

export default Object.freeze(mapper);

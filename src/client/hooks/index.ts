import { AppDispatch, RootState } from 'types/basic';
import { AvailableQuery } from 'enums/available-query';
import { SortOrder } from 'enums/params';
import { SortParams } from 'types/controls';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useQuery = (searchString: string) => new URLSearchParams(searchString);

export const useSelectedTabFromSearchParams = (searchString: string): string | undefined => {
  const [selectedTabId, setSelectedTabId] = useState<string>();
  const searchParams = useQuery(searchString);

  useEffect(() => {
    const genre = searchParams.get(AvailableQuery.Genre);
    if (genre) {
      setSelectedTabId(`${genre}-movies`);
    }
  }, [searchString]);

  return selectedTabId;
};

export const useSearchQueryFromSearchParams = (searchString: string): string | undefined => {
  const [searchQuery, setSearchQuery] = useState<string>();
  const searchParams = useQuery(searchString);

  useEffect(() => {
    const search = searchParams.get(AvailableQuery.Search);
    if (search) {
      setSearchQuery(search);
    }
  }, [searchString]);

  return searchQuery;
};

export const useMovieIdFromSearchParams = (searchString: string): string | undefined => {
  const [movieId, setMovieId] = useState<string>();
  const searchParams = useQuery(searchString);

  useEffect(() => {
    const movie = searchParams.get(AvailableQuery.Movie);
    if (movie) {
      setMovieId(movie);
    }
  }, [searchString]);

  return movieId;
};

export const useSortOptionsFromSearchParams = (searchString: string): SortParams | undefined => {
  const [sortOptions, setSortOptions] = useState<SortParams>();
  const searchParams = useQuery(searchString);

  useEffect(() => {
    const sortBy = searchParams.get(AvailableQuery.SortBy);
    const sortOrder = searchParams.get(AvailableQuery.SortOrder);
    if (sortBy && sortOrder) {
      setSortOptions({ sortBy, sortOrder: sortOrder as SortOrder });
    }
  }, [searchString]);

  return sortOptions;
};

import { AppDispatch, RootState } from 'types/basic';
import { SortOrder } from 'enums/params';
import { SortParams } from 'types/controls';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSelectedTabFromSearchParams = (searchParams: URLSearchParams): string | undefined => {
  const [selectedTabId, setSelectedTabId] = useState<string>();

  useEffect(() => {
    const genre = searchParams.get('genre');
    if (genre) {
      setSelectedTabId(`${genre}-movies`);
    }
  }, [searchParams]);

  return selectedTabId;
};

export const useSearchQueryFromSearchParams = (searchParams: URLSearchParams): string | undefined => {
  const [searchQuery, setSearchQuery] = useState<string>();

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  return searchQuery;
};

export const useMovieIdFromSearchParams = (searchParams: URLSearchParams): string | undefined => {
  const [movieId, setMovieId] = useState<string>();

  useEffect(() => {
    const movie = searchParams.get('movie');
    if (movie) {
      setMovieId(movie);
    }
  }, [searchParams]);

  return movieId;
};

export const useSortOptionsFromSearchParams = (searchParams: URLSearchParams): SortParams | undefined => {
  const [sortOptions, setSortOptions] = useState<SortParams>();

  useEffect(() => {
    const sortBy = searchParams.get('sortBy');
    const sortOrder = searchParams.get('sortOrder');
    if (sortBy && sortOrder) {
      setSortOptions({ sortBy, sortOrder: sortOrder as SortOrder });
    }
  }, [searchParams]);

  return sortOptions;
};

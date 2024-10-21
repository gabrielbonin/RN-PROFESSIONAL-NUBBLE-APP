import {useEffect, useState} from 'react';

import {Page} from '@types';

export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>,
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [list, setList] = useState<Data[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await getList(page);

      setList(data);
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
      //TODO: Implement pagination
      setPage(1);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    // Prevent multiple requests
    if (loading || !hasNextPage) {
      return;
    }

    try {
      setLoading(true);
      const {data, meta} = await getList(page);
      setList([...list, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    list,
    loading,
    error,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}

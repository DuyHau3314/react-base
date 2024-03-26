import { useInfiniteQuery, useQuery } from 'react-query';
import { fetchLatestMeal, fetchMeals } from 'src/api/meal';

export const useMeals = (type?: string) => {
  return useInfiniteQuery(['meals', { type }], ({ pageParam = 1 }) => fetchMeals({ pageParam, type }), {
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.totalPages) {
        return lastPage.currentPage + 1;
      } else {
        return undefined;
      }
    },
    keepPreviousData: true
  });
};

export const useLatestMeal = () => {
  return useQuery('latestMeal', fetchLatestMeal);
};

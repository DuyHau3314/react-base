import { useInfiniteQuery } from 'react-query';
import { fetchDiaries } from 'src/api/diary';

export const useDiaries = () => {
  return useInfiniteQuery(['diaries'], ({ pageParam = 1 }) => fetchDiaries({ pageParam }), {
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

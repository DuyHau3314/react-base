import { useInfiniteQuery } from 'react-query';
import { fetchPosts } from 'src/api/posts';

export const usePosts = () => {
  return useInfiniteQuery(['posts'], ({ pageParam = 1 }) => fetchPosts({ pageParam }), {
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

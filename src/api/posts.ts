import axiosInstance from './axios';

export const fetchPosts = async ({ pageParam = 1 }) => {
  const url = `/posts?page=${pageParam}`;

  const { data } = await axiosInstance.get(url);
  return data;
};

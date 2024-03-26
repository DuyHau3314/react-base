import axiosInstance from './axios';

export const fetchDiaries = async ({ pageParam = 1 }) => {
  const url = `/diaries?page=${pageParam}`;

  const { data } = await axiosInstance.get(url);
  return data;
};

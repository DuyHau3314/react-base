import axiosInstance from './axios';

interface FetchMealsParams {
  pageParam?: number;
  type?: string | null;
}

export const fetchMeals = async ({ pageParam = 1, type = null }: FetchMealsParams) => {
  let url = `/meals?page=${pageParam}`;
  if (type) {
    url += `&type=${type}`;
  }
  const { data } = await axiosInstance.get(url);
  return data;
};

export const fetchLatestMeal = async () => {
  const { data } = await axiosInstance.get('/meals/latest');
  return data;
};

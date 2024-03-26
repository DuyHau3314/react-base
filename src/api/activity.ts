import axiosInstance from './axios';

export const fetchActivities = async () => {
  const url = '/activities';

  const { data } = await axiosInstance.get(url);
  return data;
};

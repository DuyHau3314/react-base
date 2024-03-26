import { useQuery } from 'react-query';
import { fetchActivities } from 'src/api/activity';

const useActivities = () => {
  return useQuery('activities', fetchActivities);
};

export { useActivities };

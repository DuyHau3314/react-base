import { Model } from 'miragejs';

interface Activity {
  id: string;
  title: string;
  duration: string;
  calories: string;
}

export default Model.extend<Partial<Activity>>({});

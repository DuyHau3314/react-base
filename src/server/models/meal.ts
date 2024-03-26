import { Model } from 'miragejs';

interface Meal {
  id: string;
  name: string;
  imageUrl: string;
  type: string;
  date: string;
}

export default Model.extend<Partial<Meal>>({});

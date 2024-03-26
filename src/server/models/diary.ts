import { Model } from 'miragejs';

interface Diary {
  id: string;
  title: string;
  description: string;
  date: Date;
}

export default Model.extend<Partial<Diary>>({});

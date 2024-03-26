// src/mirage/factories/activity.ts (not meal.ts)
import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

export default Factory.extend({
  id() {
    return faker.datatype.uuid();
  },
  title() {
    return '私の日記の記録が一部表示されます';
  },
  description() {
    return 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…';
  },
  date() {
    return faker.date.recent(7);
  }
});

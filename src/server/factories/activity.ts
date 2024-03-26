// src/mirage/factories/activity.ts (not meal.ts)
import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

export default Factory.extend({
  id() {
    return faker.datatype.uuid();
  },
  title() {
    return '家事全般（立ち・軽い）';
  },
  duration() {
    return '10 min';
  },
  calories() {
    return '26kcal';
  }
});

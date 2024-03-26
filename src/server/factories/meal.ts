// src/mirage/factories/meal.ts
import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

// The structure of the foodImages object can be adjusted as needed.
const foodImages = {
  morning: ['/assets/m01.jpg', '/assets/m02.jpg', '/assets/m03.jpg'],
  lunch: ['/assets/l01.jpg', '/assets/l02.jpg', '/assets/l03.jpg'],
  dinner: ['/assets/d01.jpg', '/assets/d02.jpg'],
  snack: ['/assets/s01.jpg', '/assets/s02.jpg']
};

export default Factory.extend({
  id() {
    return faker.datatype.uuid();
  },
  name() {
    return faker.commerce.productName();
  },
  imageUrl() {
    const types = Object.keys(foodImages) as Array<keyof typeof foodImages>;
    const type = faker.helpers.arrayElement(types);
    return faker.helpers.arrayElement(foodImages[type]);
  },
  type() {
    return faker.helpers.arrayElement(['morning', 'lunch', 'dinner', 'snack']);
  },
  date() {
    return faker.date.recent(30).toISOString().split('T')[0]; // YYYY-MM-DD format
  }
});

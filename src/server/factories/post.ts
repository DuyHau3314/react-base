// src/mirage/factories/post.ts
import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

export default Factory.extend({
  date() {
    return faker.date.recent(90).toISOString(); // 90 days range
  },
  image() {
    const images = [
      '/src/assets/images/column-1.jpg',
      '/src/assets/images/column-2.jpg',
      '/src/assets/images/column-3.jpg',
      '/src/assets/images/column-4.jpg',
      '/src/assets/images/column-5.jpg',
      '/src/assets/images/column-6.jpg',
      '/src/assets/images/column-7.jpg',
      '/src/assets/images/column-8.jpg'
    ];
    return faker.helpers.arrayElement(images);
  },
  title() {
    return faker.lorem.sentence();
  },
  tags() {
    return faker.lorem.words(3).split(' ');
  }
});

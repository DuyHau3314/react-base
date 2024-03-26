// src/mirage/seeds/meal.ts
import { faker } from '@faker-js/faker';

export default function mealSeeds(server: any) {
  const foodTypes = ['morning', 'lunch', 'dinner', 'snack'];
  const foodImages = {
    morning: ['src/assets/images/m01.jpg', 'src/assets/images/m02.jpg', 'src/assets/images/m03.jpg'],
    lunch: ['src/assets/images/l01.jpg', 'src/assets/images/l02.jpg', 'src/assets/images/l03.jpg'],
    dinner: ['src/assets/images/d01.jpg', 'src/assets/images/d02.jpg'],
    snack: ['src/assets/images/s01.jpg']
  };

  for (let i = 0; i < 100; i++) {
    foodTypes.forEach((type) => {
      server.create('meal', {
        name: faker.commerce.productName(),
        imageUrl: faker.helpers.arrayElement(foodImages[type]),
        type,
        date: faker.date.recent(30).toISOString().split('T')[0]
      });
    });
  }
}

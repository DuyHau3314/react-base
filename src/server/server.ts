// src/mirage/server.ts
import { createServer } from 'miragejs';

import activityFactory from './factories/activity';
import diaryFactory from './factories/diary';
import mealFactory from './factories/meal';
import postFactory from './factories/post';
import activityModel from './models/activity';
import diaryModel from './models/diary';
import mealModel from './models/meal';
import postModel from './models/post';
import activityRoutes from './routes/activity';
import diaryRoutes from './routes/diary';
import mealRoutes from './routes/meal';
import postRoutes from './routes/post';
import activitySeeds from './seeds/activity';
import diarySeeds from './seeds/diary';
import mealSeeds from './seeds/meal';
import postSeeds from './seeds/post';

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      meal: mealModel,
      activity: activityModel,
      diary: diaryModel,
      post: postModel
      // ... other models
    },

    factories: {
      meal: mealFactory,
      activity: activityFactory,
      diary: diaryFactory,
      post: postFactory
      // ... other factories
    },

    seeds(server) {
      mealSeeds(server);
      activitySeeds(server);
      diarySeeds(server);
      postSeeds(server);
      // ... other seed functions
    },

    routes() {
      mealRoutes(this);
      activityRoutes(this);
      diaryRoutes(this);
      postRoutes(this);
      // ... other route functions
    }
  });

  return server;
}

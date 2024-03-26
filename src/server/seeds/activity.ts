/* eslint-disable @typescript-eslint/no-explicit-any */
// src/mirage/seeds/activity.ts
export default function activitySeeds(server: any) {
  server.createList('activity', 100);
}

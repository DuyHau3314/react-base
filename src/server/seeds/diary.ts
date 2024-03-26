/* eslint-disable @typescript-eslint/no-explicit-any */
// src/mirage/seeds/activity.ts
export default function diarySeeds(server: any) {
  server.createList('diary', 100);
}

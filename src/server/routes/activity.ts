/* eslint-disable @typescript-eslint/no-explicit-any */
export default function mealRoutes(server: any) {
  server.get('/api/activities', (schema: any) => {
    return schema.activities.all();
  });
}

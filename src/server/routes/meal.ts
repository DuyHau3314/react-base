/* eslint-disable @typescript-eslint/no-explicit-any */
export default function mealRoutes(server: any) {
  server.get('/api/meals', (schema: any, request: any) => {
    const page = parseInt(request.queryParams.page || '1', 10);
    const perPage = parseInt(request.queryParams.perPage || '8', 10);

    let allMeals = schema.db.meals
      .sort((a, b) => b.date.localeCompare(a.date)) // Sort by date descending
      .map((meal, index) => {
        meal.date = meal.date.split('T')[0]; // Simplify date format to 'YYYY-MM-DD'
        return meal;
      });

    const typeFilter = request.queryParams.type;
    if (typeFilter) {
      allMeals = allMeals.filter((meal) => meal.type === typeFilter);
    }

    const latestDate = allMeals[0]?.date; // Assuming allMeals is already sorted by date
    const mealsForLatestDate = allMeals.filter((meal) => meal.date === latestDate);
    const mealTypesForLatestDate = new Set(mealsForLatestDate.map((meal) => meal.type));
    const percentage = (mealTypesForLatestDate.size / 4) * 100; // Assuming there are 4 meal types

    const total = allMeals.length;
    const pageStart = (page - 1) * perPage;
    const pageEnd = pageStart + perPage;
    const meals = allMeals.slice(pageStart, pageEnd);

    return {
      meals: meals, // Already paginated meals
      total: total,
      currentPage: page,
      perPage: perPage,
      totalPages: Math.ceil(total / perPage),
      latestDatePercentage: percentage
    };
  });

  server.get('/api/meals/latest', (schema: any) => {
    const allMeals = schema.db.meals.map((meal) => ({
      ...meal,
      date: meal.date.split('T')[0]
    }));

    // Sort meals by date in descending order
    allMeals.sort((a, b) => b.date.localeCompare(a.date));

    const latestDate = allMeals[0]?.date; // Get the latest date from sorted meals
    const mealsForLatestDate = allMeals.filter((meal) => meal.date === latestDate);

    // Define all required meal types
    const requiredMealTypes = new Set(['morning', 'lunch', 'dinner', 'snack']);
    const mealTypesForLatestDate = new Set(mealsForLatestDate.map((meal) => meal.type));

    let matchedTypes = 0;
    requiredMealTypes.forEach((type) => {
      if (mealTypesForLatestDate.has(type)) {
        matchedTypes += 1;
      }
    });
    const percentage = (matchedTypes / requiredMealTypes.size) * 100;

    return {
      latestDate: latestDate,
      latestDatePercentage: percentage
    };
  });
}

import React, { useState } from 'react';
import { useMeals } from 'src/hooks/useMeals';
import Row from 'src/layout/components/Row';

import MealHistory from './meal-history/components/MealHistory';
import TransitInput from './transit-input/components/TransitInput';

const Meal: React.FC = () => {
  const [mealType, setMealType] = useState<string | null>(null);
  const { data, error, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useMeals(mealType);

  return (
    <div>
      <Row marginY="2rem">
        <TransitInput setMealType={setMealType} />
      </Row>

      <MealHistory
        data={data}
        error={error}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  );
};

export default Meal;

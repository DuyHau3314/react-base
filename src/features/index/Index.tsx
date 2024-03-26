import { FC, lazy, LazyExoticComponent, ReactElement, Suspense } from 'react';
import SplitScreen from 'src/layout/components/SplitScreen';

import CircularPageLoader from '../../shared/page-loader/CircularPageLoader';
import BodyWeight from '../body-weight/components/BodyWeight';

const DateAndAchievementRate: LazyExoticComponent<FC> = lazy(() => import('../date-achievement-rate/components/DateAndAchievementRate'));
const Meal: LazyExoticComponent<FC> = lazy(() => import('../meal/Meal'));

const Index: FC = (): ReactElement => {
  return (
    <div>
      <Suspense fallback={<CircularPageLoader />}>
        <SplitScreen leftWidth={1.5} rightWidth={2} height="400px">
          <DateAndAchievementRate />
          <BodyWeight />
        </SplitScreen>

        <Meal />
      </Suspense>
    </div>
  );
};

export default Index;

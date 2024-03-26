import { FC, ReactElement } from 'react';
import LineChart from 'src/shared/chart/LineChart';

const BodyWeight: FC = (): ReactElement => {
  return (
    <div className="h-full">
      <LineChart />
    </div>
  );
};

export default BodyWeight;

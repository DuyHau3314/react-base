import { FC, ReactElement } from 'react';
import { useLatestMeal } from 'src/hooks/useMeals';
import Row from 'src/layout/components/Row';
import CircularPageLoader from 'src/shared/page-loader/CircularPageLoader';
import CircularProgress from 'src/shared/progress/CircleProgress';
import { device } from 'src/theme';
import styled from 'styled-components';

const StyleDateAndAchievementRate = styled(Row)`
  background-image: url('/src/assets/images/d01.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  width: 100%;
  height: 100%;
  position: relative;

  @media ${device.small} {
    width: 100vw;
    height: 300px;
  }
`;

const DateAndAchievementRate: FC = (): ReactElement => {
  const { data, isLoading, error } = useLatestMeal();

  if (isLoading) {
    return <CircularPageLoader />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <StyleDateAndAchievementRate>
      <CircularProgress percentage={data.latestDatePercentage} date={data.latestDate} />
    </StyleDateAndAchievementRate>
  );
};

export default DateAndAchievementRate;

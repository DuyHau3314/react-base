/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactElement } from 'react';
import Row from 'src/layout/components/Row';
import Button from 'src/shared/button/Button';
import CircularPageLoader from 'src/shared/page-loader/CircularPageLoader';
import { device } from 'src/theme';
import styled from 'styled-components';

import MealItem from './MealItem';

interface Meal {
  id: string;
  name: string;
  imageUrl: string;
  type: string;
  date: string;
}

interface MealHistoryProps {
  data: any;
  error: any;
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
}

const StyleMealHistory = styled.div`
  padding: 0 10%;

  @media ${device.small} {
    padding: 15px 5%;
  }

  @media ${device.medium} {
    padding: 15px 10%;
  }

  @media ${device.large} {
    padding: 15px 10%;
  }
`;

const MealHistory: FC<MealHistoryProps> = (props): ReactElement => {
  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = props;

  if (isLoading) {
    return <CircularPageLoader />;
  }
  if (error) {
    return <div>An error occurred: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }

  return (
    <StyleMealHistory>
      <Row columns={4} gap="0.5rem">
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.meals.map((meal) => (
              <MealItem key={meal.id} meal={meal} />
            ))}
          </React.Fragment>
        ))}
      </Row>
      <Row centerX marginY="1rem">
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          label={isFetchingNextPage ? 'さらに読み込み中...' : hasNextPage ? '記録をもっと見る' : 'これ以上ロードするものはありません'}
        ></Button>
      </Row>
    </StyleMealHistory>
  );
};

export default MealHistory;

import React from 'react';
import { useDiaries } from 'src/hooks/useDiaries';
import Row from 'src/layout/components/Row';
import Grid from 'src/layout/GridContainer';
import Button from 'src/shared/button/Button';
import DateTimeDisplay from 'src/shared/date-time/DateTimeDisplay';
import CircularPageLoader from 'src/shared/page-loader/CircularPageLoader';
import styled from 'styled-components';

const DiaryCard = styled.div`
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.gray500};
`;

const DiaryDate = styled.div`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.dark700};
  margin-bottom: 0.5rem;
`;

const DiaryTitle = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark700};
  margin: 0 0 0.5rem 0;
`;

const DiaryDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.dark700};
`;

// React component
const DiaryList = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useDiaries();

  if (isLoading) {
    return <CircularPageLoader />;
  }
  if (error) {
    return <div>An error occurred: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }

  if (!data) {
    return <></>;
  }

  return (
    <>
      <Grid columns={4}>
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.diaries.map((entry) => (
              <DiaryCard key={entry.id}>
                <DiaryDate>
                  <DateTimeDisplay dateString={entry.date} />
                </DiaryDate>
                <DiaryTitle>{entry.title}</DiaryTitle>
                <DiaryDescription>{entry.description}</DiaryDescription>
              </DiaryCard>
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <Row width="100%" centerX marginTop="1rem">
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          label={isFetchingNextPage ? 'さらに読み込み中...' : hasNextPage ? 'コラムをもっと見る' : 'これ以上ロードするものはありません'}
        ></Button>
      </Row>
    </>
  );
};

export default DiaryList;

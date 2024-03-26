import DiaryList from 'src/features/diary/components/Diary';
import ExerciseList from 'src/features/record/components/ExerciseList';
import Record from 'src/features/record/components/Record';
import Row from 'src/layout/components/Row';
import LineChart from 'src/shared/chart/LineChart';
import { device } from 'src/theme';
import styled from 'styled-components';

const RecordWrapper = styled.div`
  width: 100%;

  padding: 15px 10%;

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

const RecordPage = () => {
  return (
    <RecordWrapper>
      <Row spaceBetween>
        <Record />

        <Row height="350px" width="100%" marginTop="3rem">
          <LineChart />
        </Row>

        <Row width="100%" marginTop="3rem">
          <ExerciseList />
        </Row>

        <Row width="100%" marginTop="3rem">
          <DiaryList />
        </Row>
      </Row>
    </RecordWrapper>
  );
};

export default RecordPage;

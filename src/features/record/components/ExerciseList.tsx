import styled from 'styled-components';

import ActivityList from './ActivityList';

const ExerciseHeader = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.light};
`;

const ExerciseWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark700};
  padding: 1rem 2rem;
  width: 100%;
`;

const ExerciseList = () => {
  return (
    <ExerciseWrapper>
      <ExerciseHeader>
        <h4>BODY RECORD</h4>
        <button>2023.23.03</button>
      </ExerciseHeader>

      <ActivityList />
    </ExerciseWrapper>
  );
};

export default ExerciseList;

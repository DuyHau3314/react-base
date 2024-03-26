import { useActivities } from 'src/hooks/useActivities';
import Row from 'src/layout/components/Row';
import CircularPageLoader from 'src/shared/page-loader/CircularPageLoader';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.colors.light};
  padding: 0;
  margin: 0;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 9px;
    background-color: ${({ theme }) => theme.colors.gray300};
    border-radius: 15px;
  }

  /* Styles for the scrollbar handle */
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary500};
    border: 2px solid ${({ theme }) => theme.colors.gray300};
    border-radius: 30%;
  }

  /* Optional: Styles for the scrollbar on hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.primary600};
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 13px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  position: relative;
  margin: 0 5px;

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.light};
    font-size: 24px;
    position: absolute;
    left: -3px;
    top: 30%;
    transform: translateY(-50%);
  }
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.span`
  font-size: 1rem;
`;

const ItemDuration = styled.span`
  font-size: 1rem;
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.primary500};
`;

const ItemCalories = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary500};
`;

const ActivityList = () => {
  const { data, isLoading, error } = useActivities();

  if (isLoading) {
    return <CircularPageLoader />;
  }

  if (error) {
    console.log('===error', error);
    return <div>Failed to fetch data</div>;
  }

  return (
    <List>
      <Row columns={2} marginRight="1.2rem">
        {data?.activities?.map((activity, index) => (
          <ListItem key={index}>
            <ItemDetails>
              <ItemTitle>{activity.title}</ItemTitle>
              <ItemCalories>{activity.calories}</ItemCalories>
            </ItemDetails>
            <ItemDuration>{activity.duration}</ItemDuration>
          </ListItem>
        ))}
      </Row>
    </List>
  );
};

export default ActivityList;

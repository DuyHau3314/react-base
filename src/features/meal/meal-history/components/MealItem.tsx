import { FC, ReactElement } from 'react';
import { upperFirst } from 'src/shared/utils';
import styled from 'styled-components';

interface MealItemProps {
  meal: {
    id: string;
    name: string;
    imageUrl: string;
    type: string;
    date: string; //yyyy-mm-dd
  };
}

const StyleMealItem = styled.div<{ imageUrl: string }>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 300px;
  height: 300px;
`;

const StyleInfoItem = styled.div`
  position: absolute;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary500};
  bottom: 0;
  left: 0;
`;

const MealItem: FC<MealItemProps> = ({ meal }): ReactElement => {
  const { imageUrl, date, type } = meal;

  const month = date.split('-')[1];
  const day = date.split('-')[2];

  return (
    <StyleMealItem imageUrl={imageUrl}>
      <StyleInfoItem>
        <h2>{`${month}.${day}.${upperFirst(type)}`}</h2>
      </StyleInfoItem>
    </StyleMealItem>
  );
};

export default MealItem;

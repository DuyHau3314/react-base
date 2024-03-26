import React, { FC } from 'react';
import { listRecord } from 'src/features/record/configs/record';
import Row from 'src/layout/components/Row';
import Grid from 'src/layout/GridContainer';
import { device } from 'src/theme';
import styled from 'styled-components';

const RecordContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border: solid 24px ${({ theme }) => theme.colors.primary500};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RecordImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(100%);
`;

const RecordText = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RecordName = styled.h2`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.primary500};
  white-space: nowrap;
`;

const RecordDesc = styled.p`
  background-color: ${({ theme }) => theme.colors.primary600};
  margin: 0;
  font-size: 14px;
`;

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
    padding: 15px 20%;
  }
`;

interface RecordItemProps {
  name: string;
  desc: string;
  imageUrl: string;
}

const RecordItem: FC<RecordItemProps> = ({ name, desc, imageUrl }) => {
  return (
    <RecordContainer>
      <RecordImage imageUrl={imageUrl} />
      <RecordText>
        <RecordName>{name}</RecordName>
        <RecordDesc>{desc}</RecordDesc>
      </RecordText>
    </RecordContainer>
  );
};

const Record = () => {
  return (
    <Grid columns={3} marginY="3rem" gap="3rem">
      {/* Adjust layout as needed */}
      {listRecord.map((record, index) => (
        <RecordItem key={index} {...record} />
      ))}
    </Grid>
  );
};

export default Record;

import React from 'react';
import styled from 'styled-components';

interface DateTimeDisplayProps {
  dateString: string;
  inline?: boolean;
}

const Block = styled.div<{ inline: boolean }>`
  display: ${({ inline }) => (inline === true ? 'flex' : 'block')};
  gap: 10px;
`;

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ dateString, inline = true }) => {
  // Convert the dateString to a Date object
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${year}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;
  const formattedTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return (
    <Block inline={inline}>
      <p>{formattedDate}</p>
      <p>{formattedTime}</p>
    </Block>
  );
};

export default DateTimeDisplay;

import React from 'react';
import Row from 'src/layout/components/Row'; // Make sure this path is correct in your project
import { device } from 'src/theme';
import styled, { ThemeProvider } from 'styled-components';

const categories = [
  { id: 1, title: 'COLUMN', subtitle: 'オススメ' },
  { id: 2, title: 'DIET', subtitle: 'ダイエット' },
  { id: 3, title: 'BEAUTY', subtitle: '美容' },
  { id: 4, title: 'HEALTH', subtitle: '健康' }
];

const CategoryItem = styled.div`
  background-color: ${({ theme }) => theme.colors.dark800};
  color: ${({ theme }) => theme.colors.light};
  padding: 30px 10px;
  text-align: center;
  min-width: 120px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 22px;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary500};

  &::after {
    content: '';
    display: block; // Ensure the line breaks onto the next line
    width: 20%;
    margin: 0 auto;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.light};
    margin-top: 5px;
    margin-bottom: 10px;
  }

  .recommend {
    display: block;
  }

  .title-text {
    color: ${({ theme }) => theme.colors.primary500};
  }

  @media ${device.small} {
    font-size: 15px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin: 0;

  @media ${device.small} {
    font-size: 12px;
  }
`;

const CategoryList = () => {
  return (
    <Row columns={4} gap="1.2rem">
      {categories.map((category) => (
        <CategoryItem key={category.id}>
          <Title>
            <span className="recommend">RECOMMENDED</span>
            <span className="title-text">{category.title}</span>
          </Title>
          <Subtitle>{category.subtitle}</Subtitle>
        </CategoryItem>
      ))}
    </Row>
  );
};

export default CategoryList;

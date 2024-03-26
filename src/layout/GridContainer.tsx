import React from 'react';
import styled from 'styled-components';

const size = {
  small: '600px',
  medium: '900px',
  large: '1200px'
};

export const device = {
  small: `(max-width: ${size.small})`,
  medium: `(max-width: ${size.medium})`,
  large: `(max-width: ${size.large})`
};

interface GridProps {
  columns: number;
  paddingX?: string; // Horizontal padding
  paddingY?: string; // Vertical padding
  marginX?: string; // Horizontal margin
  marginY?: string; // Vertical margin
  padding?: string; // Padding shorthand
  margin?: string; // Margin shorthand
  gap?: string; // Grid gap
}

const GridContainer = styled.div<GridProps>`
  width: 100%;
  display: grid;
  grid-gap: ${(props) => props.gap || '1rem'};
  padding: ${(props) => props.padding || `${props.paddingY || '0'} ${props.paddingX || '0'}`};
  margin: ${(props) => props.margin || `${props.marginY || '0'} ${props.marginX || '0'}`};
  grid-template-columns: repeat(${(props) => props.columns}, 1fr); // Default column setting

  @media ${device.large} {
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  }

  @media ${device.medium} {
    grid-template-columns: repeat(${(props) => Math.max(Math.floor(props.columns / 2), 2)}, 1fr);
  }

  @media ${device.small} {
    grid-template-columns: repeat(${(props) => Math.max(Math.floor(props.columns / 3), 1)}, 1fr);
  }
`;

// Grid component
const Grid: React.FC<GridProps & { children: React.ReactNode }> = ({ children, ...props }) => {
  return <GridContainer {...props}>{children}</GridContainer>;
};

export default Grid;

import React, { FC } from 'react';
import { device } from 'src/theme';
import styled, { css } from 'styled-components';

type RowProps = {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  marginX?: string;
  marginY?: string;
  width?: string;
  centerX?: boolean;
  centerY?: boolean;
  gap?: string;
  end?: boolean;
  columns?: number;
  spaceBetween?: boolean;
  height?: string;
  children: React.ReactNode;
};

const StyledRow = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ centerX, end, spaceBetween }) =>
    centerX ? 'center' : end ? 'flex-end' : spaceBetween ? 'space-between' : 'flex-start'};
  align-items: ${({ centerY }) => (centerY ? 'center' : 'stretch')};
  margin-top: ${({ marginY, marginTop }) => marginTop || marginY || '0'};
  margin-bottom: ${({ marginY, marginBottom }) => marginBottom || marginY || '0'};
  margin-left: ${({ marginX, marginLeft }) => marginLeft || marginX || '0'};
  margin-right: ${({ marginX, marginRight }) => marginRight || marginX || '0'};
  padding-top: ${({ paddingTop }) => paddingTop || '0'};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '0'};
  padding-left: ${({ paddingLeft }) => paddingLeft || '0'};
  padding-right: ${({ paddingRight }) => paddingRight || '0'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  gap: ${({ gap }) => gap || 0};

  ${({ columns }) =>
    columns &&
    css`
      & > * {
        flex: 1;
        min-width: calc(100% / ${columns} - 10px);
        @media ${device.small} {
          min-width: 100%;
        }
      }
    `}

  @media ${device.small} {
    margin-top: ${({ marginY }) => marginY || '0'};
    margin-bottom: ${({ marginY }) => marginY || '0'};
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    row-gap: 2rem;
    justify-content: ${({ centerX }) => (centerX ? 'center' : 'flex-start')};
  }
`;

const Row: FC<RowProps> = ({ children, ...props }) => {
  return <StyledRow {...props}>{children}</StyledRow>;
};

export default Row;

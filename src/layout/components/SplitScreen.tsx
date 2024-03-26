import React, { FC, ReactNode } from 'react';
import { device } from 'src/theme';
import styled from 'styled-components';

type PanelProps = {
  flex: number;
};

type SplitScreenProps = {
  children: [ReactNode, ReactNode];
  leftWidth?: number;
  rightWidth?: number;
  margin?: string;
  centerX?: boolean;
  centerY?: boolean;
  height?: string;
};

type ContainerProps = {
  margin?: string;
  centerX?: boolean;
  centerY?: boolean;
  height?: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  margin: ${(props) => props.margin || '0'};
  justify-content: ${(props) => (props.centerX ? 'center' : 'flex-start')};
  align-items: ${(props) => (props.centerY ? 'center' : 'stretch')};
  height: ${(props) => props.height || 'auto'};

  @media ${device.small} {
    flex-direction: column;
    height: auto;
  }
`;

export const Panel = styled.div<PanelProps>`
  flex: ${(props) => props.flex};
  width: 100%;
  height: ${(props) => props.height || 'auto'};
  @media ${device.small} {
    flex: none;
  }
`;

export const SplitScreen: FC<SplitScreenProps> = ({ children, leftWidth = 1, rightWidth = 1, margin, centerX, centerY, height }) => {
  const [left, right] = React.Children.toArray(children);

  return (
    <Container margin={margin} centerX={centerX} centerY={centerY} height={height}>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};

export default SplitScreen;

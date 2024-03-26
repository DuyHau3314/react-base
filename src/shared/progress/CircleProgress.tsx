import React from 'react';
import styled from 'styled-components';

// Define a filter ID for the SVG filters
const filterId = {
  shadow: 'drop-shadow-filter',
  innerShadow: 'inner-shadow-filter'
};

const SvgWrapper = styled.svg`
  filter: url(#${filterId.shadow});
`;

const CircleProgress = styled.circle<{ progress: number }>`
  fill: none;
  stroke: ${({ theme }) => theme.colors.light};
  stroke-linecap: round;
  stroke-dasharray: 314;
  stroke-dashoffset: ${({ progress }) => (100 - progress) * (314 / 100)};
  transition:
    stroke-dashoffset 0.6s ease 0s,
    stroke 0.6s ease;

  filter: url(#${filterId.innerShadow});
`;

const Percentage = styled.text`
  fill: ${({ theme }) => theme.colors.light};
  font-size: 16px;
  text-anchor: middle;
  dominant-baseline: middle;
`;

const DateText = styled.text`
  fill: ${({ theme }) => theme.colors.light};
  font-size: 10px;
  text-anchor: middle;
  dominant-baseline: middle;
  dy: 1.2em;
`;

const CircleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface CircularProgressProps {
  percentage: number;
  date?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, date }) => {
  const radius = 50;
  const viewBoxSize = 140;

  return (
    <CircleContainer>
      <SvgWrapper width="100%" height="100%" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
        {/* Define the filters within the SVG */}
        <defs>
          <filter id={filterId.shadow} height="130%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="orange" />
          </filter>
          <filter id={filterId.innerShadow} x="-50%" y="-50%" width="200%" height="200%">
            <feComponentTransfer in="SourceGraphic">
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="3" />
            <feOffset dx="2" dy="2" />
            <feComposite operator="out" in="SourceGraphic" in2="shadowBlurOuter1" result="inverse" />
            <feFlood floodColor="orange" floodOpacity="0.5" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>

        <CircleProgress
          r={radius}
          cx="50%"
          cy="50%"
          progress={percentage}
          style={{
            transform: 'rotate(-90deg)',
            transformOrigin: 'center'
          }}
        />
        <g transform={`translate(${viewBoxSize / 2.8}, ${viewBoxSize / 2})`}>
          {date && <DateText>{`${date.split('-')[1]}/${date.split('-')[2]}`}</DateText>}
        </g>
        <g transform={`translate(${viewBoxSize / 1.7}, ${viewBoxSize / 2})`}>
          <Percentage>{percentage}%</Percentage>
        </g>
      </SvgWrapper>
    </CircleContainer>
  );
};

export default CircularProgress;

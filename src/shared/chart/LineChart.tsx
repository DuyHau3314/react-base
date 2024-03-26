/* eslint-disable @typescript-eslint/no-explicit-any */
import 'chart.js/auto';

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const data = {
  labels: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [86, 67, 91, 78, 77, 75, 70, 67, 65, 59, 55, 50],
      borderColor: 'rgb(255, 205, 86)',
      backgroundColor: 'rgba(255, 205, 86, 0.5)',
      pointBackgroundColor: 'rgb(255, 205, 86)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 205, 86)',
      yAxisID: 'y'
    },
    {
      label: 'Dataset 2',
      data: [65, 59, 80, 81, 56, 55, 40, 45, 30, 31, 45, 20],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
      yAxisID: 'y'
    }
  ]
};

const options: any = {
  scales: {
    y: {
      beginAtZero: true
    },
    x: {
      grid: {
        color: 'rgba(255,255,255,0.1)'
      }
    }
  },
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: 'white'
      }
    }
  },
  maintainAspectRatio: false,
  responsive: true,
  elements: {
    line: {
      tension: 0.4
    },
    point: {
      radius: 4
    }
  },
  interaction: {
    mode: 'index',
    intersect: false
  },
  layout: {
    padding: 20
  }
};

const ChartContainer = styled.div`
  background: ${({ theme }) => theme.colors.dark700};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Button = styled.button`
  background: #ffcc00;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #333;
  &:hover {
    opacity: 0.9;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

// const LineChart = () => {
//   return (
//     <div style={{ background: 'rgb(33, 37, 41)', height: '100%' }}>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

const LineChart = () => {
  return (
    <ChartContainer>
      <ButtonContainer>
        {/* Add as many buttons as you need */}
        {/* <Button>Button Above</Button> */}
      </ButtonContainer>
      <div style={{ height: '100%', width: '100%' }}>
        <Line data={data} options={options} />
      </div>
      <ButtonContainer>
        {/* Add as many buttons as you need */}
        {/* <Button>Button Below 1</Button>
        <Button>Button Below 2</Button>
        <Button>Button Below 3</Button> */}
      </ButtonContainer>
    </ChartContainer>
  );
};

// const LineChart = () => {
//   const [chartData, setChartData] = useState(data);

//   // Toggle visibility of dataset 1
//   const toggleDataset1 = () => {
//     const newChartData = {
//       ...chartData,
//       datasets: chartData.datasets.map((dataset, index) => (index === 0 ? { ...dataset, hidden: !dataset.hidden } : dataset))
//     };
//     setChartData(newChartData);
//   };

//   // Toggle visibility of dataset 2
//   const toggleDataset2 = () => {
//     const newChartData = {
//       ...chartData,
//       datasets: chartData.datasets.map((dataset, index) => (index === 1 ? { ...dataset, hidden: !dataset.hidden } : dataset))
//     };
//     setChartData(newChartData);
//   };

//   // Change label (e.g., for changing the time frame)
//   const changeLabel = (newLabel) => {
//     const newChartData = {
//       ...chartData,
//       labels: chartData.labels.map(
//         (label, index) => (index === 5 ? newLabel : label) // This example just changes one label for demonstration
//       )
//     };
//     setChartData(newChartData);
//   };

//   return (
//     <ChartContainer>
//       <ButtonContainer>
//         <Button onClick={toggleDataset1}>Toggle Dataset 1</Button>
//         <Button onClick={toggleDataset2}>Toggle Dataset 2</Button>
//       </ButtonContainer>
//       <div style={{ height: '100%', width: '100%' }}>
//         <Line data={chartData} options={options} />
//       </div>
//       <ButtonContainer>
//         {/* This could be dynamically generated based on your data */}
//         <Button onClick={() => changeLabel('New Label 1')}>Label 1</Button>
//         <Button onClick={() => changeLabel('New Label 2')}>Label 2</Button>
//         <Button onClick={() => changeLabel('New Label 3')}>Label 3</Button>
//       </ButtonContainer>
//     </ChartContainer>
//   );
// };

export default LineChart;

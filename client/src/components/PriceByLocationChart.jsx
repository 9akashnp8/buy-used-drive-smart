import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box, Heading, Text } from "@chakra-ui/react";
import ChartWrapper from './ChartWrapper';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },
};

function PriceByLocationChart({data}) {
    
  if (!data) {
    return (
      <div>Loading...</div>
    )
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Average Price by Location",
        data: data.data,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  }
  
  return (
      <ChartWrapper>
        <Heading>Price by Location</Heading>
        <Text mb={5}>See how the price of the user item varies across different locations.</Text>
        <Bar
            data={chartData}
            options={options}
        />
      </ChartWrapper>
  )
}

export default PriceByLocationChart;
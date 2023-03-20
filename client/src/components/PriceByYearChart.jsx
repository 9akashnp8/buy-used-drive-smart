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
import { 
  Heading,
  Text
} from '@chakra-ui/react';
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
    responsive: true
};

function PriceByYearChart({data}) {
    
  if (!data) {
    return null
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Average Price by Year",
        data: data.data,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  }
  
  return (
      <ChartWrapper>
        <Heading>Price by Model Year</Heading>
        <Text mb={5}>See how the price of the used commodity varies across model year.</Text>
        <Bar
            data={chartData}
            options={options}
        />
      </ChartWrapper>
  )
}

export default PriceByYearChart;
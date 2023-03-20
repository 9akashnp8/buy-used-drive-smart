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

function Top5LocationsChart({data}) {
    
  if (!data) {
    return null
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Top 5 Cities with Ads",
        data: data.data,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  }
  
  return (
      <ChartWrapper>
        <Heading>Top 5 Locations with the most Ads</Heading>
        <Text mb={5}>View the locations with the most ads.</Text>
        <Bar
            data={chartData}
            options={options}
        />
      </ChartWrapper>
  )
}

export default Top5LocationsChart;
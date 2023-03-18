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
import { Box } from "@chakra-ui/react";

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
        position: 'top',
      },
    //   title: {
    //     display: true,
    //     text: 'Average Price by Location',
    //   },
    },
};

function PriceByYearChart({data}) {
    
  if (!data) {
    return (
      <div>Loading...</div>
    )
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
      <Box
          w={'85%'}
          mx={'auto'}
          my={5}
      >
          <Bar
              data={chartData}
              options={options}
          />
      </Box>
  )
}

export default PriceByYearChart;
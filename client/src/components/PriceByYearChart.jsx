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

const labels = ['Kochi', 'Alapuzha', 'Kottayam', 'Thrissur'];

export const data = {
    labels,
    datasets: [
      {
        label: 'Average Price by Location',
        data: [10, 2, 13, 4],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
};

function PriceByYearChart() {
    
    return (
        <Box
            w={'85%'}
            mx={'auto'}
            my={5}
        >
            <Bar
                data={data}
                options={options}
            />
        </Box>
    )
}

export default PriceByYearChart;
//import React from 'react';
import { Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../Style/dashboardcard.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const ChartContainer = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [300, 400, 350, 500, 450, 600],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Occupations',
        data: [300, 500, 900, 400, 600, 700],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      }
    ],
  };


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales and Occupations',
      },
      
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-wrapper barchart">
        <Bar data={barData} options={options} />
      </div>
    </div>
  );
};

export default ChartContainer;

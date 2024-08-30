//import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

function PieChart() {
  const pieData = {
    labels: ['Sales', 'Total View', 'Conversions', 'Follow-up'], 
    datasets: [
      {
        data: [300, 800, 300, 280],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
      },
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
    <div>
      <Pie data={pieData} options={options} />
    </div>
  );
}

export default PieChart;

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart(props) {


ChartJS.register(ArcElement, Tooltip, Legend);

 const data = {
  labels: ['iPhone 13 Pro Max 128GB', 'CPU Intel Core i5-10400F + Quạt', 'Samsung Galaxy S22 Bora Purple', 'Tai nghe AirPods 3 Hộp sạc dây', 'Samsung Galaxy Watch5 Pro 45mm', 'Chuột Gaming Zadez G156M'],
  datasets: props.datasets
};


const options = {
    responsive: true,
    plugins: {
      legend: {
        
        position: 'bottom',
        align:'start'
      },
      title: {
        display: true,
        font: {
            size: 20
          },
        text: props.title,
      },
      
    },
  };

  return <Doughnut options={options} data={data} />;
}

export default DoughnutChart
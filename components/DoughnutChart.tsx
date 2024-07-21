"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "banks",
        data: [1250, 1239, 1388],
        backgroundColor: ["#0747b6", "#2268d8", "#2f91fa"],
      },
    ],
    labels: [
        'BDO',
        'UnionBank',
        'BPI'
    ],

  };

  return <Doughnut data={data} options={
    {
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        }
    }
}/>;
};

export default DoughnutChart;

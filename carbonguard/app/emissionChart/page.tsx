'use client';
import { useEffect } from 'react';
import { Chart } from 'chart.js';
import React from 'react';
import { useRouter } from 'next/navigation'; 
import useGetChart from '../hooks/useGetChart';
import useGetEmissionChart from '../hooks/useGetEmissionChart';
import Layout from '../component/Layout';

function CarbonEmitted() {
  const router = useRouter();
  const { chartLimit: chartData } = useGetChart();
    const { chart: emissionDataChart } = useGetEmissionChart();

   useEffect(() => {
    
    if (chartData && emissionDataChart) {
      const emissionChart = document.getElementById('myChart') as HTMLCanvasElement | null;
      
      if (emissionChart) {
        const chartLine = emissionChart.getContext('2d');

        if (chartLine) {
          const myChart = new Chart(chartLine, {
            type: 'line',
            data: {
              labels: [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December',
              ],
              datasets: [
                {
                  data: chartData.map(item => item.emission_limit),
                  label: 'Emission Cap',
                  borderColor: '#ff0000',
                  backgroundColor: '#ff0000',
                  fill: false,
                  lineTension: 0,
                },
                {
                  data: chartData.map(item => item.duration),
                  label: 'Carbon Emitted',
                  borderColor: '#3cba9f',
                  backgroundColor: '#71d1bd',
                  fill: false,
                  lineTension: 0,
                },
              ],
            },
          });
        }
      }
    }
  }, [chartData, emissionDataChart]);

  return (
    <Layout>
      <div className="mr-32">
      <h1 className="text-center mx-auto mt-24 text-3xl font-semibold">
        Greenhouse gas emitted and carbon limit against time
      </h1>
      <div className="w-[1200px] h-[600px] flex mx-auto my-auto ml-10">
        <div className="border pt-0 w-full h-fit my-auto shadow-xl" style={{ marginLeft: '100px', marginTop: '40px' }}>
          <canvas id="myChart" className="w-full h-full"></canvas>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default CarbonEmitted;

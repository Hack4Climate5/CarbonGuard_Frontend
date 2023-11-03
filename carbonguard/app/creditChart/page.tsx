'use client'
import { useEffect } from 'react';
import { Chart } from 'chart.js';
import React from 'react';
import { useRouter } from 'next/navigation';
import useGetCarbonCreditsChart from '../hooks/useGetCredits';
import useGetChart from '../hooks/useGetChart';
import Layout from '../component/Layout';

function CarbonCredits() {
  const router = useRouter();
  const { creditchart: creditChart } = useGetCarbonCreditsChart();
  const { chartLimit: limitChart } = useGetChart();
  
  useEffect(() => {
    
    if (creditChart && limitChart) {
      const numericCreditEarned = creditChart.map(item => parseFloat(item.credit_earned));
      const creditchart = document.getElementById('myChart2') as HTMLCanvasElement | null;

      if (creditchart) {
        const chartLine = creditchart.getContext('2d');

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
                  data: limitChart.map(item => item.emission_limit),
                  label: 'Carbon Avoided',
                  borderColor: '#1BEF0B',
                  backgroundColor: '#1BEF0B',
                  fill: false,
                  lineTension: 0,
                },
                {
                  data: numericCreditEarned,
                  label: 'Carbon Credits Earned',
                  borderColor: '#8A23E3',
                  backgroundColor: '#8A23E3',
                  fill: false,
                  lineTension: 0,
                },
              ],
            },
          });
        }
      }
    }
  }, [creditChart, limitChart]);

  return (
   <Layout>
     <>
      <h1 className="text-center mx-auto mt-24 text-3xl font-semibold">
        Greenhouse gas avoided and carbon credits earned
      </h1>
      <div className="w-[1200px] h-[600px] flex mx-auto my-auto ml-10">
        <div className="border pt-0 w-full h-fit my-auto shadow-xl" style={{ marginLeft: '100px', marginTop: '40px' }}>
          <canvas id="myChart2" className="w-full h-full"></canvas>
        </div>
      </div>
    </>
  
   </Layout>
  );
}

export default CarbonCredits;

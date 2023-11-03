'use client'
import React from "react"
import UsegetVehicles from "../hooks/useGetVehicles";
import useGetCarbonCreditsChart from "../hooks/useGetCredits";
import useGetChart from "../hooks/useGetChart";
import Layout from "../component/Layout";
import { BsFillCloudsFill } from 'react-icons/bs';
import { GiTwoCoins } from 'react-icons/gi';
import { PiWarningOctagonBold } from "react-icons/pi";
import { VscGraph } from 'react-icons/vsc';


import Link from "next/link";
function VehicleCard() {
    const vehicles = UsegetVehicles();
    const totalVehicles = vehicles.length;
    // Calculate total emissions
    const totalEmissions = vehicles.reduce((total, vehicle) => {
        return total + parseFloat(vehicle.emission_value);
      }, 0).toFixed(2);
    const { creditchart } = useGetCarbonCreditsChart();
    const creditEarned = creditchart.length > 0 ? creditchart[0].credit_earned : "N/A";
    const { chartLimit } = useGetChart();
    const emissionLimit = chartLimit.length > 0 ? chartLimit[0].emission_limit : "N/A";
    return (
        <Layout>
        <div className="overview">
        <div className="blocks flex ml-60 mt-24 space-x-16 text-white text-center">
        <div className="block-1 bg-teal-500 py-10 px-12 rounded-xl shadow mb-4 transition-transform transform hover:scale-105 hover:bg-teal-700 delay-150 duration-200 ease-in-out ">
          <h2 className="text-xl whitespace-nowrap font-normal mb-2">Total Vehicles</h2>
          <p className="text-3xl font-bold">{totalVehicles}</p>
       </div>
       <div className="block-1 bg-teal-500 py-10 px-8 rounded-xl shadow mb-4 transition-transform transform hover:scale-105 hover:bg-teal-700 delay-150 duration-200 ease-in-out ">
            <h2 className="text-xl whitespace-nowrap font-normal mb-2">Total Emissions</h2>
            <p className="text-3xl font-bold">{totalEmissions}</p>
            <p id="unit">MtCO2e</p>
          </div>
          <div className="block-1 bg-teal-500 py-10 px-12 rounded-xl shadow mb-4 transition-transform transform hover:scale-105 hover:bg-teal-700 delay-150 duration-200 ease-in-out ">
            <h2 className="text-xl  whitespace-nowrap font-normal mb-2">Credit Earned</h2>
            <p className="text-3xl font-bold">{creditEarned}</p>
            <p id="unit">KSH.</p>
          </div>
          <div className="block-1 bg-teal-500 py-10 px-12 rounded-xl shadow mb-4 transition-transform transform hover:scale-105 hover:bg-teal-700 delay-150 duration-200 ease-in-out ">
            <h2 className="text-xl whitespace-nowrap font-normal mb-2">Carbon Limit</h2>
            <p className="text-3xl text-center font-bold">{emissionLimit}</p>
            <p id="unit">MtCO2e</p>
          </div>
        </div>
{/* description */}
<div className="description flex space-x-10 ml-[170px] mt-20 ">
<h1 className="text-2xl font-bold ml-[13.5cm] my-5 absolute">Overview</h1>
      <div className="desc bg-[#FFCFCF] p-10 rounded-lg shadow-xl w-[24%] h-[9cm] mx-60 mt-16 ">
     <p className="text-teal-700 bg-[#FFE9E9] rounded-[100px] h-10 w-10 pl-2 pt-2 text-2xl mb-5 -mt-3"><PiWarningOctagonBold  /></p>
     <h1 className="font-bold  whitespace-nowrap text-lg w-5 mb-5">Carbon Cap</h1>
        <p className="text-lg font-normal mb-4 text-gray-700">These is the cap limit issued to the company on the amount of carbon they can emit.</p>
      <Link href="/emissionChart">
    <h2 className="mt-16  text-teal-300 font-bold flex gap-3 " ><VscGraph size={25} /> <span> Learn More</span> </h2>
    </Link>
     </div>
     <div className="desc bg-[#D7BEED] p-10 rounded-lg shadow-xl w-[24%] h-[9cm] mx-60 mt-16 ">
     <p className="text-teal-700 bg-[#FFE9E9] rounded-[100px] h-10 w-10 pl-2 pt-2 text-2xl mb-5 "><GiTwoCoins /></p>
     <h1 className="font-bold whitespace-nowrap text-lg w-5 mb-5">Carbon Credits</h1>
        <p className="text-xl text-gray-700 font-normal mb-4 ">These are the amount of credits accumulated by the efforts to improve carbon footprint.</p>
     <Link href="/creditChart">
     <h2 className="mt-10  text-teal-300 font-bold flex gap-3" ><VscGraph size={25} /> <span> Learn More</span> </h2>
     </Link>
     </div>
     <div className="desc bg-[#C6FFC2] p-10 rounded-lg shadow-xl w-[24%] h-[9cm] mx-60 mt-16 ">
    <p className="text-teal-700 bg-[#FFE9E9] rounded-[100px] h-10 w-10 pl-2 pt-2 text-2xl mb-5 "><BsFillCloudsFill /></p>
     <h1 className="font-bold whitespace-nowrap text-lg w-5 mb-5">GHG Emissions</h1>
        <p className="text-lg font-normal mb-4 text-gray-700">These are the amount of Green House Gases (GHG) emitted by the company vehicles in a period of time</p>
     <Link href="/vehicles">
     <h2 className="mt-10  text-teal-300 font-bold flex gap-3" ><VscGraph size={25} /> <span> Learn More</span> </h2></Link>
     </div>
</div>
        </div>
        </Layout>
      );
    }
  export default VehicleCard;
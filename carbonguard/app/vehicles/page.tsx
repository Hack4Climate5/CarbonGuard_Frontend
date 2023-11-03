'use client';
import React, { useState } from "react";
import { ImSearch } from 'react-icons/im';
import UsegetVehicles from "../hooks/useGetVehicles";
import Layout from "../component/Layout";

const Vehicles = () => {
  const vehicles = UsegetVehicles();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // search event
  const filteredVehicles = Object.values(vehicles).filter((vehicle) =>
    vehicle && vehicle.vehicle_model
      ? vehicle.vehicle_model.toLowerCase().includes(searchQuery.toLowerCase())
      : false
  );
  // search event
  const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value)
  };
  const totalPages = Math.ceil((vehicles?.length || 0) / itemsPerPage);
  // search

  return (
    <Layout>
      <div className="w-full ">
        {/* search */}
        <div className="relative mt-20 ml-40">
          <input type="text" placeholder="Search..."
            className="py-4 pl-10 pr-80 border rounded-lg border-black font-light focus:outline-none"
            value={searchQuery} onChange={handleSearch} />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ImSearch className="text-darkGreen text-2xl" />
          </div>
        </div>
        {/* search */}
        <div className="p-4 max-w-xxl mx-auto bg-white border-customGreen mt-20">
          <div className="w-full">
            <div className="flex items-left mb-10 pl-48 -ml-[185px]">
              <h1 className="font-black text-customGreen text-left text-2xl ml-36">All Cars</h1>
            </div>
            <div className="">
              <ul className="flex items-center mt-4 ml-36">
                <li className="text-xl font-semibold text-black mr-48 ">Year</li>
                <li className="text-xl font-semibold text-black mr-44 ">Model</li>
                <li className="text-xl font-semibold text-black mr-40">Chassis Number</li>
                <li className="text-xl font-semibold text-black mr-32 ">GHG Emissions</li>
                <li className="text-xl font-semibold text-black">Engine type</li>
              </ul>
            </div>
          </div>
          <div className=" inset-x-0 bottom-0 h-px w-5/6 bg-darkGreen my-4 ml-20" style={{ boxShadow: "0px 1px 4px rgba(3, 88, 82, 0.5)" }}></div>

          {/* vehicles lists */}
          <div >
            {filteredVehicles.length > 0 ? (
              filteredVehicles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item) => (

                <div key={item.id}>
                  <div className="py-4 px-3 -ml-28">
                    <ul key={item.id} className="flex items-center space-x-[174px] mx-[248px] mt-4">
                      <li className="text-l font-normal text-black w-[65px]">{item.year}</li>
                      <li className="text-l font-normal text-black w-[80px]">{item.vehicle_model}</li>
                      <li className="text-l font-normal text-black w-[170px]">{item.chassis_number}</li>
                      <li className="text-l font-normal text-black w-[100px]">{item.emission_value}</li>
                      <li className="text-l font-normal text-black ">{item.engine_type}</li>
                    </ul>
                  </div>
                  <div className=" inset-x-0 bottom-0 h-px w-5/6 bg-darkGreen my-4 ml-20" style={{ boxShadow: "0px 1px 4px rgba(3, 88, 82, 0.5)" }}></div>
                </div>))) : (
              <p>Loading...</p>
            )}
          </div>
          {/* vehicles lists */}
          {/* pagination */}
          <div className="flex justify-center mt-4">
            <p className="absolute mr-[83em] mt-5 ml-20">Page {currentPage} of {totalPages}</p>
            <button
              onClick={() => setCurrentPage((prev) => prev > 1 ? prev - 1 : prev)} disabled={currentPage === 1}
              className="text-gray text-md px-10 py-2  bg-gray-300 rounded-xl -ml-44 mt-3"> Previous</button>

            <button
              onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage * itemsPerPage >= (vehicles?.length || 0)}
              className="text-white text-md px-10 py-2  bg-darkGreen rounded-xl ml-14 mt-3"> Next</button>
          </div>
          {/* pagination */}
        </div>
      </div>
    </Layout>
  )
}

export default Vehicles;
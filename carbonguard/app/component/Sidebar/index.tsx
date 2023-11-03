"use client"
import Image from "next/image";
import "tailwindcss/tailwind.css";
import React, { useState, useEffect } from 'react';
import { FaCreditCard, FaHome, FaUser, FaBars, FaTimes, FaBus, FaCloud } from 'react-icons/fa';
import { BiSolidDashboard } from 'react-icons/bi';
import Link from "next/link";
const Sidebar: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("/homePage"); // Initialize activeLink with the default value
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  const closeSidebar = () => {
    if (isMobile && !isSidebarCollapsed) {
      setIsSidebarCollapsed(true);
    }
  };
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  // Function to set the active link when a link is clicked
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`flex h-screen ${isMobile ? 'md:h-auto' : ''}`} style={{ backgroundColor: '#098081' }}>
      {isMobile && (
        <button
          className="md:hidden absolute top-4 left-0 bg-teal-500 text-white rounded-full p-2"
          onClick={toggleSidebar}
        >
          {isSidebarCollapsed ? (
            <FaBars className="h-6 w-6 text-green-900 ml-3 transition-all duration-300" />
          ) : (
            <FaTimes className="h-6 w-6 text- transition-all duration-300" />
          )}
        </button>
      )}
      <div
        className={`w-1/9 bg-teal-700 text- flex flex-col md:flex-col ${
          isMobile && isSidebarCollapsed ? 'md:flex-col md:w-20' : ''
        }`}
      >
        <div className="p-4  flex items-center bg-white">
          <div className="relative ">
            <Image
            width={200}
            height={100}
              src='/assets/Group 2364.png'
              alt="Logo"
              className={`logo object-contain h-20 ${
                isSidebarCollapsed ? 'md:w-20 md:h-20 ' : ''
              }`}
            />
          </div>
        </div>
        <ul className={`p-2 mt-14 ${isSidebarCollapsed ? 'hidden' : ''}`}>
        <Link href="/overview">
        <li
            onClick={() => handleLinkClick("/overview")}
            className={`flex mt-6 py-4 text-white ml-10 cursor-pointer items-center ${activeLink === "/overview" ? 'bg-white text-teal-500 rounded-lg px-3' : 'hover:bg-white hover:text-teal-500 hover:rounded-lg hover:px-3 transition-all duration-300'}`}
          >
            <BiSolidDashboard className={`text-white text-xl mr-2 ${isSidebarCollapsed ? 'md:w-20 md:h-20' : ''}`} />
            <span className="list capitalize text-xl ml-1">Overview</span>
          </li>
        </Link>
        <Link href="/emissionChart">
        <li
            onClick={() => handleLinkClick("/emissionChart")}
            className={`flex mt-6 py-4 text-white ml-10 cursor-pointer items-center ${activeLink === "/emissionChart" ? 'bg-white text-teal-500 rounded-lg px-3' : 'hover:bg-white hover:text-teal-500 hover:rounded-lg hover:px-3 transition-all duration-300'}`}
          >
            <FaCreditCard className={`text-white mr-2 ${isSidebarCollapsed ? 'md:w-20 md:h-20' : ''}`} />
            <span className="list capitalize text-xl ml-2">Emission</span>
          </li>
        </Link>
        <Link href="/creditChart">
          <li className="flex mt-6 py-4 text-white  ml-10 hover:bg-white hover:text-teal-500 hover:rounded-lg hover:px-9 transition-all duration-300 cursor-pointer items-center">
            <FaCloud className={`text-white mr-2 ${isSidebarCollapsed ? 'md:w-20 md:h-20' : ''}`} />
            <span className="list capitalize text-xl ml-2">Credits</span>
          </li>
          </Link>
          <Link href="/vehicles">
          <li
            onClick={() => handleLinkClick("/vehicles")}
            className={`flex mt-6 py-4 text-white ml-10 cursor-pointer items-center ${activeLink === "/vehicles" ? 'bg-white text-teal-500 rounded-lg px-3' : 'hover:bg-white hover:text-teal-500 hover:rounded-lg hover:px-3 transition-all duration-300'}`}
          >
            <FaBus className={`text-white mr-2 ${isSidebarCollapsed ? 'md:w-20 md:h-20' : ''}`} />
            <span className="list capitalize text-xl ml-2">Vehicles</span>
          </li>
          </Link>
        </ul>
        <div className="flex-grow"></div>
        <div className="p-4"></div>
        <footer className="ml-12 mb-6 text-sm text-white">@2023 Ecobasi, <br /> All rights reserved</footer>
      </div>
      <div className={`flex-grow bg-white ${isMobile && isSidebarCollapsed ? 'md:w-60' : ''}`} onClick={closeSidebar}></div>
    </div>
  );
};
export default Sidebar;
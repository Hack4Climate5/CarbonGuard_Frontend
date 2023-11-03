"use client"
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import Cookies from 'js-cookie';
import Router, { useRouter } from "next/navigation";


export const LandingPage = () => {
  const [activePage, setActivePage] = useState(0);
  const router = useRouter();
  const isUserRegistered = !!Cookies.get('auth_token');
  if (isUserRegistered) {
    router.push('/dashboard');
    return null;
  }
  const textContent = [
    {
      title: "Drive Green, ",
      subtitle: "Earn Green",
      description: "Discover how CarbonGuard is transforming vehicle emissions to turn them into eco-friendly treasures. Our technology converts vehicle emissions into carbon credits, as we pave the way to a greener world, one mile at a time.",
    },
    {
      title: "Measure Green, ",
      subtitle: "Act Green",
      description: "Discover how CarbonGuard allows you to effortlessly measure and monitor carbon emissions, empowering you to make eco-conscious decisions. Gain valuable insights into your carbon footprint and take control of your environmental impact. With CarbonGuard, sustainability becomes a seamless part of your journey.",
    },
    {
      title: "Redefine Green, ",
      subtitle: "Live Green",
      description: "Join us in the quest for a greener future. CarbonGuard's innovative platform not only tracks emissions but also calculates your carbon credits. Be a part of the solution to climate change as we transform your emissions into eco-friendly treasures. Our mission is clear: to create a sustainable planet, one mile at a time. Together, we can drive change and make a lasting impact on the environment.",
    },
  ];
  const handleCarouselChange = (index: any) => {
    setActivePage(index);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const autoScroll = () => {
      const nextPage = (activePage + 1) % textContent.length;
      setActivePage(nextPage);
    };
    const intervalId = setInterval(autoScroll, 5000);
    return () => clearInterval(intervalId);
  }, [activePage, textContent.length]);
  return (
    <div>
      <div className="w-[32.27cm] absolute h-[3.9cm] bg-[#098081] mt-[20.98cm]"></div>
      <div className="w-[16.2cm] absolute h-[3.9cm] bg-[#7CAE41] mt-[20.98cm] ml-[32.2cm]"></div>
      <nav className="bg-white flex">
        <div className="ml-24 mr-64">
          <Image
            className="logo mt-4 mr-72 w-48 h-auto"
            src="/assets/Group 2364.png"
            alt="logo"
            width={400}
            height={100}
          />
        </div>
        <div className="mt-9 ml-96 flex gap-16">
          <Link href="/login">
            <h1 className="text-2xl text-teal-700 cursor-pointer hover:text-[#7CAE41]">
              Login
            </h1>
          </Link>
          <Link href="/signup">
            <h1 className="text-2xl ml-16 text-teal-700 cursor-pointer hover:text-[#7CAE41]">
              Register
            </h1>
          </Link>
        </div>
      </nav>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={true}
        selectedItem={activePage}
        onChange={handleCarouselChange}
        autoPlay={true}
        interval={5000}
      >
      
        {textContent.map((page, index) => (
          <div key={index}>
            <Image
            className="back -mt-[9.1cm] mr-72 "
              src="/assets/Back.png"
              alt={`Carousel Image ${index + 1}`}
              width={400}
              height={300}
            />
          </div>
        ))}
      </Carousel>
      <div className="flex">
        <div className="absolute -mt-80">
          <h1 className="-mt-80 ml-32 text-6xl text-white mb-8 font-semibold ">
            {textContent[activePage].title}
            <span className="text-[#7CAE41]">
              {textContent[activePage].subtitle}
            </span>
          </h1>
          <p className="ml-32 text-2xl text-white  max-w-3xl">
            {textContent[activePage].description}
          </p>
          <Link href="https://chikara-website.netlify.app/.">
            <button className="rounded-lg border-2 border-[#7CAE41] text-[#fff] bg-[transparent] ml-32 hover:text-white mt-8 text-2xl hover:bg-[#7CAE41] pl-8 pt-4 pr-8 pb-4">
              Find out more
            </button>
          </Link>
        </div>
        <br />
        <div className="ml-96 -mt-80">
          <Image
            className="dash absolute -mt-80 ml-[17cm] w-[70vh] h-auto"
            src="/assets/Dashboard.png"
            alt="Dashboard"
            width={400}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
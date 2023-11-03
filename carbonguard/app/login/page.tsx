// "use client";
// import React, { useState } from "react";
// import { useLoginUser } from "../hooks/useLoginUser";
// import { ToastContainer } from "react-toastify";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// const LoginPage: React.FC = () => {
//   const router = useRouter();
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });
//   const [response, setResponse] = useState<string | null>(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setCredentials({
//       ...credentials,
//       [name]: value,
//     });
//   };
//   const handleSubmit = async () => {
//     try {
//       // eslint-disable-next-line react-hooks/rules-of-hooks
//       const responseData = await useLoginUser(credentials);
//       setResponse("Logging in...");
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       if (responseData.success) {
//         setResponse("You have logged in successfully");
//       } else {
//         setResponse(
//           responseData.message || "Please input correct login details"
//         );
//         setTimeout(() => {
//           setResponse(null);
//         }, 3000);
//       }
//     } catch (error: any) {
//       setResponse(error.message);
//     }
//     router.push("/emissionChart");
//   };
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
"use client";
import React, { useState } from "react";
import { useLoginUser } from "../hooks/useLoginUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    setResponse("Logging in...");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const responseData = await useLoginUser(credentials);
    if (responseData.success) {
      setResponse("You have logged in successfully");
      toast.success("You have logged in successfully");
      setTimeout(() => {
        router.push("/creditChart");
      }, 2000);
    } else {
      setResponse(responseData.message || "Please input correct login details");
      toast.error(responseData.message || "Please input correct login details");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="absolute -mt-16 w-[43cm] h-[2.07cm] bg-[#fff]"></div>
      <div className="absolute ml-[165vh] -mt-24 w-[7.17cm] h-[101.6vh] bg-[#098081]"></div>
      <div
        className="mt-20 ml-[8cm] w-[136vh] h-[83.6vh] bg-[#EBFCFC]"
        style={{ boxShadow: "-5px 5px 48px rgba(0, 0, 0, 0.25)" }}
      >
        <Image
          className="absolute -mt-[6rem] ml-[16.5cm]"
          src="/images/image.png"
          width={717}
          height={200}
          alt="image"
        />
      
        <div className="pt-24 -ml-16">
          <h1
            className={` ml-32 mr-0 mb-7 text-5xl font-poppins text-[#098081] font-extrabold`}
          >
            Welcome Back
          </h1>
          <p className="ml-32 text-gray-500 text-xl font-poppins">
            Enter your email and password to login
          </p>

          {response && (
            <div className="mt-5 ml-[3.4cm] text-xl text-teal-700 font-Poppins text-lg">
              {response}
            </div>
          )}

          <div className="mt-[2rem] mb-[2rem] ml-32">
            <label
              htmlFor="email"
              className="block text-xl text-gray-700 font-medium font-Poppins"
            >
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              className="mt-4 h-12 pl-8 w-[26rem] rounded-[15px] border-2 border-blue-200 bg-white"
            />
          </div>
          <div className="mt-[2rem] mb-[2rem] ml-32">
            <label
              htmlFor="password"
              className="block text-xl text-gray-700 font-medium font-Poppins"
            >
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                className="mt-4 h-12 pl-8 w-[26rem] rounded-[15px] border-2 border-blue-200 bg-white"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute -ml-16 mt-6 text-3xl text-[#0C8283]"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="ml-[3.5cm] bg-[#0C8283] text-white rounded-lg w-[150px] h-[45px] hover:bg-opacity-60 focus:outline-none focus:bg-opacity-80 text-lg font-Poppins font-normal ml-4"
          >
            Login
          </button>

         
          <p
            className={`mt-8 text-gray-400 font-Poppins text-xl ml-[3.5cm] label`}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account?{" "}
            <a href="/signup" className={`text-teal-300  font-bold label`}>
              Register
            </a>
          </p>
        </div>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};
export default LoginPage;

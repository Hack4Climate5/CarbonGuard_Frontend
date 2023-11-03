"use client"
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useCreateUser } from '../hooks/useCreateUser';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const SignUp: React.FC = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone_number: '',
    password: '',
    confirmPassword: '',
  });
  const [response, setResponse] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    const isAnyFieldEmpty = Object.values(user).some((value) => value === '');
    if (isAnyFieldEmpty) {
      setResponse('Please fill out all fields.');
      return;
    }
    try {
      setResponse('Registration successful...');
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const result = await useCreateUser(user);
      setResponse('Signup successful');
    } catch (error: any) {
      console.error('Error:', error);
      setResponse('Error occurred. Please check the console for details.');
    }
    router.push("/emissionChart")
  };
  const togglePasswordVisibility = (field: string) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };
  const isAnyFieldEmpty = Object.values(user).some((value) => value === '');

  return (
    <div>
      <div className="top absolute -mt-16 w-[40cm] h-[2.1cm] bg-[#fff]"></div>
      <div className="side absolute ml-[174vh] -mt-24 w-[4.93cm] h-[105.68vh] bg-[#098081]"></div>
      
      <div
        className="box mt-10 ml-48 w-[140vh] h-[85.9vh] bg-[#EBFCFC]"
        style={{ boxShadow: "-5px 5px 48px rgba(0, 0, 0, 0.25)" }}
      >
        <Image
          className="image-up absolute -mt-[6.1rem] ml-[20cm]"
          src="/images/image.png"
          width={748}
          height={200}
          alt="image"
        />
      
        
        <h1 className="title pt-[5rem] ml-32 pt-4 text-5xl font-poppins font-extrabold text-[#098081]">
          Welcome to Ecobasi
        </h1>

        <div className="titlee mt-4 mb-[1rem] ml-32">
          {isAnyFieldEmpty && (
            <p className=" text-gray-500 text-xl font-poppins mb-4">
              Please fill out all the fields before proceeding.
            </p>
          )}

          <label
            htmlFor="username"
            className="field block text-xl text-gray-700 font-normal font-Poppins"
          >
            Company name:
          </label>
          <input
            type="text"
            placeholder="Enter company name"
            id="username"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            className="input h-12 pl-8 w-[26rem] rounded-[15px] border-2 border-blue-200 bg-white"
          />
        </div>

        <div className="space mb-[1rem] ml-32">
          <label
            htmlFor="email"
            className="field block text-xl text-gray-700 font-normal font-Poppins"
          >
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="input h-12 pl-8 w-[26rem] rounded-[15px] border-2 border-blue-200 bg-white"
          />
        </div>
        <div className="space mb-[1rem] ml-32">
          <label
            htmlFor="phone_number"
            className="field block text-xl text-gray-700 font-normal font-Poppins"
          >
            Phone Number:
          </label>
          <input
            type="text"
            placeholder="+254 (XXX) XXX XXX"
            id="phone_number"
            name="phone_number"
            value={user.phone_number}
            onChange={handleInputChange}
            className="input h-12 pl-8 w-[26rem] rounded-[15px] border-2 border-blue-200 bg-white"
          />
        </div>
        <div className="space mb-[1rem] ml-32">
          <label
            htmlFor="password"
            className="field block text-xl text-gray-700 font-normal font-Poppins"
          >
            Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              className="input h-12 pl-8 w-[26rem] rounded-[15px] border-2 border-blue-200 bg-white"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("password")}
              className="btn absolute -ml-16 mt-2 text-2xl text-[#0C8283]"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        <div className="space mb-2 ml-32">
          <label
            htmlFor="confirmPassword"
            className="field block text-xl text-gray-700 font-normal font-Poppins"
          >
            Confirm Password:
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Repeat password"
              value={user.confirmPassword}
              onChange={handleInputChange}
              className="input h-10 pl-8 w-[26rem] rounded-[15px] border-2 border-blue-200 bg-white"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              className="btn absolute -ml-16 mt-2 text-2xl text-[#0C8283]"
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        {isAnyFieldEmpty ? (
          <button
            className="btton mt-7 space  ml-32 bg-[#0C8283] text-white py-2 rounded-lg w-[228px] h-[45px] hover:bg-opacity-60 focus:outline-none focus:bg-opacity-80 text-lg font-Poppins font-normal"
            disabled
          >
            Register
          </button>
        ) : (
          <Link href="/emissionChart">
            <button
              onClick={handleSubmit}
              className="mt-2 bg-[#0C8283] text-whiterounded-lg w-[150px] h-[45px] hover:bg-opacity-60 focus:outline-none focus:bg-opacity-80 text-lg font-Poppins font-normal ml-4"
            >
              Register
            </button>
          </Link>
        )}
        <div>{response}</div>
        <p className="spacee ml-32 text-gray-400 mt-5 text-xl font-Poppins label">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-teal-300 font-Poppins font-bold">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;

import React, { useState } from "react";
import { FaHandsClapping } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { TbEyeClosed } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";


const Login = () => {
  const [isHiddenPassword, setIsHiddenPassword] = useState(false);
  console.log(isHiddenPassword)

  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="min-h-screen bg-blue-100 flex justify-center items-center">
      <div className="w-[500px] bg-white p-5 rounded">
        <h1 className="text-3xl font-semibold mb-2">Login</h1>
        <div className="flex items-center gap-1 mb-4">
          <h6 className="font-normal">Hi, Welcome back </h6>
          <FaHandsClapping className="text-[#FFDB00]" />
        </div>
        <button className="flex items-center justify-center gap-2 border rounded w-full py-2">
          <FcGoogle className="text-[25px]" />
          <span className="text-base font-semibold">Login with Google</span>
        </button>
        <div className="flex justify-between items-center mt-5 mb-6">
          <div className="h-[1px]  w-[30%] bg-gray-200">
            <span></span>
          </div>
          <span className="">or Login with Email</span>
          <div className="h-[1px]  w-[30%] bg-gray-200"></div>
        </div>

        <div>
          <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-[17px] font-medium text-gray-800 "
              >
                Email
              </label>
              <input
                type="email"
                className="border py-1.5 px-2 rounded outline-none text-gray-700"
                name="email"
                id="email"
                placeholder="E.g. JohnDoe@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-1 relative">
              <label
                htmlFor="password"
                className="text-[17px] font-medium text-gray-800 "
              >
                Password
              </label>
              <input
                type={isHiddenPassword == true ? "password" : "text"}
                className="border py-1.5 px-2 rounded outline-none text-gray-700"
                name="password"
                id="password"
                placeholder="Enter your password"
              />

              <button
                onClick={() => setIsHiddenPassword(!isHiddenPassword)}
                className="absolute bottom-3 right-3 cursor-pointer text-[25px] translate-y-[20%]"
              >
                {isHiddenPassword == true ? <TbEyeClosed /> : <FaEye />}
              </button>
            </div>
            <div>
                <button type="submit" className="bg-blue-500 w-full p-2 text-white font-semibold">Login</button>
            </div>
          </form>
          <div className="mt-5">
            <p className="text-center text-sm">Not registered yet? <Link to={""} className="text-blue-900">Create an account<MdArrowOutward className="inline-block" /></Link>  </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

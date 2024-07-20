import React, { useState } from "react";
import logo from "../../assets/Logo (7).png";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import user from "../../assets/userIcon.webp";
import { IoCloseCircleOutline } from "react-icons/io5";

const Header = () => {
  const nav = useNavigate();
  const { basket, product } = useSelector((s) => s.add);
  const [modal, setModal] = useState(false);
  return (
    <div className="py-[35px] sticky top-0 backdrop-blur-sm z-[100]">
      <div className="container">
        <div className="flex items-center justify-between ">
          <img src={logo} alt="" />
          <div className="text-[25px] text-[#274C5B] font-bold flex items-center gap-7">
            <Link to={"/"} className="">
              Home
            </Link>
            <Link to={"/"}>About</Link>

            <Link to={"/shop"}>Shop</Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="text-2xl text-black bg-gray-200 outline-none py-[10px] px-[25px] rounded-3xl"
              />
              <div className="bg-[#7EB693] cursor-pointer absolute top-[3px] right-1 w-[46px] h-[46px] rounded-[50%] flex items-center justify-center">
                <a className="text-white text-[25px]">
                  <IoSearchSharp />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 border-2 border-solid border-gray-300 rounded-3xl p-[3px]">
              <div className="bg-[#274C5B] cursor-pointer w-[44px] h-[44px] rounded-[50%] flex items-center justify-center">
                <a
                  onClick={() => nav(`/basket`)}
                  className="text-white text-[25px]"
                >
                  <IoCartOutline />
                </a>
              </div>
              <h1 className="text-[#274C5B] text-[23px] font-bold">
                Cart ({basket.length ? basket.length : 0})
              </h1>
            </div>
          </div>
          <div
            onClick={() => setModal(true)}
            className="flex items-center flex-col cursor-pointer"
          >
            <img src={user} alt="" width={60} />
            <h1>User Name</h1>
          </div>
          {modal ? (
            <div className="">
              <div className="w-[700px] h-[400px]  flex items-center justify-center flex-col gap-4 bg-gray-200 rounded-3xl fixed top-[90%] left-[25%] z-[60]">
                <div className="relative z-0 w-[80%] mb-5 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_last_name"
                    className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-[80%] mb-5 group">
                  <input
                    type="password"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_last_name"
                    className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="text-white bg-[#699e7c] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                  >
                    Register
                  </button>
                  <button
                    type="button"
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                  >
                    <svg
                      className="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Sign in with Google
                  </button>
                  <a
                    onClick={() => setModal(false)}
                    className=" absolute top-[15px] right-[15px] text-3xl cursor-pointer"
                  >
                    <IoCloseCircleOutline />
                  </a>
                </div>
              </div>
              <div className="bg"></div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;

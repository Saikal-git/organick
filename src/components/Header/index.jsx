import React, { useState } from "react";
import logo from "../../assets/Logo (7).png";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch, IoSearchSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import userIcon from "../../assets/userIcon.webp";
import userfoto from "../../assets/3135715.png";
import { RiLogoutCircleRLine } from "react-icons/ri";

import { useAuth } from "../context/AuthContext";
import { searchProduct } from "../../redux/reducers/addProductSlice";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const { register, signInWithGoogle, logOut, logIn } = useAuth();
  const { basket, user } = useSelector((s) => s.add);
  const dispatch = useDispatch();
  const nav = useNavigate();
  // console.log(user, "user");
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [basketAni, setBasketAni] = useState(false);
  const [inputAni, setInputAni] = useState(false);

  const [inputValue, setInputValue] = useState("");

  async function handleRegister() {
    try {
      await register(email, password);
      setEmail("");
      setPassword("");
      setModal(false);
    } catch (error) {
      setError(error.message);
    }
  }
  async function handleLogIn() {
    try {
      await logIn(email, password);
      setEmail("");
      setPassword("");
      setModal(false);
    } catch (error) {
      setError(error.message);
    }
  }
  function handleGoogle() {
    signInWithGoogle();
    nav("/");
    setModal(false);
  }

  return (
    <div className="header py-[30px] sticky top-0 backdrop-blur-sm z-[100]">
      <div className="container">
        <div className="flex items-center  justify-between max-[1024px]:justify-around max-[992px]:justify-between">
          <img
            src={logo}
            alt=""
            className="w-[200px] max-[992px]:w-[160px] max-[867px]:w-[170px]"
          />
          <div className="text-[25px]  max-[768px]:text-[20px] text-[#274C5B] font-bold flex items-center gap-7 max-[768px]:gap-3 max-[992px]:text-[20px] max-[992px]:gap-5">
            <Link to={"/"} className="">
              Home
            </Link>
            <Link to={"/"}>About</Link>

            <Link to={user ? "/shop" : "*"}>Shop</Link>
          </div>
          <div className="flex items-center gap-3 max-[992px]:gap-1">
            {/* <div className="relative">
              <input
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                type="text"
                placeholder="Search..."
                className="text-2xl text-black bg-gray-200 outline-none py-[10px] px-[25px] rounded-3xl"
              />
              <div className="bg-[#7EB693] cursor-pointer absolute top-[3px] right-1 w-[46px] h-[46px] rounded-[50%] flex items-center justify-center">
                <a
                  onClick={() => {
                    dispatch(searchProduct(inputValue));
                    nav(`/search/${inputValue}`);
                    setInputValue("");
                  }}
                  className="text-white text-[25px]"
                >
                  <IoSearchSharp />
                </a>
              </div>
            </div> */}
            <div className="relative flex items-center  ">
              {inputAni ? (
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  onMouseOver={() => setInputAni(true)}
                  onMouseOut={() => setInputAni(false)}
                  type="text"
                  placeholder="search..."
                  className={`text-2xl  left-[-370px] top-[-25px] text-black bg-gray-200 py-[10px] px-[30px] rounded-3xl outline-none`}
                />
              ) : null}
              <div
                className={`bg-[#7EB693]   cursor-pointer ${
                  inputAni ? "top-[-22px]" : "top-[-23px]"
                } max-[1024px]:top-[-25px] right-3 w-[43px] h-[43px] rounded-[50%] flex items-center justify-center`}
                onMouseOver={() => setInputAni(true)}
                onMouseOut={() => setInputAni(false)}
                onClick={() => {
                  dispatch(searchProduct(inputValue));
                  nav(`/search/${inputValue}`);
                  setInputValue("");
                  setInputAni(false);
                }}
              >
                <a className="text-white text-[22px]">
                  <IoSearch />
                </a>
              </div>
            </div>
            {/* <div className="flex items-center gap-2 border-2 border-solid border-gray-300 rounded-3xl p-[3px]">
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
            </div> */}
            <Link
              to={`/basket`}
              className="flex items-center gap-2 border-2 border-solid border-gray-300 p-2 rounded-3xl"
              onMouseOver={() => setBasketAni(true)}
              onMouseOut={() => setBasketAni(false)}
            >
              <div className="w-[40px] h-[40px]  rounded-[50%] bg-[#274C5B] flex items-center justify-center">
                <a className="text-[22px] text-white">
                  <BsCart3 />
                </a>
              </div>
              {basketAni ? (
                <h1 className="text-[#274C5B] text-[24px] font-bold">
                  Cart ({basket.length ? basket.length : 0})
                </h1>
              ) : null}
            </Link>
          </div>
          <div
            onClick={() => setModal(true)}
            className="flex items-center flex-col cursor-pointer"
          >
            <img
              src={user ? (user.photoUrl ? user.photoUrl : userfoto) : userIcon}
              alt=""
              // width={55}
              className="w-[55px] max-[992px]:w-[45px]"
            />
            <h1 className="text-xl max-[992px]:text-[15px] font-bold">
              {user
                ? user.displayName
                  ? user.displayName
                  : user.email
                : "User Name"}
            </h1>
          </div>

          {modal ? (
            <div className="">
              <div className="w-[700px] h-[400px]  flex items-center justify-center flex-col gap-4 bg-gray-200 rounded-3xl fixed top-[90%] left-[25%] z-[60]">
                <div className="relative z-0 w-[80%] mb-5 group">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
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
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
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
                    onClick={handleLogIn}
                  >
                    Sign In
                  </button>
                  <button
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                  <button
                    type="button"
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                    onClick={handleGoogle}
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
                {error.length ? (
                  <div
                    class="flex items-center p-4 mb-4 text-xl text-white rounded-lg bg-red-700 dark:bg-gray-800 dark:text-red-600"
                    role="alert"
                  >
                    <svg
                      class="flex-shrink-0 inline w-4 h-4 me-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                      <span class="font-medium">{error}</span>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="bg"></div>
            </div>
          ) : null}
          {user ? (
            <button
              onClick={() => logOut()}
              className="text-2xl fixed top-6 right-3 max-[992px]:right-[40px]"
            >
              <RiLogoutCircleRLine />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;

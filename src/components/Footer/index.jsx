import React from "react";
import bgFooter from "../../assets/footer.png";
import logo from "../../assets/Logo (7).png";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        className="container rounded-[20px] flex items-center justify-between px-[60px]"
        style={{
          height: "55vh",
          backgroundImage: `url(${bgFooter})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <h1 className="text-5xl text-white font-bold">
          Subscribe to <br /> our Newsletter
        </h1>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Your Email Address"
            className="w-[335px] h-[65px] px-[20px] rounded-[15px] outline-none text-[20px]"
          />
          <button className="w-[135px] h-[63px] text-white font-medium bg-[#274C5B] rounded-[15px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex items-start justify-center gap-14 my-[30px] py-[10px]">
        <div className="flex items-end justify-end flex-col">
          <h1 className="mb-[30px] text-3xl font-bold text-[#274c5b]">
            Contact Us
          </h1>
          <h1 className="text-[18px] font-bold text-[#274C5B]">Email</h1>
          <p className="mb-[10px]">needhelp@Organia.com</p>
          <h1 className="text-[18px] font-bold text-[#274C5B]">Phone</h1>
          <p className="mb-[10px]">666 888 888</p>
          <h1 className="text-[18px] font-bold text-[#274C5B]">Address</h1>
          <p>88 road, borklyn street, USA</p>
        </div>
        <div className="w-[1px] h-[250px] bg-gray-300"></div>
        <div className="flex items-center flex-col gap-5">
          <img src={logo} alt="" width={170} />
          <p className="text-center">
            Simply dummy text of the printing and typesetting industry. <br />{" "}
            Lorem Ipsum simply dummy text of the printing{" "}
          </p>
          <div className="flex items-center gap-3 mt-[10px]">
            <a className="icons w-[45px] h-[45px] rounded-[50%] flex items-center justify-center">
              <FaInstagram />
            </a>
            <a className="icons w-[45px] h-[45px] rounded-[50%] flex items-center justify-center">
              <FaFacebook />
            </a>
            <a className="icons w-[45px] h-[45px] rounded-[50%] flex items-center justify-center">
              <FaTwitter />
            </a>
            <a className="icons w-[45px] h-[45px] rounded-[50%] flex items-center justify-center">
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="w-[1px] h-[250px] bg-gray-300"></div>
        <div className="flex items-start flex-col gap-[30px]">
          <h1 className=" text-3xl font-bold text-[#274c5b]">Utility Pages</h1>
          <div className="flex items-start flex-col gap-[15px]">
            <h1>Style Guide</h1>
            <h1>404 Not Found</h1>
            <h1>Password Protected</h1>
            <h1>Licences</h1>
            <h1>Changelog</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

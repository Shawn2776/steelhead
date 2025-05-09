"use client";

import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full relative">
      {/* Mobile */}
      <div className="w-full sm:hidden">
        {/* Menu Bar */}
        <div className="flex justify-between items-center px-4 py-4 bg-white shadow-md">
          {/* Left */}
          <div className="text-orange-500 font-bold text-2xl">L0g0</div>

          {/* Right */}
          <div>
            <button
              onClick={handleClick}
              className="text-orange-500 focus:outline-none"
            >
              <IoMenu size={40} />
            </button>
          </div>
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div
            onClick={handleClick}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          />
        )}

        {/* Sliding Menu */}
        <div
          className={`fixed top-0 left-0 z-50 h-screen w-3/4 bg-white text-black p-6 shadow-lg transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
          style={{ transitionProperty: "transform, opacity" }}
        >
          {/* TOP */}
          <div className="flex justify-between items-center mb-6">
            {/* Left */}
            <div className="text-orange-500 font-bold text-2xl">L0g0</div>

            {/* Right */}
            <div>
              <button
                onClick={handleClick}
                className="text-orange-500 focus:outline-none"
              >
                <GrClose size={30} />
              </button>
            </div>
          </div>

          {/* MENU */}
          <div className="flex flex-col gap-6 text-xl">
            <button className="w-full bg-orange-500 p-3 rounded-md shadow-lg text-white hover:bg-orange-600 transition-colors">
              Home
            </button>
            <button className="w-full bg-gray-100 p-3 rounded-md shadow-lg text-gray-800 hover:bg-gray-200 transition-colors">
              About Us
            </button>
            <button className="w-full bg-gray-100 p-3 rounded-md shadow-lg text-gray-800 hover:bg-gray-200 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden w-full h-12 sm:flex justify-between items-center px-5 bg-orange-400">
        {/* Left */}
        <div>
          <div className="flex gap-2">
            <span className="flex items-center gap-2">
              <BsTelephone /> (208) 500-9450
            </span>
            <hr className="h-5 border-1 items-center flex" />
            <span className="flex items-center gap-2">
              <MdOutlineMail /> support@steelhead.pro
            </span>
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="flex gap-2 items-center">
            <FaFacebook />
            <FaInstagramSquare />
            <BsTwitterX />
            <FaLinkedin />
            <FaYoutube />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FaCar, FaList, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 py-2 px-4 flex flex-row justify-between items-center shadow-md">
      <div className="flex items-center">
        <Link to="/" className="ml-4 text-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-7" />
            <span className="text-white ml-2 text-xl font-semibold">
              BuyCar
            </span>
          </div>
        </Link>
      </div>
      <div className="sm:hidden relative">
        <button onClick={toggleMenu} className="text-orange-300">
          {isOpen ? (
            <IoClose className="h-7 w-7" />
          ) : (
            <RiMenuLine className="h-7 w-7" />
          )}
        </button>
        {isOpen && (
          <div className="absolute right-0 top-12 bg-gray-900 text-white p-2">
            <Link
              to="/deals"
              className="block text-white p-2 flex items-center"
            >
              <FaCar className="mr-2 text-orange-300 text-2xl" />
            </Link>
            <Link
              to="/inventory"
              className="block text-white p-2 flex items-center"
            >
              <FaList className="mr-2 text-orange-300 text-2xl" />
            </Link>
            <Link
              to="/signin"
              className="block text-white p-2 flex items-center"
            >
              <FaSignOutAlt className="mr-2 text-orange-300 text-2xl" />
            </Link>
          </div>
        )}
      </div>
      {/* Additional content for larger screens */}
      <div className={`hidden sm:flex justify-center bg-gray-900`}>
        <Link to="/deals" className="text-orange-300 ml-4">
          Car Details
        </Link>
        <Link to="/inventory" className="text-orange-300 ml-4">
          Inventory
        </Link>
        <Link to="/signin" className="text-orange-300 ml-4">
          Signup/Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

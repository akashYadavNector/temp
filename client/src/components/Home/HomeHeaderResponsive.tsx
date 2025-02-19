import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeHeaderResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header
      className={`fixed w-full z-50 p-3 flex justify-between items-center bg-white shadow-md md:hidden`}
    >
      {/* Logo */}
      <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
        <img
          src="/logo/purnalogo.png"
          width={155}
          height={155}
          alt="Purna Logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="md:flex gap-6 items-center hidden">
        <div className="relative group">
          <button className="capitalize text-lg hover:font-semibold text-center p-2 rounded-lg mx-2 duration-300 flex items-center justify-center gap-1">
            Products
          </button>
        </div>
        <Link to={"/shop"} className="hover:text-blue-500 hover:font-semibold">
          Shop
        </Link>
        <Link
          to={"/aboutus"}
          className="hover:text-blue-500 hover:font-semibold"
        >
          About Us
        </Link>
        <Link to={"/FAQ"} className="hover:text-blue-500 hover:font-semibold">
          FAQ
        </Link>
      </nav>

      {/* Login & Cart */}
      <div className="hidden md:flex items-center gap-4">
        <button
          className="px-4 py-2 text-gray-900 ring-gray-500 hover:ring-blue-700 ring-1 rounded-lg font-semibold hover:bg-blue-700 hover:text-white duration-500"
          onClick={() => console.log("Login clicked")}
        >
          Login
        </button>
        <FaCartShopping size={30} />
      </div>

      {/* Burger Menu for Mobile */}
      <div className="md:hidden">
        {!isMenuOpen ? (
          <FaBars size={30} onClick={() => setIsMenuOpen(true)} />
        ) : (
          <FaTimes size={30} onClick={() => setIsMenuOpen(false)} />
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-white">
          <FaTimes
            size={30}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
          <nav className="flex flex-col gap-6 text-xl">
            <Link to={"/shop"} onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link to={"/aboutus"} onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to={"/FAQ"} onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
            <button
              className="px-4 py-2 mt-4 text-gray-900 bg-white rounded-lg font-semibold hover:bg-gray-200"
              onClick={() => {
                console.log("Login clicked");
                setIsMenuOpen(false);
              }}
            >
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HomeHeaderResponsive;

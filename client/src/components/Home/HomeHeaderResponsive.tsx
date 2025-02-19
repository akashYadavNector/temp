import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeHeaderResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const products = [
    {
      title: "Ashwagandha Gummies",
      link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
    },
    {
      title: "Apple Cider Vinegar Gummies",
      link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
    },
    {
      title: "Probiotic+ Gummies",
      link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
    },
    {
      title: "Matcha Mind",
      link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
    },
    {
      title: "Beets Cardio Gummies",
      link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
    },
    {
      title: "Extra-Strength Sleep",
      link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
    },
    {
      title: "Dreamy Sleep Gummies",
      link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
    },
    {
      title: "Supergreens Gummies",
      link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
    },
    {
      title: "Superfruits Beauty Gummies",
      link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
    },
    {
      title: "Triple Action Immune Gummies",
      link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
    },
    {
      title: "Women's Multi Gummies",
      link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
    },
  ];

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
        <div className="fixed overflow-y-scroll inset-0 bg-white z-50 flex flex-col items-center justify-start text-black">
          <FaTimes
            size={40}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="grid grid-flow-row grid-cols-2 gap-3 px-2 mx-4 mt-24 ">
            {products.map((item) => (
              <div className=" ring-1 ring-black relative">
                <img src={item.link} alt="" />
                <span className=" absolute top-2 text-center font-semibold">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
          <nav className="flex flex-col w-full text-2xl py-3">
            <button className="p-2 w-11/12 m-2 self-center rounded-lg bg-blue-600 text-white font-semibold  ">
              Order Now
            </button>
            <Link
              to={"/shop"}
              className=" border-t-2 border-gray-500 text-center py-2 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to={"/aboutus"}
              className=" border-t-2 border-gray-500 text-center py-2 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to={"/FAQ"}
              className=" border-y-2 border-gray-500 text-center py-2 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex justify-center">
              <button
                className="px-4 text-white  bg-green-600 w-5/12 my-4 mx-2 py-2 rounded-lg font-semibold  "
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Login
              </button>
              <button
                className="px-4 text-white  bg-teal-500 w-5/12 my-4 mx-2 py-2 rounded-lg font-semibold  "
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Register
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HomeHeaderResponsive;

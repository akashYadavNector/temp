import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
interface childProps {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
const HomeHeaderResponsive = ({ setShowCart }: childProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCartOpen = () => {
    console.log("handle cart open is working fine ");

    setIsMenuOpen(false);
    setShowCart(true);
  };
  // const products = [
  //   {
  //     title: "Ashwagandha Gummies",
  //     link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
  //   },
  //   {
  //     title: "Apple Cider Vinegar Gummies",
  //     link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
  //   },
  //   {
  //     title: "Probiotic+ Gummies",
  //     link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
  //   },
  //   {
  //     title: "Matcha Mind",
  //     link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
  //   },
  //   {
  //     title: "Beets Cardio Gummies",
  //     link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
  //   },
  //   {
  //     title: "Extra-Strength Sleep",
  //     link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
  //   },
  //   {
  //     title: "Dreamy Sleep Gummies",
  //     link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
  //   },
  //   {
  //     title: "Supergreens Gummies",
  //     link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
  //   },
  //   {
  //     title: "Superfruits Beauty Gummies",
  //     link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
  //   },
  //   {
  //     title: "Triple Action Immune Gummies",
  //     link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
  //   },
  //   {
  //     title: "Women's Multi Gummies",
  //     link: "https://goli.com/cdn/shop/files/mm-benefits-mobile.jpg?v=9324384516208770450",
  //   },
  // ];
  const products = [
    {
      title: "Ashwagandha Gummies",
      link: "Shop/ProductIcons/a thing of beauty.png",
      colorCode: "#B0DCE8", // Light Blue
    },
    {
      title: "Apple Cider Vinegar Gummies",
      link: "Shop/ProductIcons/Acv.png",
      colorCode: "#E17167", // Red
    },
    {
      title: "Probiotic+ Gummies",
      link: "Shop/ProductIcons/all that glitters.png",
      colorCode: "#63BCA4", // Green
    },
    {
      title: "Matcha Mind",
      link: "Shop/ProductIcons/ashwangandha.png",
      colorCode: "#63BCA4", // Green
    },
    {
      title: "Beets Cardio Gummies",
      link: "Shop/ProductIcons/bright as day.png",
      colorCode: "#A35267", // Reddish-Purple
    },
    {
      title: "Extra-Strength Sleep",
      link: "Shop/ProductIcons/cranberry.png",
      colorCode: "#59316A", // Purple
    },
    {
      title: "Dreamy Sleep Gummies",
      link: "Shop/ProductIcons/good morning sunshine.png",
      colorCode: "#CDB4DA", // Lavender
    },
    {
      title: "Supergreens Gummies",
      link: "Shop/ProductIcons/pretty women.png",
      colorCode: "#37875B", // Darker Green
    },
    {
      title: "Superfruits Beauty Gummies",
      link: "Shop/ProductIcons/sweet dreamzz.png",
      colorCode: "#D97E36", // Orange
    },
    // {
    //   title: "Triple Action Immune Gummies",
    //   link: "/images/product/item10.png",
    //   colorCode: "#F0B07B" // Light Orange
    // },
    // {
    //   title: "Women's Multi Gummies",
    //   link: "/images/product/item11.png",
    //   colorCode: "#E64584" // Hot Pink
    // }
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
      {/* <div className="hidden md:flex items-center gap-4">
        <button
          className="px-4 py-2 text-gray-900 ring-gray-500 hover:ring-blue-700 ring-1 rounded-lg font-semibold hover:bg-blue-700 hover:text-white duration-500"
          onClick={() => console.log("Login clicked")}
        >
          Login
        </button>
      </div> */}
      {/* <FaCartShopping size={30} /> */}

      {/* Burger Menu for Mobile */}
      <div className="md:hidden flex items-center min-w-[5rem] justify-between">
        <FaCartShopping size={25} onClick={handleCartOpen} />
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
          <div className="grid grid-flow-row  relative grid-cols-2 gap-3 px-2 mx-4 mt-24 border-t-gray-400 border py-3">
            <span className="absolute top-[-40px] p-2 px-3 bg-black text-white rounded-t font-bold">
              Gummies
            </span>
            {products.map((item, index) => (
              <Link
              to={item.link}
                className={` bg-[${item.colorCode}] bg-opacity-90 relative flex justify-center rounded-xl shadow-lg shadow-[${item.colorCode}]`}
                key={index}
              >
                <img src={item.link} alt="" className=" w-4/5" />
                <span className=" absolute top-2 text-sm text-center font-semibold">
                  {item.title}
                </span>
                <span className="absolute bottom-3 text-[10px]">Click to know more</span>
              </Link>
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

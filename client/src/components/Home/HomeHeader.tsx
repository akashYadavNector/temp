import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Sample link list (you can replace with your actual data)
  const linkList = [
    { name: "home", link: "/" },
    { name: "products", link: "/products" },
    { name: "about", link: "/about" },
    { name: "contact", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed w-full z-50 p-3 grid grid-cols-3 
         ring-gray-400 shadow-gray-400
        transition-all duration-500
        ${isScrolled ? "bg-white/60 hover:bg-white rounded-b-3xl" : "bg-white"}
      `}
    >
      <h1 className="text-2xl">
        <img src="purnalogo.png" width={155} height={155} alt="Purna Logo" />
      </h1>

      <nav className="grid grid-cols-4 items-center">
        {linkList.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            className="capitalize text-lg hover:font-semibold text-center p-2 rounded-lg duration-300"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex justify-end items-center">
        <button className="mx-2 px-5 ring-gray-700 hover:ring-0 p-2 ring-1 rounded-lg font-semibold hover:bg-blue-700 hover:text-white duration-500">
          Login
        </button>
        <FaCartShopping className="mx-2" size={30} />
      </div>
    </header>
  );
};

export default Header;

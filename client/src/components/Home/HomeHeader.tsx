import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const HomeHeader = () => {
  interface LinkItem {
    name: string;
    link: string;
  }

  const [linkList, setLinkList] = useState<LinkItem[]>([
    { name: "products", link: "/products" },
    { name: "shop", link: "/shop" },
    { name: "About", link: "/about" },
    { name: "faq", link: "/faq" },
  ]);
  return (
    <header className=" bg-[#fff] p-3 grid grid-cols-3 ring-1 ring-gray-400 shadow-lg shadow-gray-400">
      <h1 className=" text-2xl">My Purna </h1>
      <nav className="grid grid-cols-4 items-center">
        {linkList.map((item) => (
          <Link to={item.link} className=" capitalize  hover:bg-blue-300 text-center p-2 rounded-lg duration-300">
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="flex justify-end items-center">
        <button className="mx-2 px-5 ring-gray-700 hover:ring-0 p-2 ring-1 rounded-lg font-semibold hover:bg-blue-700 hover:text-white duration-500">
          Login
        </button>
        <FaCartShopping size={30} className="mx-2" />
      </div>
    </header>
  );
};

export default HomeHeader;

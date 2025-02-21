import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoTrashBinSharp } from "react-icons/io5";

interface AddtoCartProps {
  setShowCart: (show: boolean) => void;
  isOpen: boolean;
}

const AddCart: React.FC<AddtoCartProps> = ({ setShowCart, isOpen }) => {
  const handleCloseCart = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowCart(false);
    }
  };
  const products = [
    {
      id: 1,
      name: "Matcha Mind Gummies",
      price: 325,
      qty: 2,
      imgSrc: "Shop/ProductIcons/Acv.png",
    },
    {
      id: 2,
      name: "Super Berry Gummies",
      price: 300,
      qty: 1,
      imgSrc: "Shop/ProductIcons/Acv.png",
    },
    {
      id: 3,
      name: "Vitamin C Gummies",
      price: 280,
      qty: 3,
      imgSrc: "Shop/ProductIcons/Acv.png",
    },
    {
      id: 4,
      name: "Omega-3 Gummies",
      price: 350,
      qty: 4,
      imgSrc: "Shop/ProductIcons/Acv.png",
    },
    {
      id: 5,
      name: "Turmeric Gummies",
      price: 290,
      qty: 5,
      imgSrc: "Shop/ProductIcons/Acv.png",
    },
    {
      id: 6,
      name: "Probiotic Gummies",
      price: 310,
      qty: 2,
      imgSrc: "Shop/ProductIcons/Acv.png",
    },
    {
      id: 7,
      name: "Collagen Gummies",
      price: 330,
      qty: 1,
      imgSrc: "Shop/ProductIcons/Acv.png",
    },
    {
      id: 8,
      name: "Elderberry Gummies",
      price: 340,
      qty: 3,
      imgSrc: "Shop/ProductIcons/Acv.png",
    },
    {
      id: 9,
      name: "Ashwagandha Gummies",
      price: 360,
      qty: 4,
      imgSrc: "Shop/ProductIcons/Acv.png",
    },
    {
      id: 10,
      name: "Biotin Gummies",
      price: 370,
      qty: 5,
      imgSrc: "Shop/ProductIcons/Acv.png",
    },
  ];

  return (
    <div
      className={`fixed inset-0 flex justify-end items-center h-screen w-screen bg-black/25 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={handleCloseCart}
    >
      <div
        className={`min-w-[35rem] h-4/6 relative bg-[#f3eeee] flex flex-col text-black rounded-r rounded-3xl border-black transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <span className="absolute top-3 left-3 text-lg font-semibold">
          Total Item: {products.length}
        </span>
        <span
          className="absolute right-6 top-4 text-2xl cursor-pointer"
          onClick={handleCloseCart}
        >
          X
        </span>
        <h1 className="text-3xl font-bold text-[#f16f91] text-center my-4 font-serif">
          Your Cart
        </h1>
        <hr />
        <div className="py-3 mx-4 my-3 min-h-[10rem] overflow-y-auto h-full">
          {products.map((item, index) => (
            <div
              className="flex flex-col rounded-lg px-4 relative bg-[#fff] shadow-xl my-4 mx-4"
              key={index}
            >
              <div className="flex justify-between  ">
                <h3 className=" text-lg font-semibold p-2">{item.name}</h3>
                <span className=" text-xl font-bold  p-2 ">${item.price}</span>
              </div>
              <div className="w-full flex justify-between items-center h-[8rem]">
                <img
                  src={item.imgSrc}
                  alt="NOooooo"
                  className=" w-[145px] top-[-5px] absolute"
                />
                <span className=" flex items-start justify-center flex-grow">
                  <FaPlus
                    className=" mx-4 cursor-pointer"
                    color="gray"
                    size={25}
                  />
                  <span className=" font-bold text-xl">{item.qty}</span>
                  <FaMinus
                    className="mx-4 cursor-pointer"
                    color="gray"
                    size={25}
                  />
                </span>
                <div className="flex justify-end">
                  <IoTrashBinSharp
                    size={40}
                    color="#d52430"
                    className=" cursor-pointer ml-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-auto text-xl p-2 mb-5 w-3/5 self-center rounded hover:bg-blue-700 hover:text-white hover:ring-0 duration-300 ring-2 ring-gray-700 ">
          Checkout : $435
        </button>{" "}
        {/* Added mt-auto here */}
      </div>
    </div>
  );
};

export default AddCart;

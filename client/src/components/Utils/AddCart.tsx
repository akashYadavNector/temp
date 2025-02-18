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
        className={`min-w-[35rem] h-4/6 relative bg-white flex flex-col text-black rounded-r rounded-3xl border-black transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
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
        <div className=" overflow-y-auto">
          <div className="flex flex-col flex-grow">
            {" "}
            {/* Added flex-grow here */}
            <div className="flex justify-between px-4 ">
              <h3 className=" text-lg font-semibold p-2">
                3 Bottles of Matcha Mind Gummies
              </h3>
              <span className=" text-xl font-bold  p-2 ">$325</span>
            </div>
            <div className="w-full flex px-6  items-center">
              {" "}
              {/* Added items-center */}
              <div className=" bg-gray-200 ring-gray-300 rounded-lg mx-3 w-[80px]">
                <img
                  src="/products/Ashwagandha.png"
                  alt="NOooooo"
                  className=""
                />
              </div>
              <span className=" flex items-start">
                <FaPlus
                  className=" mx-4 cursor-pointer"
                  color="gray"
                  size={25}
                />
                <span className=" font-bold text-xl">2</span>
                <FaMinus
                  className="mx-4 cursor-pointer"
                  color="gray"
                  size={25}
                />
              </span>
              <div className="flex justify-end w-2/3">
                <IoTrashBinSharp
                  size={35}
                  color="gray"
                  className=" self-center cursor-pointer"
                />
              </div>
            </div>
            <hr className="my-2" />
          </div>
          <div className="flex flex-col flex-grow">
            {" "}
            {/* Added flex-grow here */}
            <div className="flex justify-between px-4 ">
              <h3 className=" text-lg font-semibold p-2">
                3 Bottles of Matcha Mind Gummies
              </h3>
              <span className=" text-xl font-bold  p-2 ">$325</span>
            </div>
            <div className="w-full flex px-6  items-center">
              {" "}
              {/* Added items-center */}
              <div className=" bg-gray-200 ring-gray-300 rounded-lg mx-3 w-[80px]">
                <img
                  src="/products/Ashwagandha.png"
                  alt="NOooooo"
                  className=""
                />
              </div>
              <span className=" flex items-start">
                <FaPlus
                  className=" mx-4 cursor-pointer"
                  color="gray"
                  size={25}
                />
                <span className=" font-bold text-xl">2</span>
                <FaMinus
                  className="mx-4 cursor-pointer"
                  color="gray"
                  size={25}
                />
              </span>
              <div className="flex justify-end w-2/3">
                <IoTrashBinSharp
                  size={35}
                  color="gray"
                  className=" self-center cursor-pointer"
                />
              </div>
            </div>
            <hr className="my-2" />
          </div>
          <div className="flex flex-col flex-grow">
            {" "}
            {/* Added flex-grow here */}
            <div className="flex justify-between px-4 ">
              <h3 className=" text-lg font-semibold p-2">
                3 Bottles of Matcha Mind Gummies
              </h3>
              <span className=" text-xl font-bold  p-2 ">$325</span>
            </div>
            <div className="w-full flex px-6  items-center">
              {" "}
              {/* Added items-center */}
              <div className=" bg-gray-200 ring-gray-300 rounded-lg mx-3 w-[80px]">
                <img
                  src="/products/Ashwagandha.png"
                  alt="NOooooo"
                  className=""
                />
              </div>
              <span className=" flex items-start">
                <FaPlus
                  className=" mx-4 cursor-pointer"
                  color="gray"
                  size={25}
                />
                <span className=" font-bold text-xl">2</span>
                <FaMinus
                  className="mx-4 cursor-pointer"
                  color="gray"
                  size={25}
                />
              </span>
              <div className="flex justify-end w-2/3">
                <IoTrashBinSharp
                  size={35}
                  color="gray"
                  className=" self-center cursor-pointer"
                />
              </div>
            </div>
            <hr className="my-2" />
          </div>
          <div className="flex flex-col flex-grow">
            {" "}
            {/* Added flex-grow here */}
            <div className="flex justify-between px-4 ">
              <h3 className=" text-lg font-semibold p-2">
                3 Bottles of Matcha Mind Gummies
              </h3>
              <span className=" text-xl font-bold  p-2 ">$325</span>
            </div>
            <div className="w-full flex px-6  items-center">
              {" "}
              {/* Added items-center */}
              <div className=" bg-gray-200 ring-gray-300 rounded-lg mx-3 w-[80px]">
                <img
                  src="/products/Ashwagandha.png"
                  alt="NOooooo"
                  className=""
                />
              </div>
              <span className=" flex items-start">
                <FaPlus
                  className=" mx-4 cursor-pointer"
                  color="gray"
                  size={25}
                />
                <span className=" font-bold text-xl">2</span>
                <FaMinus
                  className="mx-4 cursor-pointer"
                  color="gray"
                  size={25}
                />
              </span>
              <div className="flex justify-end w-2/3">
                <IoTrashBinSharp
                  size={35}
                  color="gray"
                  className=" self-center cursor-pointer"
                />
              </div>
            </div>
            <hr className="my-2" />
          </div>
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

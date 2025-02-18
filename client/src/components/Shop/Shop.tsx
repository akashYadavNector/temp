import React from "react";
import Header from "../Home/HomeHeader";

const Shop = () => {
  const productLogoList = [
    {
      title: "Beauty",
      link: "/Shop/ProductIcons/a thing of beauty.png",
    },
    {
      title: "ACV",
      link: "/Shop/ProductIcons/Acv.png",
    },
    {
      title: "Glitters",
      link: "/Shop/ProductIcons/all that glitters.png",
    },
    {
      title: "Ashwagandha",
      link: "/Shop/ProductIcons/ashwangandha.png",
    },
    {
      title: "Bright",
      link: "/Shop/ProductIcons/bright as day.png",
    },
    {
      title: "Cranberry",
      link: "/Shop/ProductIcons/cranberry.png",
    },
    {
      title: "Sunshine",
      link: "/Shop/ProductIcons/good morning sunshine.png",
    },
    {
      title: "Pretty",
      link: "/Shop/ProductIcons/pretty women.png",
    },
    {
      title: "Dreamzz",
      link: "/Shop/ProductIcons/sweet dreamzz.png",
    },
  ];
  const images = [
    {
      name: "(single) a thing of beauty.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/(single)a thing of beauty.png",
    },
    {
      name: "(single) ACV.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/(single) ACV.png",
    },
    {
      name: "(single) All that glitter.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/(single) All that glitter.png",
    },
    {
      name: "(single) ashwangadha.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/(single) ashwangadha.png",
    },
    {
      name: "(single) Bright as day.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/(single) Bright as day.png",
    },
    {
      name: "(single) Cranberry.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/(single) Cranberry.png",
    },
    {
      name: "(single) good morning su.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/(single) good morning sunshine.png",
    },
    {
      name: "(single) pretty women.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/(single) pretty women.png",
    },
    {
      name: "(single) sweet dreams.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/(single) sweet dreams.png",
    },
    {
      name: "(single) youthful you.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/(single) youthful you.png",
    },
    {
      name: "a thing of beauty.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/a thing of beauty.png",
    },
    {
      name: "ACV.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/ACV.png",
    },
    {
      name: "all that glitters.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/all that glitters.png",
    },
    {
      name: "bright as day.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/bright as day.png",
    },
    {
      name: "excalibur.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/excalibur.png",
    },
    {
      name: "good morning sunshine.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/good morning sunshine.png",
    },
    {
      name: "hairway to heaven.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/hairway to heaven.png",
    },
    {
      name: "pretty woman.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/pretty woman.png",
    },
    {
      name: "sweet dreams.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/sweet dreams.png",
    },
    {
      name: "youthful you.png",
      location: "Shop/ShopProducts/",
      link: "Shop/ShopProducts/youthful you.png",
    },
  ];

  console.log(images);

  return (
    <>
      <Header />
      <div>
        <div className="text-4xl  flex overflow-x-auto mx-16">
          {productLogoList.map((item) => (
            <div className=" mt-16 flex flex-col items-start cursor-pointer relative">
              <img src={item.link} alt="No image found" />
              <h2 className=" text-center text-sm font-semibold  w-full text-black absolute bottom-4 hover:text-blue-500 duration-300">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
        <div className=" grid grid-flow-row grid-cols-2 px-12 mx-12">
          {images.map((item) => (
            <div className=" grid grid-flow-row bg-blue-200 rounded-lg m-2 min-h-56">
              <span className=" col-span-2">{item.name}</span>
              <img
                src={item.link}
                alt="No Image found"
                className=" col-span-1 h-auto"
              />
              <div className=" col-span-1 flex flex-col capitalize">
                <div className=" flex flex-col p-4 bg-white rounded-xl m-2 cursor-pointer border border-gray-400">
                  <span className=" font-bold">subscribe & save</span>
                  <b className=" text-3xl font-bold normal-case">
                    $13.48 <span className="text-sm text-blue-400">each</span>
                  </b>
                  <p className=" text-sm">
                    Total:$62.98
                    <span className=" line-through text-sm ml-5 text-blue-400">
                      $25.00
                    </span>
                  </p>
                </div>
                <div className=" flex flex-col focus:bg-blue-500 focus:text-white p-4 bg-white rounded-xl m-2 cursor-pointer border border-gray-400">
                  <span className=" font-bold">One-time Purchase</span>
                  <b className=" text-3xl font-bold normal-case">
                    $14.98 <span className="text-sm text-blue-400">each</span>
                  </b>
                  <p className=" text-sm">
                    Total:$62.98{" "}
                    <span className=" line-through text-sm ml-5 text-blue-400">
                      $25.00
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex  justify-center col-span-2 my-4">
                <button className=" bg-white py-4 px-11 rounded-full font-semibold uppercase ring-1 ring-gray-400 mx-1">pack 1</button>
                <button className=" bg-white py-4 px-11 rounded-full font-semibold uppercase ring-1 ring-gray-400 mx-1">pack 2</button>
                <button className=" bg-white py-4 px-11 rounded-full font-semibold uppercase ring-1 ring-gray-400 mx-1">pack 3</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;

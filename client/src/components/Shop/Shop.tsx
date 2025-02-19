import React from "react";
import Header from "../Home/HomeHeader";
import shopStyle from "./Shop.module.css";
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

  const handlePackButtonButtonClick = (e: any) => {
    console.log(e);
  };
  console.log(images);

  return (
    <>
      <Header />
      <div>
        <div
          className={`text-4xl flex mx-4  md:mx-16 ${shopStyle.scrollableContainer}`}
        >
          {productLogoList.map((item, index) => (
            <div
              key={index}
              className="mt-16 flex flex-col items-start cursor-pointer relative"
            >
              <img
                src={item.link}
                alt="No image found"
                className="min-w-40 lg:min-w-32"
              />
              <h2 className="text-center text-sm font-semibold w-full text-black absolute bottom-4 hover:text-blue-500 duration-300">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  3xl:grid-cols-3 gap-4 px-4 md:mx-32 lg:px-12">
          {images.map((item) => (
            <div className="bg-blue-200 rounded-lg p-4 flex flex-col">
              {/* Product Name */}
              <span className="text-lg font-semibold mb-4 text-center">
                {item.name}
              </span>

              {/* Product Content Container */}
              <div className="grid grid-cols-2 gap-4">
                {/* Image Container */}
                <div className="flex justify-center items-start">
                  <img
                    src={item.link}
                    alt="No Image found"
                    className="object-contain w-full min-h-[20rem] max-h-[250px] md:max-h-[250px]"
                  />
                </div>

                {/* Pricing Options Container */}
                <div className="flex flex-col gap-3">
                  {/* Subscribe & Save Option */}
                  <div className="bg-white rounded-xl p-4 cursor-pointer border border-gray-400 hover:shadow-md transition-shadow">
                    <span className="font-bold text-sm md:text-base">
                      Subscribe & Save
                    </span>
                    <div className="text-custom-1360 md:text-3xl font-bold mt-1">
                      $13.48 <span className="text-sm text-blue-400">each</span>
                    </div>
                    <p className="text-sm mt-1">
                      Total:$62.98
                      <span className="line-through ml-3 text-blue-400">
                        $25.00
                      </span>
                    </p>
                  </div>

                  {/* One-time Purchase Option */}
                  <div className="bg-white rounded-xl p-4 cursor-pointer border border-gray-400 hover:shadow-md transition-shadow">
                    <span className="font-bold text-sm md:text-base">
                      One-time Purchase
                    </span>
                    <div className="text-custom-1360 md:text-3xl font-bold mt-1">
                      $14.98 <span className="text-sm text-blue-400">each</span>
                    </div>
                    <p className="text-sm mt-1">
                      Total:$62.98
                      <span className="line-through ml-3 text-blue-400">
                        $25.00
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Pack Selection */}
              <div className="flex flex-wrap justify-center gap-2 mt-6 text-lg">
                <button
                  onClick={handlePackButtonButtonClick}
                  className="bg-blue-700 text-white px-6 py-4  md:px-12 md:py-6 lg:px-6 lg:py-4 custom-1360:px-10 custom-1360:py-6 custom-1360:mx-3 rounded-full text-sm font-semibold uppercase ring-1 ring-gray-400 hover:bg-blue-800 transition-colors custom-550:px-12 custom-550:py-6"
                >
                  pack 1
                </button>
                <button
                  onClick={handlePackButtonButtonClick}
                  className="bg-white px-6   *:py-4  md:px-12 md:py-6 lg:px-6 lg:py-4 custom-1360:px-10 custom-1360:py-6 custom-1360:mx-3 rounded-full text-sm font-semibold uppercase ring-1 ring-gray-400 hover:bg-gray-50 transition-colors custom-550:px-12 custom-550:py-6"
                >
                  pack 2
                </button>
                <button
                  onClick={handlePackButtonButtonClick}
                  className="bg-white px-6 py-4  md:px-12 md:py-6 lg:px-6 lg:py-4 custom-1360:px-10 custom-1360:py-6 custom-1360:mx-3 rounded-full text-sm font-semibold uppercase ring-1 ring-gray-400 hover:bg-gray-50 transition-colors custom-550:px-12 custom-550:py-6"
                >
                  pack 3
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full mt-6 py-3 px-6 rounded-lg uppercase bg-blue-600 text-white text-sm md:text-base font-semibold hover:bg-blue-700 transition-colors">
                add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;

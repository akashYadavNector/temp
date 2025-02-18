import React, { useState } from "react";

const HomeSection7 = () => {
  const [featuredList, setFeaturedList] = useState([
    {
      name: "zee News",
      link: "/logo/zeeNews.png",
    },
    {
      name: "news18",
      link: "/logo/news18.png",
    },
    {
      name: "APB News",
      link: "/logo/abpNews.png",
    },
  ]);
  return (
    <div className="bg-white text-center">
      <div className=" bg-black text-white py-5">
        <span className="uppercase font-semibold ">As Featured In </span>
        <div className="grid grid-flow-col gap-10 justify-center py-4">
          {featuredList.map((item) => (
            <img src={item.link} className=" w-44" />
          ))}
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-4 bg-[#dfc3c3]">
        {/* <div className=" col-span-4 flex flex-col items-center justify-center">
          <img
            src="/logo/purnalogo.png"
            alt=""
            className=" w-80 invert-[80%]"
          />
          <h2 className=" text-2xl font-bold text-[#ad5c5c] underline">
            Poorna Foundation
          </h2>
        </div> */}
        <div className="col-span-4">
          <img src="/purnaFoundation/groupImage1.jpeg" alt="No Image Found" />
        </div>
        <div className="col-span-4 grid grid-flow-row grid-cols-4 ">
          <img
            src="/purnaFoundation/child1.jpeg"
            alt="No Image is Found"
            className="col-span-1"
          />
          <div className="col-span-2 flex justify-center">
            <div className=" w-3/5">
              {/* <img src="/logo/purnalogo.png" alt="" className="invert-[80%]" /> */}
              <h3 className=" text-3xl font-bold text-[#382816] mt-5">
                Anganwadi Nutrition Program
              </h3>
              <h3 className=" text-4xl font-semibold my-5">Comming Soon..</h3>
              <p className=" my-5 text-lg capitalize font-semibold">
                heartfelt initiative dedicated to improving the health of young
                children. Through this program, we will distribute our
                vitamin-rich gummies to Anganwadi centers, ensuring children
                receive essential nutrients for their growth and well-being.
              </p>
            </div>
            <p></p>
          </div>
          <img
            src="/purnaFoundation/child2.jpeg"
            alt="No Image is Found"
            className="col-span-1 h-full"
          />
        </div>
        <div className="col-span-4">
          <img src="/purnaFoundation/groupImage2.jpeg" alt="No Image Found" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection7;

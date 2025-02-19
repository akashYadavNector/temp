import React, { useState } from "react";

const HomeSection2 = () => {
  const logo =
    "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1739428645~exp=1739432245~hmac=70cae202adbde2afdf0fcbe16257931e6769243be689b457d2c84cdb18475529&w=740";
  const [brandList, setBrandList] = useState([
    { name: "walmart", logo: logo },
    { name: "CVS", logo: logo },
    { name: "kroger", logo: logo },
    { name: "walgreen", logo: logo },
    { name: "Publix", logo: logo },
    { name: "Costco", logo: logo },
  ]);
  return (
    <div className="grid  justify-center text-white bg-[#000] py-3">
      <h2 className="text-center text-xl lg:font-thin sm:text-xl font-semibold uppercase my-4">
        {/* <img src="/SliderOne/img1." alt="" /> */}
        Also Available At
      </h2>
      <div className="grid grid-flow-row grid-cols-2 lg:grid-flow-col justify-start gap-4">
        {brandList.map((item) => (
          <div className="flex items-center justify-start col-span-1">
            <img
              src={item.logo}
              width={75}
              height={75}
              className="rounded-full invert-[100%]"
            />
            <span className=" text-sm md:text-xl font-semibold mx-3 uppercase text-gray-300">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-lg mt-5">+ 100K RETAILERS GLOBALLY</p>
    </div>
  );
};

export default HomeSection2;

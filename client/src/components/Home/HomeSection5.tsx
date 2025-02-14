import React from "react";

const HomeSection5 = () => {
  const logo =
    "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1739428645~exp=1739432245~hmac=70cae202adbde2afdf0fcbe16257931e6769243be689b457d2c84cdb18475529&w=740";

  return (
    <section className="bg-black flex justify-center text-white">
      <div className="w-3/5 grid grid-cols-10 py-10">
        <span className="col-span-3 flex justify-end">
          <img src={logo} alt="NO Image" className=" rounded-full" />
        </span>
        <div className="col-span-7 flex flex-col mx-4">
          <h1 className="uppercase font-bold text-2xl">TRY IT, RISK-FREE!</h1>
          <p className="text-xl">
            If you’re not satisfied with our product, simply contact us and
            we’ll give you a full, 100% hassle-free refund.
          </p>
          <button className="self-start ring-1 py-5 px-16 text-xl ring-white rounded my-5 hover:ring-0 hover:bg-blue-700 hover:text-white duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection5;

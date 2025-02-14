import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

const HomeSection3 = () => {
  const [paginationItem, setPaginationItem] = useState([
    { name: "product11", image: "/Gummies/11.jpg", link: "/product11" },
    { name: "product12", image: "/Gummies/12.jpg", link: "/product12" },
    { name: "product13", image: "/Gummies/13.jpg", link: "/product13" },
    { name: "product14", image: "/Gummies/14.jpg", link: "/product14" },
    { name: "product15", image: "/Gummies/15.jpg", link: "/product15" },
    { name: "product16", image: "/Gummies/16.jpg", link: "/product16" },
    { name: "product17", image: "/Gummies/17.jpg", link: "/product17" },
    { name: "product18", image: "/Gummies/18.jpg", link: "/product18" },
    { name: "product19", image: "/Gummies/19.jpg", link: "/product19" },
    { name: "product20", image: "/Gummies/20.jpg", link: "/product20" },
    { name: "product21", image: "/Gummies/21.jpg", link: "/product21" },
    { name: "product22", image: "/Gummies/22.jpg", link: "/product22" },
  ]);

  return (
    <div className=" h-96 bg-blue-100">
      <div className="mx-5">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="mySwiper w-full  min-h-40"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {paginationItem.map((item) => (
            <SwiperSlide
              key={item.name}
              className="relative cursor-pointer my-10"
            >
              <div className="relative group">
                <img
                  src={item.image}
                  alt="No Image Found"
                  className="rounded-lg transition-all duration-300 group-hover:brightness-50" // Adjust brightness on hover
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>{" "}
                {/*Black shadow*/}
                <h1 className="absolute top-3 left-[40%] capitalize text-[#fcee33] font-bold text-lg">
                  {item.name}
                </h1>
                <a
                  href={item.link}
                  className="flex items-center absolute bottom-5 left-[40%] text-yellow-50"
                >
                  <span>Discover</span> <FaArrowRight />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/*Custom styles*/}
        <style>
          {`
            .swiper-pagination {
              position: relative; /* Change to relative */
              margin-top: 40px; /* Adjust value as needed */
              bottom: 0;
            }

            .swiper-button-prev,
            .swiper-button-next {
              top: unset; /* Reset default top positioning */
              bottom: 0px; /* Align with bullets */
              margin-top: 0;
            }

            .swiper-button-prev {
              left: 30%; /* Adjust as needed */
            }

            .swiper-button-next {
              right: 30%; /* Adjust as needed */
            }
              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 20px; /* Adjust the size as needed */
              }

            .swiper-pagination-bullet {
              width: 10px; /* Adjust size as needed */
              height: 10px; /* Adjust size as needed */
              background-color: #000; /* Bullet color */
              opacity: 0.5; /* Adjust opacity */
            }
            /* Active bullet size and opacity */
            .swiper-pagination-bullet-active   {
              opacity: 1;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default HomeSection3;

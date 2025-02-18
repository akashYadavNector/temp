import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

const HomeSection3 = () => {
  const [paginationItem, setPaginationItem] = useState([
    { name: "product1", image: "/SliderOne/img1.png", link: "/product1" },
    { name: "product2", image: "/SliderOne/img2.png", link: "/product2" },
    { name: "product3", image: "/SliderOne/img3.png", link: "/product3" },
    { name: "product4", image: "/SliderOne/img4.png", link: "/product4" },
    { name: "product5", image: "/SliderOne/img5.png", link: "/product5" },
    { name: "product6", image: "/SliderOne/img6.png", link: "/product6" },
    { name: "product7", image: "/SliderOne/img7.jpg", link: "/product7" },
  ]);

  return (
    <div className=" h-[26rem] bg-gray-200 py-10">
      <div className="mx-5">
        <Swiper
          // spaceBetween={}
          slidesPerView={5}
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
              className="relative cursor-pointer"
            >
              <div className="relative group flex justify-center mx-0">
                <img
                  src={item.image}
                  alt="No Image Found"
                  className="rounded-lg transition-all duration-300 group-hover:brightness-50 w-56"
                />
                <h1 className="flex items-center capitalize absolute top-5 left-[36%] text-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.name}
                </h1>

                <a
                  href={item.link}
                  className="flex items-center absolute bottom-5 left-[35%] text-yellow-50"
                >
                  <span>Discover</span> <FaArrowRight />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>
          {`
            .swiper-pagination {
              position: relative; /* Change to relative */
              margin-top: 40px; /* Adjust value as needed */
              margin-bottom:20px;
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

import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const HomeSection4 = () => {
  const [reviews, setReviews] = useState([
    {
      text: "These Goli ACV Gummies really are the whole package. Vegan, gluten-free and tastes like apples. Best way to take apple cider vinegar.",
      stars: 5,
    },
    {
      text: "Goli Gummies are my favorite!! I recently introduced them to my friends and family, we're all officially hooked! Thanks for making it easier to include essential vitamins with such a great tasting product!",
      stars: 5,
    },
    {
      text: "I can now honestly say I look forward to my apple cider vinegar in the morning.",
      stars: 4,
    },
    {
      text: "I'm officially hooked! Honestly can't believe you've managed to make greens SOOOO DELICIOUS! I can't wait to take these daily! Game changer to my daily health routine.",
      stars: 5,
    },
    {
      text: "WOW. They taste amazing, the ingredients offer so many benefits and they're SUPER convenient. Love love love them!!",
      stars: 5,
    },
    {
      text: "Finally, I've found a product that helps me enjoy apple cider vinegar! These gummies are delicious and easy to take. Definitely recommend!",
      stars: 5,
    },
    {
      text: "These gummies are a game changer! I've been taking them for a few weeks now and I can already feel the difference. Plus, they taste amazing!",
      stars: 5,
    },
    {
      text: "I'm so glad I discovered these gummies. They're a delicious and convenient way to get my daily dose of apple cider vinegar. Highly recommend!",
      stars: 5,
    },
    {
      text: "I used to dread taking apple cider vinegar, but these gummies make it so easy! They taste great and I can definitely feel the benefits.",
      stars: 5,
    },
    {
      text: "I've tried other apple cider vinegar gummies before, but these are by far the best! They're soft, chewy, and have a great apple flavor.",
      stars: 5,
    },
    {
      text: "I was skeptical at first, but these gummies have completely won me over! They're a delicious and effective way to improve my health.",
      stars: 5,
    },
    {
      text: "These gummies are a lifesaver! I've been struggling to get my daily dose of apple cider vinegar, but these make it so easy and enjoyable.",
      stars: 5,
    },
    {
      text: "I'm so impressed with these gummies! They're a delicious and convenient way to get all the benefits of apple cider vinegar without the harsh taste.",
      stars: 5,
    },
    {
      text: "These gummies are the perfect way to start my day! They taste great, give me a boost of energy, and help me stay on track with my health goals.",
      stars: 5,
    },
    {
      text: "I've been taking these gummies for a few months now and I can definitely see a difference in my overall health. I highly recommend them!",
      stars: 5,
    },
    {
      text: "I'm obsessed with these gummies! They're a delicious and convenient way to get my daily dose of apple cider vinegar. I can't imagine my life without them!",
      stars: 5,
    },
    {
      text: "These gummies are a game changer! I've been taking them for a few weeks now and I can already feel the difference. Plus, they taste amazing!",
      stars: 5,
    },
    {
      text: "I'm so glad I discovered these gummies. They're a delicious and convenient way to get my daily dose of apple cider vinegar. Highly recommend!",
      stars: 5,
    },
    {
      text: "I used to dread taking apple cider vinegar, but these gummies make it so easy! They taste great and I can definitely feel the benefits.",
      stars: 5,
    },
    {
      text: "I've tried other apple cider vinegar gummies before, but these are by far the best! They're soft, chewy, and have a great apple flavor.",
      stars: 5,
    },
  ]);
  return (
    <div className=" grid grid-flow-row justify-center gap-9 bg-[#fff] py-8">
      <h1 className=" text-center text-sm lg:text-3xl font-semibold text-wrap w-[21rem] lg:w-auto">
        Over 1,000,000+ Reviews from Happy Customers.
      </h1>
      <div>
        <Swiper
          // spaceBetween={5}
          slidesPerView={1}
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          //   navigation={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper md:w-[40rem] text-sm lg:text-xl lg:w-full w-[21rem] max-w-6xl min-h-40 "
        >
          {reviews.map((item) => (
            <SwiperSlide>
              <div className="grid grid-rows-5 mx-4 my-6 md sm:gap-1 gap-2 shadow-lg shadow-gray-600 bg-gray-300 hover:bg-gray-400 duration-300 rounded-lg h-[250px] p-1 md:p-4 ">
                <p className=" row-span-4 flex justify-center items-center px-2 md:px-4 text-[#666363] text-center hover:text-white font-semibold duration-300">
                  {item.text}
                </p>
                <span className="flex row-span-1 justify-center">
                  {Array.from({ length: item.stars }).map(() => (
                    <IoIosStar color="yellow" fontSize={25} />
                  ))}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

export default HomeSection4;

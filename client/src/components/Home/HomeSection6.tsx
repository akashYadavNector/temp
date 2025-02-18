import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HomeSection6 = () => {
  const swiperRef = useRef(null);
  // const products = [
  //   {
  //     name: "Immune Support",
  //     image: "/products/Orange.png",
  //     color: "bg-orange-500",
  //     title: "Say Hello to Purna Gummies®",
  //     subtitle: "Our delicious Orange Gummies",
  //     description: "Support a Healthy Immune System",
  //     features: ["Overall Good Health", "Support A Healthy Immune System"],
  //     link: "/products/immune",
  //   },
  //   {
  //     name: "Supergreens",
  //     image: "/products/Superfruit.png",
  //     color: "bg-orange-300",
  //     title: "Say Hello to Purna Gummies®",
  //     subtitle: "Supergreens Gummies",
  //     description:
  //       "Our delicious Supergreens Gummies made with a unique blend of key vitamins, minerals and nutrients to help support:",
  //     features: [
  //       "Digestive Health",
  //       "Healthy Liver Function",
  //       // "Immune System Health",
  //       // "Antioxidant Support",
  //     ],
  //     link: "/products/supergreens",
  //   },
  //   {
  //     name: "Superfruits",
  //     image: "/products/Strawberry.png",
  //     color: "bg-orange-500",
  //     title: "Say Hello to Purna Gummies®",
  //     subtitle: "Superfruits Beauty Gummies",
  //     description:
  //       "Made with unique Blend of Bamboo Shoot Extract and Vitamins A, C, and E to help:",
  //     features: ["Promote Collagen Formation", "Restore Radiance"],
  //     link: "/products/superfruits",
  //   },
  //   {
  //     name: "Ashwagandha",
  //     image: "/products/Ashwagandha.png",
  //     color: "bg-purple-500",
  //     title: "Say Hello to Purna Gummies®",
  //     subtitle: "Ashwagandha Gummies",
  //     description: "Traditional herb for stress support and relaxation",
  //     features: ["Stress Relief", "Better Sleep", "Natural Wellness"],
  //     link: "/products/ashwagandha",
  //   },
  //   {
  //     name: "Caffeine",
  //     image: "/products/Caffine.png",
  //     color: "bg-yellow-500",
  //     title: "Energy Boost",
  //     subtitle: "Your Daily Caffeine Kick",
  //     description: "For enhanced focus and alertness",
  //     features: ["Increased Energy", "Improved Focus"],
  //     link: "/products/caffeine",
  //   },
  //   {
  //     name: "Cola",
  //     image: "/products/Cola (1).png",
  //     color: "bg-red-500",
  //     title: "Classic Cola Flavor",
  //     subtitle: "The taste you love",
  //     description: "Refreshing and invigorating",
  //     features: ["Classic Taste", "Refreshing Drink"],
  //     link: "/products/cola",
  //   },
  //   {
  //     name: "Cranberry",
  //     image: "/products/Cranberry SF.png",
  //     color: "bg-red-400",
  //     title: "Tangy Cranberry",
  //     subtitle: "Naturally delicious",
  //     description: "Packed with antioxidants",
  //     features: ["Antioxidant Rich", "Delicious Flavor"],
  //     link: "/products/cranberry",
  //   },
  //   {
  //     name: "Melatonin",
  //     image: "/products/Melatonin (1).png",
  //     color: "bg-blue-500",
  //     title: "Nighttime Support",
  //     subtitle: "For restful sleep",
  //     description: "Helps promote relaxation and sleep",
  //     features: ["Improved Sleep", "Relaxation"],
  //     link: "/products/melatonin",
  //   },
  //   {
  //     name: "Nicotine",
  //     image: "/products/Nicotine.png",
  //     color: "bg-gray-500",
  //     title: "Nicotine",
  //     subtitle: "For nicotine replacement therapy",
  //     description: "Helps reduce nicotine cravings",
  //     features: ["Reduce Cravings", "Replacement Therapy"],
  //     link: "/products/nicotine",
  //   },
  //   {
  //     name: "Orange",
  //     image: "/products/Orange.png",
  //     color: "bg-orange-500",
  //     title: "Zesty Orange Flavor",
  //     subtitle: "A burst of citrus",
  //     description: "Refreshing and tangy",
  //     features: ["Citrus Flavor", "Refreshing"],
  //     link: "/products/orange",
  //   },
  //   {
  //     name: "Strawberry",
  //     image: "/products/Strawberry.png",
  //     color: "bg-red-500",
  //     title: "Sweet Strawberry",
  //     subtitle: "A taste of summer",
  //     description: "Delicious and fruity",
  //     features: ["Fruity Flavor", "Delicious"],
  //     link: "/products/strawberry",
  //   },
  //   {
  //     name: "Superfruit",
  //     image: "/products/Superfruit.png",
  //     color: "bg-purple-500",
  //     title: "Exotic Superfruit Blend",
  //     subtitle: "A blend of antioxidants",
  //     description: "Rich in vitamins and nutrients",
  //     features: ["Antioxidant Blend", "Rich in Nutrients"],
  //     link: "/products/superfruit",
  //   },

  //   // Add more products based on your directory
  // ];

  const products = [
    {
      name: "Melatonin", // Changed based on screenshot
      image: "/SliderTwo/Artboard 5.jpg", // Keeping the same image path
      color: "bg-blue-500",
      title: "Say Hello to Goli® Dreamy Sleep Gummies",
      subtitle: "For restful sleep",
      description:
        "Made with Magnesium, Lemon Balm, Vitamin D, as well as the perfect dose of melatonin to help you:", // Changed description to include information from the image.
      features: ["Improved Sleep", "Relaxation"],
      link: "/products/melatonin",
    },
    {
      name: "Women's Multi",
      image: "/SliderTwo/Artboard 4.jpg",
      color: "bg-yellow-500",
      title: "Say Hello to Goli® Women's Complete Multi Gummies",
      subtitle: "Your Daily Caffeine Kick",
      description:
        "Complete with ALL 13 essential vitamins to help support: Healthy Hair, Skin & Nails",
      features: ["Increased Energy", "Improved Focus"],
      link: "/products/caffeine",
    },
    {
      name: "Immune Support",
      image: "/SliderTwo/Artboard 1.jpg",
      color: "bg-orange-500",
      title: "Say Hello to Purna Gummies®",
      subtitle: "Our delicious Orange Gummies",
      description:
        "Our Immune Support Gummies are packed with essential vitamins and antioxidants to help strengthen your body's natural defense system.",
      features: ["Overall Good Health", "Support A Healthy Immune System"],
      link: "/products/immune",
    },
    {
      name: "Supergreens",
      image: "/SliderTwo/Artboard 2.jpg",
      color: "bg-orange-300",
      title: "Say Hello to Purna Gummies®",
      subtitle: "Supergreens Gummies",
      description:
        "Our delicious Supergreens Gummies made with a unique blend of key vitamins, minerals and nutrients to help support:",
      features: ["Digestive Health", "Healthy Liver Function"],
      link: "/products/supergreens",
    },
    {
      name: "Ashwagandha",
      image: "/SliderTwo/Artboard 3.jpg",
      color: "bg-purple-500",
      title: "Say Hello to Purna Gummies®",
      subtitle: "Ashwagandha Gummies",
      description: "Traditional herb for stress support and relaxation",
      features: ["Stress Relief", "Better Sleep", "Natural Wellness"],
      link: "/products/ashwagandha",
    },
  ];
  useEffect(() => {
    // Go to the last slide on component mount
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(products.length - 1, 0, false); // The `false` argument prevents animation
    }
  }, [products.length]);
  return (
    <div className=" bg-[#e9e8e8] py-5">
      <Swiper
        ref={swiperRef}
        slidesPerView={2.1}
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={true} // loop mode enabled
        loopAdditionalSlides={1} // Duplicate the slides so that it will work on the first load
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper w-full min-h-[500px]"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="relative text-white">
              <h1 className=" absolute top-10 left-5 font-semibold text-sm">
                {product.title}
              </h1>
              <h5 className="absolute top-20 left-5 font-bold text-3xl ">
                {product.name}
              </h5>
              <h5 className="absolute top-32 left-5 font-bold text-sm ">
                {product.subtitle}
              </h5>
              <p className="absolute top-44 w-[16rem] text-sm font-semibold left-5">
                {product.description}
              </p>
              <button className=" absolute bottom-9 left-5 p-2 rounded-lg hover:bg-black duration-300 uppercase  bg-[#312e2e] text-white px-8 text-xl font-semibold">Exlore </button>
              <img
                src={`${product.image}`}
                alt="NO Image Found"
                className="w-full rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`
              .swiper-pagination {
                position: relative;
                margin-top: 2rem;
              }
    
              .swiper-button-prev,
              .swiper-button-next {
                color: #000;
                top: unset;
                bottom: 0;
              }
    
              .swiper-button-prev {
                left: 35%;
              }
    
              .swiper-button-next {
                right: 35%;
              }
    
              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 20px;
              }
    
              .swiper-pagination-bullet {
                width: 8px;
                height: 8px;
                background: #000;
                opacity: 0.5;
              }
    
              .swiper-pagination-bullet-active {
                opacity: 1;
              }
            `}
      </style>
    </div>
  );
};

export default HomeSection6;

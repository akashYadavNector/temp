import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HomeSection6 = () => {
  const products = [
    {
      name: "Immune Support",
      image: "/products/Orange.png",
      color: "bg-orange-500",
      title: "Say Hello to Purna Gummies®",
      subtitle: "Our delicious Orange Gummies",
      description: "Support a Healthy Immune System",
      features: ["Overall Good Health", "Support A Healthy Immune System"],
      link: "/products/immune",
    },
    {
      name: "Supergreens",
      image: "/products/Superfruit.png",
      color: "bg-orange-300",
      title: "Say Hello to Purna Gummies®",
      subtitle: "Supergreens Gummies",
      description:
        "Our delicious Supergreens Gummies made with a unique blend of key vitamins, minerals and nutrients to help support:",
      features: [
        "Digestive Health",
        "Healthy Liver Function",
        // "Immune System Health",
        // "Antioxidant Support",
      ],
      link: "/products/supergreens",
    },
    {
      name: "Superfruits",
      image: "/products/Strawberry.png",
      color: "bg-orange-500",
      title: "Say Hello to Purna Gummies®",
      subtitle: "Superfruits Beauty Gummies",
      description:
        "Made with unique Blend of Bamboo Shoot Extract and Vitamins A, C, and E to help:",
      features: ["Promote Collagen Formation", "Restore Radiance"],
      link: "/products/superfruits",
    },
    {
      name: "Ashwagandha",
      image: "/products/Ashwagandha.png",
      color: "bg-purple-500",
      title: "Say Hello to Purna Gummies®",
      subtitle: "Ashwagandha Gummies",
      description: "Traditional herb for stress support and relaxation",
      features: ["Stress Relief", "Better Sleep", "Natural Wellness"],
      link: "/products/ashwagandha",
    },
    {
      name: "Caffeine",
      image: "/products/Caffine.png",
      color: "bg-yellow-500",
      title: "Energy Boost",
      subtitle: "Your Daily Caffeine Kick",
      description: "For enhanced focus and alertness",
      features: ["Increased Energy", "Improved Focus"],
      link: "/products/caffeine",
    },
    {
      name: "Cola",
      image: "/products/Cola (1).png",
      color: "bg-red-500",
      title: "Classic Cola Flavor",
      subtitle: "The taste you love",
      description: "Refreshing and invigorating",
      features: ["Classic Taste", "Refreshing Drink"],
      link: "/products/cola",
    },
    {
      name: "Cranberry",
      image: "/products/Cranberry SF.png",
      color: "bg-red-400",
      title: "Tangy Cranberry",
      subtitle: "Naturally delicious",
      description: "Packed with antioxidants",
      features: ["Antioxidant Rich", "Delicious Flavor"],
      link: "/products/cranberry",
    },
    {
      name: "Melatonin",
      image: "/products/Melatonin (1).png",
      color: "bg-blue-500",
      title: "Nighttime Support",
      subtitle: "For restful sleep",
      description: "Helps promote relaxation and sleep",
      features: ["Improved Sleep", "Relaxation"],
      link: "/products/melatonin",
    },
    {
      name: "Nicotine",
      image: "/products/Nicotine.png",
      color: "bg-gray-500",
      title: "Nicotine",
      subtitle: "For nicotine replacement therapy",
      description: "Helps reduce nicotine cravings",
      features: ["Reduce Cravings", "Replacement Therapy"],
      link: "/products/nicotine",
    },
    {
      name: "Orange",
      image: "/products/Orange.png",
      color: "bg-orange-500",
      title: "Zesty Orange Flavor",
      subtitle: "A burst of citrus",
      description: "Refreshing and tangy",
      features: ["Citrus Flavor", "Refreshing"],
      link: "/products/orange",
    },
    {
      name: "Strawberry",
      image: "/products/Strawberry.png",
      color: "bg-red-500",
      title: "Sweet Strawberry",
      subtitle: "A taste of summer",
      description: "Delicious and fruity",
      features: ["Fruity Flavor", "Delicious"],
      link: "/products/strawberry",
    },
    {
      name: "Superfruit",
      image: "/products/Superfruit.png",
      color: "bg-purple-500",
      title: "Exotic Superfruit Blend",
      subtitle: "A blend of antioxidants",
      description: "Rich in vitamins and nutrients",
      features: ["Antioxidant Blend", "Rich in Nutrients"],
      link: "/products/superfruit",
    },

    // Add more products based on your directory
  ];

  return (
    <div className=" bg-[#b8bcea] py-5">
      <Swiper
        spaceBetween={5}
        slidesPerView={2.5}
        centeredSlides={true}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper w-full min-h-[500px]"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="p-4">
            <div
              className={`rounded-xl p-6 h-10/12 ${product.color} text-white relative overflow-hidden`}
            >
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4">
                  <p className="text-sm font-medium">{product.title}</p>
                  <h2 className="text-2xl font-bold">{product.subtitle}</h2>
                  <p className="text-sm">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              d="M20 6L9 17l-5-5"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="ring-1 ring-gray-400 hover:bg-black hover:text-white hover:ring-0  text-white px-6 py-2 rounded-full mt-4 hover:bg-opacity-80 transition-colors">
                    EXPLORE
                  </button>
                </div>
                <div className="relative flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              </div>
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

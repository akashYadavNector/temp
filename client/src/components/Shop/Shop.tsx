import React, { useState } from "react";
import Header from "../Home/HomeHeader";
import shopStyle from "./Shop.module.css";
import Footer from "../Home/Footer";

// Define TypeScript interfaces
interface ProductLogo {
  title: string;
  link: string;
}

interface ProductRate {
  [key: number]: number; // Pack size as key, price as value
}

interface Product {
  id: number;
  name: string;
  image: string;
  singleImage: string;
  icon: string;
  subscriptionRates: ProductRate;
  nonSubscriptionRates: ProductRate;
  regularPrices: ProductRate;
  discount: string;
}

interface ProductSelection {
  packSize: number;
  isSubscription: boolean;
}

interface ProductSelections {
  [key: number]: ProductSelection; // Product ID as key
}

const Shop: React.FC = () => {
  // Product logos for the navigation bar
  const productLogoList: ProductLogo[] = [
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

  // Products data with pricing information
  const products: Product[] = [
    {
      id: 1,
      name: "A Thing of Beauty",
      image: "Shop/ShopProducts/a thing of beauty.png",
      singleImage: "Single Products/0.1.png",
      icon: "/Shop/ProductIcons/a thing of beauty.png",
      subscriptionRates: { 1: 13.48, 3: 40.44, 5: 67.40 },
      nonSubscriptionRates: { 1: 14.98, 3: 44.94, 5: 74.90 },
      regularPrices: { 1: 19.99, 3: 59.97, 5: 99.95 },
      discount: "42%"
    },
    {
      id: 2,
      name: "Apple Cider Vinegar",
      image: "Shop/ShopProducts/ACV.png",
      singleImage: "Single Products/0.2.png",
      icon: "/Shop/ProductIcons/Acv.png",
      subscriptionRates: { 1: 17.39, 3: 52.17, 5: 86.95 },
      nonSubscriptionRates: { 1: 19.32, 3: 57.96, 5: 96.60 },
      regularPrices: { 1: 21.99, 3: 65.97, 5: 109.95 },
      discount: "10%"
    },
    {
      id: 3,
      name: "All That Glitters",
      image: "Shop/ShopProducts/all that glitters.png",
      singleImage: "Single Products/0.3.png",
      icon: "/Shop/ProductIcons/all that glitters.png",
      subscriptionRates: { 1: 15.30, 3: 45.90, 5: 76.50 },
      nonSubscriptionRates: { 1: 16.99, 3: 50.97, 5: 84.95 },
      regularPrices: { 1: 19.99, 3: 59.97, 5: 99.95 },
      discount: "25%"
    },
    {
      id: 4,
      name: "Ashwagandha",
      image: "Shop/ShopProducts/ashwangadha.png",
      singleImage: "Single Products/0.4.png",
      icon: "/Shop/ProductIcons/ashwangandha.png",
      subscriptionRates: { 1: 15.30, 3: 45.90, 5: 76.50 },
      nonSubscriptionRates: { 1: 16.99, 3: 50.97, 5: 84.95 },
      regularPrices: { 1: 19.99, 3: 59.97, 5: 99.95 },
      discount: "42%"
    },
    {
      id: 5,
      name: "Bright as Day",
      image: "Shop/ShopProducts/bright as day.png",
      singleImage: "Single Products/0.6.png",
      icon: "/Shop/ProductIcons/bright as day.png",
      subscriptionRates: { 1: 13.48, 3: 40.44, 5: 67.40 },
      nonSubscriptionRates: { 1: 14.98, 3: 44.94, 5: 74.90 },
      regularPrices: { 1: 19.99, 3: 59.97, 5: 99.95 },
      discount: "25%"
    },
    {
      id: 6,
      name: "Cranberry",
      image: "Shop/ShopProducts/excalibur.png",
      singleImage: "Single Products/0.7.png",
      icon: "/Shop/ProductIcons/cranberry.png",
      subscriptionRates: { 1: 17.39, 3: 52.17, 5: 86.95 },
      nonSubscriptionRates: { 1: 19.32, 3: 57.96, 5: 96.60 },
      regularPrices: { 1: 21.99, 3: 65.97, 5: 109.95 },
      discount: "10%"
    },
    {
      id: 7,
      name: "Good Morning Sunshine",
      image: "Shop/ShopProducts/good morning sunshine.png",
      singleImage: "Single Products/0.8.png",
      icon: "/Shop/ProductIcons/good morning sunshine.png",
      subscriptionRates: { 1: 15.30, 3: 45.90, 5: 76.50 },
      nonSubscriptionRates: { 1: 16.99, 3: 50.97, 5: 84.95 },
      regularPrices: { 1: 19.99, 3: 59.97, 5: 99.95 },
      discount: "25%"
    },
    {
      id: 8,
      name: "Pretty Women",
      image: "Shop/ShopProducts/pretty woman.png",
      singleImage: "Single Products/0.9.png",
      icon: "/Shop/ProductIcons/pretty women.png",
      subscriptionRates: { 1: 13.48, 3: 40.44, 5: 67.40 },
      nonSubscriptionRates: { 1: 14.98, 3: 44.94, 5: 74.90 },
      regularPrices: { 1: 19.99, 3: 59.97, 5: 99.95 },
      discount: "42%"
    },
    {
      id: 9,
      name: "Sweet Dreams",
      image: "Shop/ShopProducts/sweet dreams.png",
      singleImage: "Single Products/0.10.png",
      icon: "/Shop/ProductIcons/sweet dreamzz.png",
      subscriptionRates: { 1: 17.39, 3: 52.17, 5: 86.95 },
      nonSubscriptionRates: { 1: 19.32, 3: 57.96, 5: 96.60 },
      regularPrices: { 1: 21.99, 3: 65.97, 5: 109.95 },
      discount: "10%"
    },
  ];

  // State to track selected options for each product
  const [productSelections, setProductSelections] = useState<ProductSelections>(
    products.reduce((acc, product) => {
      acc[product.id] = {
        packSize: 1,
        isSubscription: true
      };
      return acc;
    }, {} as ProductSelections)
  );

  // Handle pack size selection
  const handlePackSelection = (productId: number, packSize: number): void => {
    setProductSelections(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        packSize
      }
    }));
  };

  // Handle subscription toggle
  const handleSubscriptionToggle = (productId: number, isSubscription: boolean): void => {
    setProductSelections(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        isSubscription
      }
    }));
  };

  // Filter products by category when clicking on product logo
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.name.toLowerCase().includes(selectedCategory.toLowerCase()))
    : products;

  // Handle category selection
  const handleCategoryClick = (category: string): void => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  // Calculate the current price for a product based on selections
  const getCurrentPrice = (product: Product, selections: ProductSelections): number => {
    const { packSize, isSubscription } = selections[product.id];
    const priceMap = isSubscription ? product.subscriptionRates : product.nonSubscriptionRates;
    return priceMap[packSize];
  };

  // Format price to always show 2 decimal places
  const formatPrice = (price: number): string => {
    return price.toFixed(2);
  };

  return (
    <>
      <Header />
      <div>
        <div
          className={`text-4xl flex mx-4 md:mx-14 bg-white my-3 rounded-lg ${shopStyle.scrollableContainer}`}
        >
          {productLogoList.map((item, index) => (
            <div
              key={index}
              className="mt-16 flex flex-col items-start cursor-pointer relative"
              onClick={() => handleCategoryClick(products[index % products.length].name)}
            >
              <img
                src={item.link}
                alt="No image found"
                className="min-w-40 lg:min-w-32"
              />
              <h2 
                className={`text-center text-sm font-semibold w-full absolute bottom-4 hover:text-blue-500 duration-300 ${
                  selectedCategory === products[index % products.length].name ? "text-blue-500" : "text-black"
                }`}
              >
                {item.title}
              </h2>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 px-4 md:mx-32 lg:px-12 2xl:mx-56">
          {filteredProducts.map((product) => {
            const selections = productSelections[product.id];
            const currentPrice = getCurrentPrice(product, productSelections);
            const totalPrice = currentPrice;
            const regularPrice = product.regularPrices[selections.packSize];
            const packSize = selections.packSize;

            return (
              <div key={product.id} className="bg-blue-200 rounded-lg p-4 flex flex-col">
                {/* Product Name */}
                <span className="text-lg font-semibold mb-2 text-center">
                  {product.name}
                </span>

                {/* Product Content Container */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Image Container */}
                  <div className="flex justify-center items-start bg-[#f8f7f7] rounded-xl relative">
                    <img
                      src={packSize === 1 ? product.singleImage : product.image}
                      alt={product.name}
                      width={200}
                      className="object-contain w-full max-h-[250px] md:max-h-[250px]"
                    />
                    {selections.isSubscription && (
                      <img
                        src="https://goli.com/cdn/shop/files/3_pack_42OFF_200x200.png?v=1737750815"
                        alt="Discount Badge"
                        className="w-14 absolute top-[-10px] left-[-10px]"
                      />
                    )}
                  </div>

                  {/* Pricing Options Container */}
                  <div className="flex flex-col gap-2">
                    {/* Subscribe & Save Option */}
                    <div 
                      className={`${
                        selections.isSubscription ? "bg-blue-500 text-white" : "bg-white"
                      } rounded-xl p-2 cursor-pointer border border-gray-400 hover:shadow-md transition-shadow`}
                      onClick={() => handleSubscriptionToggle(product.id, true)}
                    >
                      <div className="font-bold text-[11px] md:text-base">
                        Subscribe & Save
                      </div>
                      <div className="flex justify-between text-lg md:text-3xl font-bold sm:mt-1 items-baseline">
                        ${formatPrice(product.subscriptionRates[packSize] / packSize)}
                        <span className="text-sm text-blue-400">each</span>
                      </div>
                      <p className="flex justify-between text-[10px] sm:mt-1">
                        Total: ${formatPrice(product.subscriptionRates[packSize])}
                        <span className="line-through sm:ml-3 text-blue-400">
                          ${formatPrice(regularPrice)}
                        </span>
                      </p>
                    </div>

                    {/* One-time Purchase Option */}
                    <div 
                      className={`${
                        !selections.isSubscription ? "bg-blue-500 text-white" : "bg-white"
                      } rounded-xl p-3 cursor-pointer border border-gray-400 hover:shadow-md transition-shadow`}
                      onClick={() => handleSubscriptionToggle(product.id, false)}
                    >
                      <div className="font-bold text-[10px] md:text-base">
                        One-time purchase
                      </div>
                      <div className="flex justify-between text-lg md:text-3xl font-bold sm:mt-1">
                        ${formatPrice(product.nonSubscriptionRates[packSize] / packSize)}
                        <span className="text-sm text-blue-400">each</span>
                      </div>
                      <p className="flex justify-between text-[10px] sm:mt-1">
                        Total: ${formatPrice(product.nonSubscriptionRates[packSize])}
                        <span className="line-through ml-3 text-blue-400">
                          ${formatPrice(regularPrice)}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pack Selection */}
                <div className="flex justify-center gap-2 mt-6 text-lg">
                  <button 
                    className={`${
                      packSize === 1 ? "bg-blue-700 text-white" : "bg-white text-black"
                    } p-4 rounded-full text-base font-semibold xl:px-8`}
                    onClick={() => handlePackSelection(product.id, 1)}
                  >
                    1-Pack
                  </button>
                  <button 
                    className={`${
                      packSize === 3 ? "bg-blue-700 text-white" : "bg-white text-black"
                    } p-4 rounded-full text-base font-semibold xl:px-8`}
                    onClick={() => handlePackSelection(product.id, 3)}
                  >
                    3-Pack
                  </button>
                  <button 
                    className={`${
                      packSize === 5 ? "bg-blue-700 text-white" : "bg-white text-black"
                    } p-4 rounded-full text-base font-semibold xl:px-8`}
                    onClick={() => handlePackSelection(product.id, 5)}
                  >
                    5-Pack
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-6 py-3 px-6 rounded-lg uppercase bg-blue-600 text-white text-sm md:text-base font-semibold hover:bg-blue-700 transition-colors">
                  add to cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
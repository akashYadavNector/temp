import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { FaCartShopping } from "react-icons/fa6";
import Modal from "../Utils/Modal";
// import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon
import { FaCartShopping, FaChevronDown, FaChevronRight } from "react-icons/fa6";
import AddCart from "../Utils/AddCart";
import Login from "../Forms/Login";
import Register from "../Forms/Register";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(true);
  const productCategories = [
    {
      name: "Multivitamin",
      subcategories: [
        {
          name: "Strawberry flavor",
          link: "/products/multivitamin-strawberry",
        },
        { name: "Mango flavor", link: "/products/multivitamin-mango" },
        {
          name: "Kids Multivitamin - 3 flavors",
          link: "/products/kids-multivitamin",
        },
      ],
    },
    {
      name: "Immunity Vitamin C",
      subcategories: [
        { name: "Orange flavor", link: "/products/immunity-orange" },
        { name: "Lemon flavor", link: "/products/immunity-lemon" },
      ],
    },
    {
      name: "Hair Vitamin",
      subcategories: [
        { name: "Cranberry flavor", link: "/products/hair-cranberry" },
        { name: "Blueberry flavor", link: "/products/hair-blueberry" },
      ],
    },
    {
      name: "SF Hair Vitamin",
      subcategories: [
        { name: "Cranberry flavor", link: "/products/sf-hair-cranberry" },
        { name: "Blueberry flavor", link: "/products/sf-hair-blueberry" },
      ],
    },
    {
      name: "Weight loss Vitamin - Apple Cider Vinegar",
      subcategories: [
        { name: "Red Apple flavor", link: "/products/weight-loss-red-apple" },
      ],
    },
    {
      name: "Superfruit Collagen Builder",
      subcategories: [
        { name: "Mixed Fruit flavor", link: "/products/collagen-mixed-fruit" },
      ],
    },
    {
      name: "Ashwagandha",
      subcategories: [
        { name: "Wild berry flavor", link: "/products/ashwagandha-wild-berry" },
      ],
    },
    {
      name: "Prenatal",
      subcategories: [
        { name: "Cranberry flavor", link: "/products/prenatal-cranberry" },
      ],
    },
    {
      name: "Melatonin",
      subcategories: [
        { name: "Wild berry flavor", link: "/products/melatonin-wild-berry" },
      ],
    },
    {
      name: "Glutathione",
      subcategories: [
        { name: "Cola flavor", link: "/products/glutathione-cola" },
      ],
    },
    {
      name: "Vitamin E",
      subcategories: [
        { name: "Pineapple flavor", link: "/products/vitamin-e-pineapple" },
      ],
    },
    {
      name: "Caffeine",
      subcategories: [
        { name: "Orange flavor", link: "/products/caffeine-orange" },
      ],
    },
    {
      name: "Nicotine",
      subcategories: [
        { name: "Spearmint flavor", link: "/products/nicotine-spearmint" },
      ],
    },
    {
      name: "Iron for Kids",
      link: "/products/iron-kids",
    },
    {
      name: "Calcium for Kids",
      link: "/products/calcium-kids",
    },
    {
      name: "Omega for Kids",
      link: "/products/omega-kids",
    },
    {
      name: "Sampurna - Hyaluronic Acid Gummies",
      subcategories: [
        {
          name: "Black Currant",
          link: "/products/hyaluronic-acid-black-currant",
        },
      ],
    },
    {
      name: "Sampurna - Glycolic Acid Gummies",
      subcategories: [
        { name: "Tamarind", link: "/products/glycolic-acid-tamarind" },
      ],
    },
    {
      name: "Sampurna - Rosemary Oil Gummies",
      subcategories: [{ name: "Rose", link: "/products/rosemary-oil-rose" }],
    },
  ];

  const handleMouseEnterCategory = (category) => {
    if (category.subcategories) {
      setActiveCategory(category.name);
    } else {
      setActiveCategory(null); // Clear active category if no subcategories
    }
  };
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    } else {
      window.location.href = "/"; // Navigate to home if not already there
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed w-full z-50 p-3 grid grid-cols-3 
         ring-gray-400 shadow-gray-400
        transition-all duration-500
        ${
          isScrolled
            ? "bg-white/60 hover:bg-white rounded-b-3xl"
            : "bg-white border-b border-1"
        }
      `}
    >
      {/* <h1 className="text-2xl"> */}
      <Link to={"/"} onClick={handleClick}>
        <img
          src="/logo/purnalogo.png"
          width={155}
          height={155}
          alt="Purna Logo"
        />
      </Link>
      {/* </h1> */}
      <nav className="grid grid-cols-4 items-center">
        <div
          className="relative group"
          onMouseLeave={() => {
            setShowProductsDropdown(false);
            setActiveCategory(null);
          }}
        >
          <button
            className="capitalize text-lg hover:font-semibold text-center p-2 rounded-lg duration-300 flex items-center justify-center gap-1"
            onMouseEnter={() => setShowProductsDropdown(true)}
          >
            Products <FaChevronDown size={12} />
          </button>

          {showProductsDropdown && (
            <>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[250px] max-h-[60vh] overflow-y-auto">
                <div className="relative">
                  {productCategories.map((category) => (
                    <div
                      key={category.name}
                      className="relative"
                      onMouseEnter={() => handleMouseEnterCategory(category)}
                    >
                      {category.subcategories ? (
                        <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <span>{category.name}</span>
                          <FaChevronRight size={12} />
                        </div>
                      ) : (
                        <Link
                          to={category.link}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {category.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/*  Render Subcategories HERE, outside the scrolling div */}
              {productCategories.map(
                (category) =>
                  category.subcategories &&
                  activeCategory === category.name && (
                    <div
                      key={category.name + "-subcategories"} // Add unique key
                      className="absolute ml-[250px] bg-[#fff] font-semibold   shadow-lg rounded-lg py-2 min-w-[200px] z-10"
                      style={{
                        top: () => {
                          const categoryElement = document.querySelector(
                            `[data-category-name="${category.name}"]`
                          );
                          return categoryElement
                            ? categoryElement.offsetTop + "px"
                            : "0px";
                        },
                      }}
                    >
                      {category.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory.name}
                          to={subcategory.link}
                          className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                        >
                          {subcategory.name}
                        </Link>
                      ))}
                    </div>
                  )
              )}
            </>
          )}
        </div>
        <Link
          to={"/shop"}
          className=" hover:text-blue-500  text-center hover:font-semibold"
        >
          Shop
        </Link>
        <Link
          to={"/aboutus"}
          className=" hover:text-blue-500  text-center hover:font-semibold"
        >
          About Us
        </Link>
        <Link
          to={"/FAQ"}
          className=" hover:text-blue-500  text-center hover:font-semibold"
        >
          FAQ
        </Link>
      </nav>
      <div className="flex justify-end items-center">
        <button
          className="mx-2 px-8 text-gray-900 ring-gray-500 hover:ring-blue-700 p-2 ring-1 rounded-lg font-semibold hover:bg-blue-700 hover:text-white duration-500"
          onClick={() => setShowLoginModal(true)}
        >
          Login
        </button>
        <FaCartShopping
          className="mx-2 cursor-pointer"
          size={30}
          onClick={() => setShowCart(true)}
        />
      </div>
      {showCart && <AddCart setShowCart={setShowCart} isOpen={showCart} />}
      {showLoginModal && (
        <Modal setModalClose={setShowLoginModal}>
          {showRegisterForm ? (
            <Register setShowRegisterForm={setShowRegisterForm} />
          ) : (
            <Login setShowRegisterForm={setShowRegisterForm} />
          )}
        </Modal>
      )}
    </header>
  );
};

export default Header;

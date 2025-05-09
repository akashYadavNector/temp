import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { FaCartShopping } from "react-icons/fa6";
import Modal from "../Utils/Modal";
// import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon
import { FaCartShopping, FaChevronDown, FaChevronRight } from "react-icons/fa6";
import AddCart from "../Utils/AddCart";
import Login from "../Forms/Login";
import Register from "../Forms/Register";
import HomeHeaderResponsive from "./HomeHeaderResponsive";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showProductsDropdown, setShowProductsDropdown] =
    useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(true);
  const [showAboutDropDown, setShowAboutDropdown] = useState(false);
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

  const handleMouseEnterCategory = (category: any) => {
    if (category.subcategories) {
      setActiveCategory(category.name);
    } else {
      setActiveCategory(null); // Clear active category if no subcategories
    }
  };
  const handleClick = (event: any) => {
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
    <>
      <header
        className={`fixed w-full hidden z-50 p-3 md:flex justify-between ring-gray-400 shadow-gray-400 transition-all duration-500 ${
          isScrolled
            ? "bg-white/60 hover:bg-white rounded-b-3xl"
            : "bg-white border-b border-1"
        }`}
      >
        {/* Logo */}
        <Link to={"/"} onClick={handleClick}>
          <img
            src="/logo/purnalogo.png"
            width={155}
            height={155}
            alt="Purna Logo"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex justify-center items-center ">
          <div
            className="relative group"
            onMouseLeave={() => {
              setShowProductsDropdown(false);
              setActiveCategory(null);
            }}
          >
            <button
              className="capitalize text-lg hover:font-semibold text-center p-2 rounded-lg mx-2 duration-300 flex items-center justify-center gap-1"
              onMouseEnter={() => setShowProductsDropdown(true)}
            >
              Products <FaChevronDown className="ml-2" size={12} />
            </button>
            {showProductsDropdown && (
              <>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[250px] max-h-[60vh] overflow-y-auto your-scrollable-container">
                  <div className="relative">
                    {productCategories.map((category) => (
                      <div
                        key={category.name}
                        data-category-name={category.name} // Add this attribute
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
                {/* Render Subcategories HERE */}
                {productCategories.map(
                  (category) =>
                    category.subcategories &&
                    activeCategory === category.name && (
                      <div
                        key={category.name + "-subcategories"}
                        className="absolute ml-[250px] bg-[#fff] mt-12 font-semibold shadow-lg rounded-lg py-2 min-w-[200px] z-10"
                        style={{
                          top: `${
                            (document.querySelector(
                              `[data-category-name="${category.name}"]`
                            )?.offsetTop || 0) -
                            (document.querySelector(
                              ".your-scrollable-container"
                            )?.scrollTop || 0)
                          }px`,
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
            className="hover:text-blue-500 text-center hover:font-semibold mx-5"
          >
            Shop
          </Link>
          <Link
            to={"/FAQ"}
            className="hover:text-blue-500 text-center hover:font-semibold mx-5"
          >
            FAQ
          </Link>
          <div
            className="relative"
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            <button
              className="capitalize text-lg hover:font-semibold text-center p-2 rounded-lg mx-2 duration-300 flex items-center justify-center gap-1"
              onMouseEnter={() => setShowAboutDropdown(true)}
            >
              About Us <FaChevronDown className="ml-2" size={12} />
            </button>
            {showAboutDropDown && (
              <div className="absolute bg-white min-w-[250px] border-2">
                <div className=" border p-2">
                  <Link to={"our-Story"}>Our Story</Link>
                </div>
                <div className="p-2">
                  <Link to={"our-Food"}>Purna for Food</Link>
                </div>
                <div className="p-2">
                  <Link to={"inside-gummy"}>Inside Gummies</Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Login & Cart */}
        <div className="flex justify-start md:justify-center lg:justify-end items-center w-fit">
          {" "}
          {/* or use inline-block */}
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
      {/* responsive header for mobile view  */}
      <HomeHeaderResponsive setShowCart={setShowCart} />
    </>
  );
};

export default Header;

{
  /* <select>
            <option value="">About Us</option>
            <option value="">
              <Link to={"about-us"}>Our Story</Link>
            </option>
            <option value="">
              <Link to={"purna-gummies-food"}>Purna Gummies Food</Link>
            </option>
            <option value="">
              <Link to={"inside-gummy"}>Inside Gummy</Link>
            </option>
          </select> */
}
{
  /* <Link
            to={"/aboutus"}
            className="hover:text-blue-500 text-center hover:font-semibold mx-5 text-wrap"
          >
            About Us
          </Link> */
}

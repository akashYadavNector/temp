import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Keep well with Goli® */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-center md:text-start">
              Keep well with Purna Gummies®
            </h3>
            <p className="text-sm mb-2 text-center md:text-start">
              Subscribe to our newsletter for exclusive offers!
            </p>
            <div className="flex justify-center md:justify-start ">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-800 text-white rounded-l px-4 py-2 w-4/6 focus:outline-none"
              />
              <button className="bg-white text-black rounded-r px-2 py-2 w-1/6 flex justify-center items-center">
                <FaArrowRight size={22} />
              </button>
            </div>
            <div className="mt-4 flex flex-col items-center md:items-start">
              <h4 className="font-semibold">FOLLOW US:</h4>
              <div className="flex space-x-4 mt-2">
                <FaFacebook className="text-xl hover:text-gray-300 cursor-pointer" />
                <FaInstagram className="text-xl hover:text-gray-300 cursor-pointer" />
                <FaTwitter className="text-xl hover:text-gray-300 cursor-pointer" />
                <FaYoutube className="text-xl hover:text-gray-300 cursor-pointer" />
                <FaPinterest className="text-xl hover:text-gray-300 cursor-pointer" />
                <FaTiktok className="text-xl hover:text-gray-300 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Become an Ambassador / About Goli® */}
          <div>
            <h3 className="font-bold text-lg mb-4"></h3>
            <ul className="flex flex-col md:items-start items-center md:normal-case">
              <li className="mb-2 hover:text-gray-300 cursor-pointer">
                Become an Ambassador
              </li>
              <li className="mb-2 hover:text-gray-300 cursor-pointer">
                About Purna Gummies®
              </li>
              <li className="mb-2 hover:text-gray-300 cursor-pointer">FAQ</li>
              <li className="mb-2 hover:text-gray-300 cursor-pointer">
                Wholesale
              </li>
              <li className="mb-2 hover:text-gray-300 cursor-pointer">
                Manage my Subscription
              </li>
              <li className="mb-2 hover:text-gray-300 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Goli Logo / Certified B Corporation */}
          <div className="flex flex-col items-start md:items-end">
            <img
              src="/logo/purnalogo.png"
              alt="Purna Gummies Nutrition"
              className="h-18 mb-14"
            />
            {/* <div className="flex flex-col items-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0263/4441/files/b-corp-logo_500x_crop_center.png?v=1612378831" // Replace with actual B Corp logo URL
                alt="Certified B Corporation"
                className="h-16 mb-2"
              />
              <p className="text-xs">Corporation</p>
            </div> */}
          </div>
        </div>

        {/* Terms & Conditions / Privacy Policy */}
        <div className="flex justify-center space-x-8 mt-8 text-sm">
          <a href="#" className="hover:text-gray-300">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Purna Gummies Rewards Gift Cards
          </a>
          <a href="#" className="hover:text-gray-300">
            Digital Accessibility Statement
          </a>
        </div>
        <div className="mt-8 text-xs text-center">
          <p>
            *These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure or prevent any disease. The views and nutritional advice
            expressed by Purna Gummies® Nutrition are not intended for the
            purpose of providing medical advice. Please always consult your
            health care provider if you are taking any medications or have any
            medical conditions. Individual results may vary.
          </p>
          <p className="mt-2">
            *Vitamins B6, B9 & B12 help convert food into cellular energy*
          </p>
          <p className="mt-2">
            *Source: SPINS MULO (powered by IRI) 52 weeks ending 01/01/2023.
          </p>
          <p className="mt-2">
            *Free shipping on subscription orders and US domestic orders over
            $20
          </p>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2025 Purna Gummies Nutrition Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

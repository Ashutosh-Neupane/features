import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-2 max-w-[7.6rem] max-h-[3.6rem]"><img src="./Logo.png" alt="Lungta logo" /></h3>
          <p className="text-sm">
            Empowering businesses through innovative software solutions.
          </p>
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2 inline-block border-white pb-1">
              Business Partner
              <hr className="ml-2" />
            </h4>
            <div>
              <div className="w-24 h-8items-center justify-center text-xs rounded mt-2 inline">
                <img src="./codeHimalayas.png" alt="codeHimalaya" className="inline" />
              </div>
              <h3 className=" ml-3 inline">Code Himalaya</h3>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-2 inline-block border-white pb-1">
            Quick Links
            <hr className="ml-2" />
          </h3>
          <ul className="text-sm space-y-3">
            <li>
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-2 inline-block border-white pb-1">
            Contact
            <hr className="ml-2" />
          </h3>
          <div className="text-sm space-y-3 mt-1">
            <p>Email: info@lungta.com</p>
            <p>Phone: +977-1234567890</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-2 inline-block border-white pb-1">
            Follow Us
            <hr className="ml-2" />
          </h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="bg-white p-3 rounded-full text-[#1E3A8A] hover:text-white hover:bg-blue-500 text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white p-3 rounded-full text-[#1E3A8A] hover:text-white hover:bg-red-500 text-2xl"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="bg-white p-3 rounded-full text-[#1E3A8A] hover:text-white hover:bg-pink-500 text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 ml-6 pt-8 border-t-2 border-gray-600"></div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Lungta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

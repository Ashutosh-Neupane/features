// components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-white h-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        <h1 className="text-lg font-bold "><img src="./lungtaHeader.png" alt="Lungta logo" /></h1>
        <nav className="space-x-4 hidden md:flex text-sm">
          {/* All navigation links are now font-semibold */}
          <a href="#" className="hover:text-blue-600 font-semibold">Home</a>
          <a href="#" className="hover:text-blue-600 font-semibold">How it works</a>
          <a href="#" className="hover:text-blue-600 font-semibold">About Us</a>
          {/* Features link with the small dot */}
          <a href="#" className="text-blue-600 font-semibold relative">
            Features
            <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
          </a>
          <a href="#" className="hover:text-blue-600 font-semibold">Pricing</a>
          <a href="#" className="hover:text-blue-600 font-semibold">Contact</a>
        </nav>
        <div className="space-x-2 hidden md:flex text-sm">
          <button className="bg-blue-600 text-white px-3 py-1 rounded">Get Started</button>
          <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded">Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
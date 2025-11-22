import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          <a href="/" className="hover:text-blue-600">
            Mocco Mart
            <span className="text-xl font-bold text-red-400 rounded-2xl">
              .
            </span>
          </a>
        </h1>

        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
          <a href="/contact-us" className="hover:text-blue-600">
            Contact us
          </a>
          <a href="/about-us" className="hover:text-blue-600">
            About us
          </a>
          <a href="/signup" className="hover:text-blue-600">
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

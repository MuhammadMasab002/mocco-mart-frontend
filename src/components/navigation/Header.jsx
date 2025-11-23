import React, { useState } from "react";
import CustomFormInput from "../common/inputs/CustomFormInput";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
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

        <nav className="space-x-6 text-gray-700 font-medium hidden lg:block">
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
        <div className="flex justify-between items-center text-black">
          <div className="hidden md:block">
            <CustomFormInput
              placeholder="What are you looking for?"
              name="search"
              value={search}
              icon={true}
              onChange={handleChange}
              required
            />
          </div>
          <SearchIcon className="text-gray-500 text-xl md:invisible" />
          <div className="flex justify-between items-center gap-3 pl-4">
            <FavoriteBorderIcon
              className="rounded-full bg-gray-100 hover:text-red-600 cursor-pointer p-1"
              fontSize="large"
            />
            <ShoppingCartIcon
              className="rounded-full bg-gray-100 hover:text-red-600 cursor-pointer p-1"
              fontSize="large"
            />
            <PersonOutlineIcon
              className="rounded-full bg-gray-100 hover:text-red-600 cursor-pointer p-1"
              fontSize="large"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { ChevronRight } from "@mui/icons-material";

const CategoryMenu = ({ categories = [] }) => {
  return (
    <div className="hidden lg:flex flex-col w-60 border-r pr-4">
      {categories.map((item, index) => (
        <button
          key={index}
          className="flex items-center justify-between py-2 cursor-pointer text-gray-700 hover:text-red-500 transition"
        >
          {item}
          <ChevronRight fontSize="small" />
        </button>
      ))}
    </div>
  );
};

export default CategoryMenu;

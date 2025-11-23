import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import StarIcon from "@mui/icons-material/Star";
import CustomButton from "../CustomButton";

const ProductCard = ({
  title,
  image,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
  onAddToCart,
  onClick,
  isWishlisted = false,
  toggleWishlist,
}) => {
  return (
    <div
      className="relative bg-white shadow-md rounded-lg overflow-hidden p-3 cursor-pointer group"
      onClick={onClick}
    >
      {/* Discount Badge */}
      {discount && (
        <span className="absolute top-3 left-3 z-20 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          -{discount}%
        </span>
      )}

      {/* Wishlist + View Icons */}
      <div className="absolute right-3 top-3 flex flex-col gap-2 z-10">
        {/* Wishlist */}
        <button
          className="bg-white w-8 h-8 rounded-full shadow flex items-center justify-center hover:bg-gray-200"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist();
          }}
        >
          {isWishlisted ? (
            <FavoriteIcon className="text-red-500 text-lg" />
          ) : (
            <FavoriteBorderIcon className="text-gray-500 text-lg" />
          )}
        </button>

        {/* View */}
        <button
          className="bg-white w-8 h-8 rounded-full shadow flex items-center justify-center hover:bg-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          <RemoveRedEyeIcon className="text-gray-700 text-lg" />
        </button>
      </div>

      {/* Product Image */}
      <div className="relative w-full h-60 flex justify-center items-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        {/* Add to Cart (Hover Button) */}
        <div
          className="absolute bottom-0 left-0 right-0 w-ful text-white text-center text-sm opacity-0 
        group-hover:opacity-100 transition-opacity duration-300"
        >
          <CustomButton
            buttonText="Add to Cart"
            variant="dark"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-red-500 font-bold">${price}</span>
          <span className="text-gray-400 line-through text-sm">
            ${oldPrice}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`${
                i < rating ? "text-yellow-400" : "text-gray-300"
              } text-sm`}
            />
          ))}
          <span className="text-gray-500 text-sm ml-1">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// FlashSales.jsx
import React from "react";
import ProductCard from "../common/products/ProductCard";
import CustomButton from "../common/CustomButton";

const BestSelling = ({ sampleProducts }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">
            Best Selling Products
          </h3>
        </div>

        <div className="flex justify-center items-center gap-4">
          <CustomButton
            buttonText={"View all"}
            variant={"textDanger"}
            className="hidden md:block"
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {sampleProducts.map((p) => (
          <ProductCard
            key={p.id}
            {...p}
            toggleWishlist={() => alert("Addedd to wishlist")}
            onAddToCart={() => alert("Added to cart")}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;

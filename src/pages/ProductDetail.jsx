import React, { useState } from "react";
import ProductDetailInfo from "../components/common/products/ProductDetailInfo";

export const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full text-black max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* LEFT: Product Image */}
      <div className="w-full flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1656944227421-d0e8de487d9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="product"
          className="w-full max-w-md rounded shadow"
        />
      </div>

      {/* RIGHT: Details Info */}
      <ProductDetailInfo
        title="Havic HV G-92 Gamepad"
        // rating={4}
        reviews={150}
        description={
          "All black Nike sneakers, get a free legit check in the SOLESTAGE app now. "
        }
        price={192.0}
        colours={["bg-gray-900", "bg-red-500"]}
        sizes={["XS", "S", "M", "L", "XL"]}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
};

export default ProductDetail;

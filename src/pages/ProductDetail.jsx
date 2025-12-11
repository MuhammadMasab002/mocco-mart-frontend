import React, { useState } from "react";
import ProductDetailInfo from "../components/common/products/ProductDetailInfo";
import { useProductDetailsQuery } from "../services/api";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  // get product id from route params
  const { productId } = useParams();
  if (!productId) return;

  const [quantity, setQuantity] = useState(1);

  const {
    data: productDetail,
    error,
    isLoading,
  } = useProductDetailsQuery(productId);
  console.log("Product Details:", productDetail);
  return (
    <div className="w-full text-black max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* LEFT: Product Image */}
      <div className="w-full flex justify-center">
        <img
          src={productDetail?.product?.image}
          alt={productDetail?.product?.name}
          className="w-full max-w-md rounded shadow"
        />
      </div>

      {/* RIGHT: Details Info */}
      <ProductDetailInfo
        title={productDetail?.product?.name}
        // rating={4}
        reviews={150}
        description={
          productDetail?.product?.description ??
          "All black Nike sneakers, get a free legit check in the SOLESTAGE app now. "
        }
        price={productDetail?.product?.price}
        colours={["bg-gray-900", "bg-red-500"]}
        sizes={["XS", "S", "M", "L", "XL"]}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
};

export default ProductDetail;

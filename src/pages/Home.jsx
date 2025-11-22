import React from "react";
import Counter from "../components/home/counter";
import ProductCard from "../components/common/products/ProductCard";

function Home() {
  return (
    <div className="w-full h-full justify-center items-center flex flex-col gap-4 mt-20">
      <h1 className="text-3xl font-bold text-red-500">Welcome to Mocco Mart</h1>
      <Counter />
      <div>
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          image="https://images.unsplash.com/photo-1656944227421-d0e8de487d9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          price={120}
          oldPrice={160}
          discount={40}
          rating={4}
          reviews={88}
          isWishlisted={false}
          toggleWishlist={() => console.log("wishlist toggled")}
          onAddToCart={() => alert("Added to cart")}
        />
      </div>
    </div>
  );
}

export default Home;

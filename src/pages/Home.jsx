import React from "react";
import Counter from "../components/home/counter";


function Home() {
  return (
    <div className="w-full h-full justify-center items-center flex flex-col gap-4 mt-20">
      <h1 className="text-3xl font-bold text-red-500">Welcome to Mocco Mart</h1>
      <Counter />
    </div>
  );
}

export default Home;

import React from "react";

const ProductLoader = () => {
  return (
    <div className="group animate-pulse">
      <div className="w-36 h-32 bg-neutral-200 -mb-16 ms-5" />
      <div className="border border-neutral-200 border-neutral-300 p-5">
        <div className="h-4 bg-neutral-200 rounded mt-14 w-3/4 mb-4" />
        <div className="h-4 bg-neutral-200 rounded mb-2" />
        <div className="h-4 bg-neutral-200 rounded mb-2" />
        <div className="h-4 bg-neutral-200 rounded mb-2" />
        <div className="h-4 bg-neutral-200 rounded w-1/2 mb-4" />
        <div className="flex justify-between items-center">
          <div className="h-4 bg-neutral-200 rounded w-1/3 mb-2" />
          <div className="h-4 bg-neutral-200 rounded w-1/4 mb-2" />
        </div>
        <hr className="my-3" />
        <div className="h-4 bg-neutral-200 rounded w-2/5 mb-4" />
        <div className="h-6 bg-neutral-200 rounded w-full" />
      </div>
    </div>
  );
};

export default ProductLoader;

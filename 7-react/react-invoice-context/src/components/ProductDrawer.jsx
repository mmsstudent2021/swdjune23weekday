import React, { useContext } from "react";
import ProductGroup from "./ProductGroup";
import ProductCreateFrom from "./ProductCreateFrom";
import { GeneralContext } from "../contexts/GeneralContext";

const ProductDrawer = () => {
  const { openDrawer, toggleDrawer } = useContext(GeneralContext);

  return (
    <div
      id="productDrawer"
      className={`h-screen w-96 bg-white fixed right-0 shadow-lg overflow-scroll duration-200 ${
        !openDrawer && "translate-x-full"
      }`}
    >
      <div className="p-3 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-700">Your Product</h1>
          <h4 className="text-xl text-gray-500">Manage Product</h4>
        </div>
        <button
          onClick={toggleDrawer}
          id="closeDrawer"
          className="p-3 bg-blue-100 text-blue-600 duration-200 active:scale-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ProductGroup />
      <ProductCreateFrom  />
    </div>
  );
};

export default ProductDrawer;

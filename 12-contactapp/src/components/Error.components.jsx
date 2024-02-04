import React from "react";
import { IoWarningOutline } from "react-icons/io5";

const ErrorComponents = ({ children }) => {
  return (
    <div className="flex border shadow text-red-500 justify-center items-center space-x-2 py-3 my-3">
      <IoWarningOutline />
      <h1>{children}!</h1>
    </div>
  );
};

export default ErrorComponents;

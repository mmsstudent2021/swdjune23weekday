import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[900px] mx-auto py-10 text-gray-800 px-5 lg:px-0">{children}</div>
  );
};

export default Container;

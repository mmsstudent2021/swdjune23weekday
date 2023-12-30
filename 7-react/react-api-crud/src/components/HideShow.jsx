// HideShow.js

import React, { useState } from "react";
import Content from "./Content";

const HideShow = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-4xl font-bold mb-4">Hide/Show Component</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleVisibility}
      >
        {isContentVisible ? "Hide Content" : "Show Content"}
      </button>
      {isContentVisible && <Content />}
    </div>
  );
};

export default HideShow;

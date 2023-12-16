import React, { useState } from "react";

const Counter = () => {
  // console.log(useState(true));

  const [count, setCount] = useState(0);
  console.log(count);

  const increment = () => {
    setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className=" font-mono border border-gray-400 p-10 rounded-xl">
      <h1 className=" font-bold text-4xl mb-5">Counter : {count}</h1>
      <div className=" flex gap-3">
        <button
          onClick={decrement}
          className=" bg-sky-500 px-2 py-1 rounded-lg"
        >
          Sub (-)
        </button>
        <button
          onClick={increment}
          className=" bg-sky-500 px-2 py-1 rounded-lg"
        >
          Add (+)
        </button>
      </div>
    </div>
  );
};

export default Counter;

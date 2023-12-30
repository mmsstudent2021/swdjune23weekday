import React, { useEffect, useState } from "react";

const Content = () => {
  const [count, setCount] = useState(0);

  console.log("update", count);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // effect body

    console.log("Content mounted");

    const runner = setInterval(() => {
      console.log("Random", Math.random());
    }, 3000);

    

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    return () => {
      // clean up function

      console.log("Content unmounted");
      clearInterval(runner);

    };
  }, [count]);

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-md">
      <p className="text-lg mb-0">This is the content to hide or show.</p>

      <div className="flex items-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          -
        </button>
        <span className="text-2xl">{count}</span>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Content;

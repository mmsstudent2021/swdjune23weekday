import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  console.log(text);
  const handleInput = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <h1 className="mb-5">Name Input</h1>
      <input
        type="text"
        className=" w-full border-2 rounded-lg border-gray-400 px-3 py-1"
        value={text}
        onChange={handleInput}
      />
      <p>{text}</p>
    </div>
  );
};

export default Input;

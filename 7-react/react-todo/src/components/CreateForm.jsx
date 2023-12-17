import React, { useState } from "react";

const CreateForm = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleAddBtn = () => {
    const newTask = {
      id: Date.now(),
      job: input,
      isDone: false,
    };
    addTask(newTask);
    setInput("");
  };

  const handleKeyup = (event) => {
    if (event.key === "Enter") {
      handleAddBtn();
    }
  };

  return (
    <div className="flex mb-5">
      <input
        className="flex-grow border border-neutral-700 h-14 px-3 focus-visible:outline-none"
        type="text"
        id="textInput"
        value={input}
        onChange={handleInput}
        onKeyUp={handleKeyup}
      />
      <button
        id="addBtn"
        className="h-14 w-14 bg-neutral-700 text-white flex justify-center items-center"
        onClick={handleAddBtn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 stroke-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default CreateForm;

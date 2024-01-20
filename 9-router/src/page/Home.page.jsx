import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [text, setText] = useState("");
  const nav = useNavigate();
  const handleToContact = () => {
    nav("/contact", { replace: true });
  };

  const handleDataTransfer = (e) => {
    e.preventDefault();
    console.log(text);
    nav("/contact", { state: { name: text } });
  };

  return (
    <div>
      <p>HomePag</p>
      <button
        className="p-3 bg-black text-white hover:ring-2 ring-cyan-200 rounded-lg duration-200"
        onClick={handleToContact}
      >
        Next to Contact
      </button>
      <form className="flex flex-col w-[300px]">
        <label htmlFor="name">name</label>
        <input
          className=" border-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          name="name"
          id="name"
        />
        <button
          className="p-3 bg-black text-white hover:ring-2 ring-cyan-200 rounded-lg duration-200"
          onClick={handleDataTransfer}
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default HomePage;

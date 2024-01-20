import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContactPage = () => {
  const nav = useNavigate();
  const { state, pathname, search } = useLocation();

  const handleBack = () => {
    nav(-1);
  };

  console.log(pathname, search);

  return (
    <div>
      <p>Contact</p>
      <button
        className="p-3 bg-black text-white hover:ring-2 ring-cyan-200 rounded-lg duration-200"
        onClick={handleBack}
      >
        Back
      </button>
      contact name is {state?.name}
    </div>
  );
};

export default ContactPage;

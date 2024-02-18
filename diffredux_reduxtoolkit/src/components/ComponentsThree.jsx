import React from "react";
import { useDispatch } from "react-redux";
import { decrease } from "../store/reducer/counter.slice";

const ComponentsThree = () => {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch(decrease());
  };

  return (
    <div>
      ComponentsThree
      <button className="p-2 bg-red-200 m-5" onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
};

export default ComponentsThree;

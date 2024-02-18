import React from "react";
import { useDispatch } from "react-redux";
import ComponentsThree from "./ComponentsThree";
import { increase, increasePayload } from "../store/reducer/counter.slice";

const ComponentsTwo = () => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleIncreaseWithPayload = () => {
    dispatch(increasePayload(3));
  };
  return (
    <div>
      ComponentsTwo
      <button className="p-2 bg-blue-200 m-5" onClick={handleIncrease}>
        Increase
      </button>
      <button
        className="p-2 bg-yellow-200 m-5"
        onClick={handleIncreaseWithPayload}
      >
        Increase with Payload
      </button>
      <ComponentsThree />
    </div>
  );
};

export default ComponentsTwo;

import React, { useEffect, useRef } from "react";

const EditInput = ({
  updateInput,
  handleUpdateInput,
  handleUpdateInputBlur,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    console.log("mounted");
    console.dir(inputRef.current);
    inputRef.current.focus();
  }, []);

  return (
    <div className="">
      <input
        ref={inputRef}
        value={updateInput}
        type="text"
        className={` border border-gray-400 text-sm py-1 w-[280px] px-2`}
        onChange={handleUpdateInput}
        onBlur={handleUpdateInputBlur}
      />
    </div>
  );
};

export default EditInput;

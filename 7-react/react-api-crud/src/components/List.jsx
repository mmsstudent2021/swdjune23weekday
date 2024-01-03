import React from "react";

const List = ({ course: { id, title, fee, student_count, status } }) => {
  return (
    <div className=" bg-white border-2 p-3 mb-3 flex">
      <div className="">
        <p>
          {title} ({fee})
        </p>
      </div>
    </div>
  );
};

export default List;

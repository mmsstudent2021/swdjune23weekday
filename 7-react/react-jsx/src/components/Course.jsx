import React from "react";

const Course = ({ id, title, count }) => {
  //   console.log(props);
  const borderClassNames =
    count === 0 ? "border-red-300 bg-red-100" : "bg-gray-100";
  return (
    count > 0 && (
      <div className={`border-s-4 ${borderClassNames} mb-3 p-3`}>
        {count} {title}
      </div>
    )
  );
};

export default Course;

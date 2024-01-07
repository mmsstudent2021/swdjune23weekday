import React from "react";
import List from "./List";

const ListGroup = ({ courses }) => {
  return (
    <div className=" m-10">
      <h1 className=" font-bold text-3xl mb-5">Our Courses</h1>
      {courses.map((course) => (
        <List key={course.id} course={course} />
      ))}
    </div>
  );
};

export default ListGroup;

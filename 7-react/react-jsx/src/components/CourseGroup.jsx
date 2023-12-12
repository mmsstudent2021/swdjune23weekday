import React from "react";
import Course from "./Course";

const CourseGroup = () => {
  const courses = [
    {
      id: 1,
      title: "Web Dev Foundation",
      studentCount: 5,
    },
    {
      id: 2,
      title: "Special Web Design",
      studentCount: 7,
    },
    {
      id: 3,
      title: "Basic UI Design",
      studentCount: 0,
    },
    {
      id: 4,
      title: "Premium UI Design",
      studentCount: 5,
    },
    {
      id: 5,
      title: "Web App Development",
      studentCount: 0,
    },
  ];
  return (
    <div>
      {courses.map(({ id, title, studentCount }) => (
        <Course id={id} title={title} count={studentCount} key={id} />
      ))}
    </div>
  );
};

export default CourseGroup;

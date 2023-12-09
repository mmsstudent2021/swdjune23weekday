import React from "react";

const App = () => {
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

  const title = "Our Course List";

  return (
    <div className="p-10 m-10 border-2 border-gray-200">
      <h1 className=" font-serif font-bold text-3xl text-blue-500 mb-5">
        {title}
      </h1>
      <ul>
        {courses.map((course) => (
          <li
            className={`border-s-4 ${
              course.studentCount === 0 ? "bg-red-100" : "bg-gray-100"
            } mb-3 p-3`}
            key={course.id}
          >
            {` ${course.studentCount} ${course.title} `}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

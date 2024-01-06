import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [createDrawer, setCreateDrawer] = useState(false);
  const [editDrawer, setEditDrawer] = useState(false);
  const [courses, setCourses] = useState([]);

  const [editCourse,setEditCourse] = useState({})

  console.log(editCourse);

  const addCourse = (newCourse) => {
    setCourses([...courses,newCourse])
  }

  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id != id))
  }

  const toggleCreateDrawer = () => {
    setCreateDrawer(!createDrawer);
  };

  const toggleEditDrawer = () => {
    setEditDrawer(!editDrawer);
  };

  return (
    <DataContext.Provider
      value={{
        createDrawer,
        toggleCreateDrawer,
        editDrawer,
        toggleEditDrawer,
        courses,
        setCourses,
        addCourse,
        deleteCourse,
        editCourse,
        setEditCourse
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

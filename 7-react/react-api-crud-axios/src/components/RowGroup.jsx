import React, { useContext, useEffect, useState } from "react";
import Row from "./Row";
import LoaderRow from "./LoaderRow";
import { DataContext } from "../contexts/DataContext";
import EmptyRow from "./EmptyRow";
import { baseUrl } from "../config/config";
import axios from "axios";
import { courseApi } from "../api/course";

const RowGroup = () => {
  const { courses, setCourses } = useContext(DataContext);
  const [ready, setReady] = useState(false);

  const loaderRowCount = Array.from({ length: 5 }, (_, index) => index);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await courseApi.get( "/courses");
      setCourses(res.data);
      setReady(true);
    };

    fetchCourses();
  }, []);

  return (
    <>
      {!ready && loaderRowCount.map((el, index) => <LoaderRow key={index} />)}

      {ready &&
        (courses.length ? (
          courses.map((course) => <Row key={course.id} course={course} />)
        ) : (
          <EmptyRow />
        ))}
    </>
  );
};

export default RowGroup;

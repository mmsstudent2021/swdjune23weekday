import React from "react";
import { useParams } from "react-router-dom";

const AuthorPage = () => {
  const data = useParams();
  console.log(data);
  return <div>AuthorPage {data.id}</div>;
};

export default AuthorPage;

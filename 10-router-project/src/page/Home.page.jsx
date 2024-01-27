import React, { useContext } from "react";
import { BookListComponents } from "../components";
import { Link } from "react-router-dom";
import { ApiContext } from "../store/ApiContext";

const HomePage = () => {
  const { data, error, loading } = useContext(ApiContext);

  return (
    <div className="">
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="flex flex-wrap justify-between">
          {data.map((i) => (
            <Link key={i.id} to={`/detail/${i.slug}`}>
              <BookListComponents data={i} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;

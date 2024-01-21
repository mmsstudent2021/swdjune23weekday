import React from "react";
import { GetBookData } from "../../service/book.service";
import useFetch from "../../hook/useFetch";
import { useNavigate, useParams } from "react-router-dom";

const DetailBookPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { data, error, loading } = useFetch(GetBookData, `book/${id}`);

  const handleBack = () => {
    nav(-1);
  };
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <div className="pb-5">
              <button onClick={handleBack}>Back</button>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="barna.jpg"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold">{data.book}</h1>
                <h2 className="text-sm text-gray-400">{data.author}</h2>
              </div>
              <div>
                <p>{data.description}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;

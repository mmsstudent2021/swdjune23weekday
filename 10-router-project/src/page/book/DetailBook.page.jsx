import React, { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiContext } from "../../store/ApiContext";

const DetailBookPage = () => {
  const { slug } = useParams();
  const nav = useNavigate();
  const [item, setItem] = useState(null);
  const { data, error, loading } = useContext(ApiContext);

  useEffect(() => {
    const finder = data?.find((i) => i.slug === slug);
    setItem(finder);
  }, [slug, data]);

  const handleBack = () => {
    nav(-1);
  };

  console.log(slug);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {error ? (
            <h1>{error}</h1>
          ) : (
            <div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="barna.jpg"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold">{item?.book}</h1>
                <h2 className="text-sm text-gray-400">{item?.author}</h2>
              </div>
              <div>
                <p>{item?.description}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;

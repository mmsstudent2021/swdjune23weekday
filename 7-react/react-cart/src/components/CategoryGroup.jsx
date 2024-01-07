import React, { useEffect, useState } from "react";
import Container from "./Container";
import { categoryApi } from "../api/category";
import Category from "./Category";

const CategoryGroup = () => {
  const [categories, setCategory] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await categoryApi.get("/");
      setCategory(res.data);
      setReady(true);
    };

    fetchCategory();
  }, []);
  return (
    <section className="category-list mb-10 py-3">
      <Container>
        <p className="font-heading mb-2">Select Categories</p>
        <div
          id="categoryList"
          className="flex gap-3 select-none overflow-scroll"
        >
          <Category catName="All" />
          {!ready && (
            <div className="flex gap-3 animate-pulse">
              <button className="border border-neutral-200 px-4 py-1 flex items-center">
                <span className="inline-block bg-neutral-200 w-24 h-4" />
              </button>
              <button className="border border-neutral-200 px-4 py-1 flex items-center">
                <span className="inline-block bg-neutral-200 w-24 h-4" />
              </button>
              <button className="border border-neutral-200 px-4 py-1 flex items-center">
                <span className="inline-block bg-neutral-200 w-24 h-4" />
              </button>
            </div>
          )}
          {ready &&
            categories.map((category, index) => (
              <Category key={index} catName={category} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryGroup;

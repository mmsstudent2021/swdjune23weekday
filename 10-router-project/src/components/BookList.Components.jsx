import React from "react";

const BookListComponents = ({ data }) => {
  console.log(data);
  return (
    <div className="w-[200px] h-[300px] border my-5">
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
  );
};

export default BookListComponents;

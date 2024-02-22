import React from "react";
import { useGetTodoQuery } from "../store/service/endpoints/todo.endpoints";

const List = ({ isLoading, data }) => {
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {data.map((i) => (
            <h1 key={i.id}>
              <span>{i.id}</span> -{i.text}
            </h1>
          ))}
        </>
      )}
    </div>
  );
};

export default List;

import React from "react";
import Tool from "./components/Tool";
import List from "./components/List";
import { useGetTodoQuery } from "./store/service/endpoints/todo.endpoints";

const App = () => {
  const { isLoading, isError, isSuccess, data, refetch } = useGetTodoQuery();

  const handleRefatch = () => {
    refetch();
  };

  return (
    <div>
      <h1>Rtk Todo</h1>
      <Tool handleRefatch={handleRefatch} />
      <List isLoading={isLoading} data={data} />
    </div>
  );
};

export default App;

// axios , fetch ,xmlhttprequest

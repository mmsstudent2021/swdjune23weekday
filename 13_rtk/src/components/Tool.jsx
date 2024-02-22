import React, { useState } from "react";
import { usePostTodoMutation } from "../store/service/endpoints/todo.endpoints";

const Tool = ({ handleRefatch }) => {
  const [fun, data] = usePostTodoMutation();
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fun({
      text: todo,
    });
    handleRefatch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          name="todo"
          id="todo"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Tool;

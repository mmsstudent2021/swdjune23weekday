import React, { useState } from "react";
import EmptyStage from "./EmptyStage";
import List from "./List";

const ListGroup = ({ tasks, deleteTask, doneTask }) => {
  return (
    <div>
      {tasks.length === 0 && <EmptyStage />}
      {tasks.map(({ id, job, isDone }) => (
        <List
          deleteTask={deleteTask}
          doneTask={doneTask}
          key={id}
          id={id}
          job={job}
          isDone={isDone}
        />
      ))}
    </div>
  );
};

export default ListGroup;

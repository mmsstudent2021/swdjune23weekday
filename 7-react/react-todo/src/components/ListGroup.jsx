import React, { useState } from "react";
import EmptyStage from "./EmptyStage";
import List from "./List";

const ListGroup = ({
  tasks,
  deleteTask,
  doneTask,
  updateTaskJob,
  doneAllTask,
}) => {
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
          updateTaskJob={updateTaskJob}
        />
      ))}
      <div className="flex justify-end">
        <button
          onClick={doneAllTask}
          className=" bg-gray-200 px-4 py-1 rounded-full"
        >
          All Done
        </button>
      </div>
    </div>
  );
};

export default ListGroup;

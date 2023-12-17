import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateForm from "./components/CreateForm";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Checker from "./components/Checker";
import Accordion from "./components/Accordion";
import { AccordionGroup } from "./components/AccordionGroup";

const App = () => {
  const [tasks, setTask] = useState([
    { id: 1, job: "Complete homework", isDone: false },
    { id: 2, job: "Go for a run", isDone: true },
    { id: 3, job: "Read a book", isDone: true },
  ]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((el) => el.id != id));
  };

  const doneTask = (id) => {
    setTask(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  return (
    <div className="w-[400px] mx-auto mt-10">
      <Heading />
      <CreateForm addTask={addTask} />
      <Status tasks={tasks} />
      <ListGroup deleteTask={deleteTask} doneTask={doneTask} tasks={tasks} />
      {/* <Counter /> */}
      {/* <Input /> */}
      {/* <Checker /> */}
      {/* <AccordionGroup /> */}
    </div>
  );
};

export default App;

import React from "react";
import Heading from "./components/Heading";
import CreateForm from "./components/CreateForm";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Checker from "./components/Checker";
import Accordion from "./components/Accordion";

const App = () => {
  var questions = [
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript is a programming language that enables interactive web pages.",
    },
    {
      id: 2,
      question: "How can I include JavaScript in my HTML?",
      answer:
        "You can include JavaScript in your HTML using the <script> tag, either in the head or body of your HTML document.",
    },
    {
      id: 3,
      question: "What is an array?",
      answer:
        "An array is a data structure that stores a collection of elements, each identified by an index or a key.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="w-[400px] mx-auto mt-20">
      {/* <Heading /> */}
      {/* <CreateForm /> */}
      {/* <Status /> */}
      {/* <ListGroup /> */}
      {/* <Counter /> */}
      {/* <Input /> */}
      {/* <Checker /> */}
      {questions.map(({ id, question, answer }) => (
        <Accordion key={id} question={question} answer={answer} />
      ))}
    </div>
  );
};

export default App;

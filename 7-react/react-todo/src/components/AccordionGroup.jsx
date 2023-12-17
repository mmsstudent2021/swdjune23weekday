import React, { useState } from "react";
import Accordion from "./Accordion";

export const AccordionGroup = () => {
  const [faq, setFaq] = useState([
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript is a programming language that enables interactive web pages.",
      isOpen: false,
    },
    {
      id: 2,
      question: "How can I include JavaScript in my HTML?",
      answer:
        "You can include JavaScript in your HTML using the <script> tag, either in the head or body of your HTML document.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What is an array?",
      answer:
        "An array is a data structure that stores a collection of elements, each identified by an index or a key.",
      isOpen: false,
    },
    // Add more FAQ items as needed
  ]);

  const openAccordion = (id) => {
    setFaq(
      //   faq.map((el) => {
      //     if (el.id === id) {
      //       return { ...el, isOpen: true };
      //     }
      //     return { ...el, isOpen: false };
      //   })
      faq.map((el) =>
        el.id === id ? { ...el, isOpen: true } : { ...el, isOpen: false }
      )
    );
  };

  return (
    <div>
      <h1 className=" mb-5 text-3xl">FAQ Group</h1>
      {faq.map(({ id, question, answer, isOpen }) => (
        <Accordion
          key={id}
          id={id}
          openAccordion={openAccordion}
          isOpen={isOpen}
          question={question}
          answer={answer}
        />
      ))}
    </div>
  );
};

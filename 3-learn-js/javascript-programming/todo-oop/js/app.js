// selectors

import Todo from "./Todo.js";


const app = document.querySelector("#app");
const textInput = app.querySelector("#textInput");
const addBtn = app.querySelector("#addBtn");
const listGroup = app.querySelector("#listGroup");
const listUiTemplate = app.querySelector("#listUi");


const todo = new Todo;

// functions

const createList = (text, index) => {
  const listUi = listUiTemplate.content.cloneNode(true);
  listUi.querySelector(".list-text").innerText = text;
  listUi.querySelector("li").setAttribute("list-index", index);
  return listUi;
};

const listRender = (lists) => {
  listGroup.innerHTML = "";
  lists.forEach((list, index) => {
    // console.log(index);
    listGroup.append(createList(list, index));
  });
};

// handler
const addBtnHandler = () => {
  // console.log(textInput.value);
  todo.addTask(textInput.value);
  listRender(todo.getTasks());
  textInput.value = null;
};

const listGroupHandler = (event) => {
  if (event.target.classList.contains("list-del")) {
    const currentIndex = event.target.closest("li").getAttribute("list-index");
    todo.removeTask(currentIndex);
    listRender(todo.getTasks());
  }
};

// listener
addBtn.addEventListener("click", addBtnHandler);
listGroup.addEventListener("click", listGroupHandler);

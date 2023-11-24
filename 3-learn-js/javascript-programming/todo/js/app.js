// selectors

import { addTask, getTasks, removeTask } from "./todo.js";

const app = document.querySelector("#app");
const textInput = app.querySelector("#textInput");
const addBtn = app.querySelector("#addBtn");
const listGroup = app.querySelector("#listGroup");
const listUiTemplate = app.querySelector("#listUi");

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
  addTask(textInput.value);
  listRender(getTasks());
  textInput.value = null;
};

const listGroupHandler = (event) => {
  if (event.target.classList.contains("list-del")) {
    const currentIndex = event.target.closest("li").getAttribute("list-index");
    removeTask(currentIndex);
    listRender(getTasks());
  }
};

// listener
addBtn.addEventListener("click", addBtnHandler);
listGroup.addEventListener("click", listGroupHandler);

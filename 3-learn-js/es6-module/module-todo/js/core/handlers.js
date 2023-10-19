import list from "../app/list.js";
import lists from "../app/lists.js";
import textInput from "../app/textInput.js";

export const addBtnHandler = () => {
  console.log(textInput.value);

  lists.append(list(textInput.value));

  textInput.value = null;
};

export const listsHandler = (event) => {
  if (event.target.classList.contains("del-list")) {
    const currentList = event.target.closest("li");
    confirm("Are U sure ?") && currentList.remove();
  }
};

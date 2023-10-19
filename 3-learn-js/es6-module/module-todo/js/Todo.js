import addBtn from "./app/addBtn.js";
import heading from "./app/heading.js";
import lists from "./app/lists.js";
import textInput from "./app/textInput.js";
import { addBtnHandler, listsHandler } from "./core/handlers.js";

class Todo {

    

  initialRender() {
    // create ui of app
    this.app.append(heading);
    this.app.append(textInput);
    this.app.append(addBtn);
    this.app.append(lists)
  }

  listener(){
    addBtn.addEventListener("click",addBtnHandler)
    lists.addEventListener("click",listsHandler)
  }

  init(selector) {
    console.log("Todo App Start");
    this.app = document.querySelector(selector);
    this.initialRender();
    this.listener()
  }
}

export default Todo;

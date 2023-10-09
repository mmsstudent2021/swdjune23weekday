// selectors

const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneCounter = document.querySelector("#doneCounter");
const listCounter = document.querySelector("#listCounter");
const taskLists = document.querySelector("#taskLists");

// functions
const createListUi = (text) => {
  const list = document.createElement("div");
  list.classList.add("tasklist");
  list.innerHTML = `
    <div class="flex mb-5 justify-between items-center border-2 border-black p-5">
            <div class=" text-box flex  items-center">
              <input type="checkbox" class="w-5 h-5" />
              <div class="tasklist-text ms-2">
              ${text}
              </div>
            </div>
            <div class="">
              <button class="tasklist-edit-btn border-black border p-2 rounded" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="currentColor"
                  class="w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </button>
              <button class=" tasklist-del-btn border-black border p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="currentColor"
                  class="w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
    `;

  // delete list
  const taskListDelBtn = list.querySelector(".tasklist-del-btn");

  taskListDelBtn.addEventListener("click", listDelHandler);

  // edit list

  const tasklistEditBtn = list.querySelector(".tasklist-edit-btn");
  tasklistEditBtn.addEventListener("click", () => {
    const tasklistText = list.querySelector(".tasklist-text");

    const input = document.createElement("input");
    input.classList.add("border", "border-black", "p-1", "rounded");
    input.value = tasklistText.innerText;

    tasklistText.innerText = null;
    tasklistText.append(input);

    input.addEventListener("blur", () => {
      tasklistText.innerText = input.value;
    });
  });

  // checking

  const textBox = list.querySelector(".text-box");
  textBox.addEventListener("click", () => {
    console.log("text-box");
    textBox.querySelector("input").toggleAttribute("checked");
    textBox.querySelector(".tasklist-text").classList.toggle("line-through");
    countDoneTaskList();
  });

  return list;
};

const listDelHandler = (event) => {
  // console.log(event.target.parentElement);
  // console.log(event.target.parentElement.parentElement);
  // console.log(event.target.parentElement.parentElement.parentElement);
  if (confirm("Are U sure to delete?")) {
    // list.remove();
    event.target.closest(".tasklist").remove();
    countTaskList();
    countDoneTaskList();
  }
};

const countTaskList = () => {
  listCounter.innerText = document.querySelectorAll(".tasklist").length;
};

const countDoneTaskList = () => {
  doneCounter.innerText = document.querySelectorAll(
    ".tasklist [type='checkbox']:checked"
  ).length;
};

// handler

const addBtnHandler = () => {
  //   console.log(textInput.value.trim() ? true : false);
  if (textInput.value.trim()) {
    // add list to tasklists
    taskLists.append(createListUi(textInput.value));
    // input clear
    countTaskList();
    countDoneTaskList();
    textInput.value = null;
  } else {
    alert("Please input some text");
  }

  //   textInput.value.trim() && taskLists.append(createListUi(textInput.value));
};

// listeners

// addBtn.onclick = addBtnHandler;
addBtn.addEventListener("click", (event) => {
  // console.log(event);
  addBtnHandler();
});
// textInput.addEventListener("keydown",() => {
//   console.log("key down");
// })

// work when u press enter

textInput.addEventListener("keyup", (event) => {
  // console.log(event);
  if (event.key === "Enter") {
    addBtnHandler();
  }
});

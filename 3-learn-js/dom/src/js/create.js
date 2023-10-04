const app = document.createElement("main");
app.classList.add("p-5", "border-4", "m-5");

const heading = document.createElement("h1");
heading.innerText = "Todo App";
heading.classList.add("font-serif", "text-3xl", "font-bold");

const para = document.createElement("p");
para.innerText = "Education purpose only for our students.";
para.classList.add("text-stone-600", "mb-5");

const lists = document.createElement("ul");
lists.classList.add("mb-10");

// DRY

const createList = (listText) => {
  const list = document.createElement("li");
  list.classList.add(
    "bg-indigo-100",
    "p-2",
    "border-l-4",
    "border-indigo-500",
    "mb-3"
  );
  list.innerText = listText;
  return list;
};

lists.prepend(createList("1. read documentation more"));
lists.prepend(createList("2. read other code"));
lists.prepend(createList("3. sleep well"));

const box = document.createElement("div");

const textInput = document.createElement("input");
textInput.classList.add("border", "me-2", "py-2", "px-4", "rounded");

const addBtn = document.createElement("button");
addBtn.classList.add("bg-indigo-500", "py-2", "px-4", "text-white", "rounded");
addBtn.innerText = "Add New";

box.append(textInput);
box.append(addBtn);

document.body.append(app);

app.append(lists)
lists.before(heading);
heading.after(para)
lists.after(box)

// app.append(heading);
// app.append(para);
// app.append(lists);
// app.append(box);

// selector
// const body = document.querySelector("body");

// console.dir(document);
// console.log(document.body);
// console.log(document.title);

//create p element
// const p = document.createElement("p");
// p.style.color = "red";
// p.style.backgroundColor = "black";
// p.style.padding = "10px"
// p.className = " bg-black text-red-600 p-5 ";
// p.classList.add("bg-black","text-red-500","p-5")
// p.innerText = "san kyi tar";

// p element to body
// document.body.append(p)

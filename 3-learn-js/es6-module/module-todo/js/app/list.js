const list = (text) => {
    const li = document.createElement("li");
    const textNode = document.createTextNode(text);
    const delBtn = document.createElement("button");
    delBtn.classList.add("del-list")
    delBtn.innerText = "Del"

    li.append(delBtn)
    li.append(textNode)

    // delBtn.addEventListener("click",listDelHandler);

    return li;
}

// const listDelHandler = (event) => {
//     const currentList =  event.target.closest('li');
//     confirm("Are U sure ?") && currentList.remove()
// }

export default list;

// <li><button>Del</button> text </li>
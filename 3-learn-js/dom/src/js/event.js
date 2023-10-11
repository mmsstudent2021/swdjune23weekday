// const textInput = document.querySelector("#textInput");
// console.log(textInput);

// textInput.onfocus = () => {
//     console.log("U focus");
// }

// textInput.onblur = () => {
//     console.log("U blur");
// }

// textInput.addEventListener('focus',() => {
//     console.log("U focus");
// })

// textInput.addEventListener("blur",() => {
//     console.log("U blur");
// })

// const heading = document.querySelector("#heading");

// heading.addEventListener("mouseover",() => {
//     console.log("mouse over");
// })

// heading.addEventListener("mouseout",() => {
//     console.log("mouse out");
// })

// heading.addEventListener("mousemove",() => {
//     console.log("mouse move");
// })

// const fileInput = document.querySelector("#fileInput");

// fileInput.addEventListener("change", () => {
//   console.log(fileInput.files);
// });

// const testForm = document.querySelector("#testForm");
// const mmsLink = document.querySelector("#mmsLink");

// console.log(testForm);

// testForm.addEventListener("submit",(event) => {
//     event.preventDefault();
//     // console.log(event);
//     // console.log("U submit");

//     const formData = new FormData(testForm);
//     formData.append("salary",1200)
//     console.log(formData);
//     console.log(formData.get("your_name"));
//     console.log(formData.get("your_bd"));
//     console.log(formData.get("salary"));

//     console.log(formData.has("your_name"));

//     testForm.reset()

// })

// mmsLink.addEventListener("click",(event) => {
//     console.log(event);
//     event.preventDefault();
//     console.log("U click link");
// })

// window.addEventListener("scroll",() => {
//     console.log("U scroll");
//     console.log(window.scrollY);
// })

// document.addEventListener("mousemove",(event) => {
//     console.clear();
//     console.log(event);
// })

// const btn = document.querySelector("#btn");
// const layer1 = document.querySelector("#layer1");
// const layer2 = document.querySelector("#layer2");
// const layer3 = document.querySelector("#layer3");


// layer1.addEventListener("click",() => {
//     console.log("U click layer 1");
// },false)

// layer2.addEventListener("click",() => {
//     console.log("U click layer 2");
// },false)

// layer3.addEventListener("click",() => {
//     console.log("U click layer 3");
// },false)

// btn.addEventListener("click",(event) => {
//     event.stopPropagation();
//     console.log("U click btn");
// },false)

// const displayConsole = () => {
//   console.log("hello Hello");
// };
// btn.addEventListener("click", displayConsole);

// btn.addEventListener("click", () => {
//     console.log("remove eventlistener");
//   btn.removeEventListener("click", displayConsole);
// });


// const ul = document.querySelector("ul");
// const lis = document.querySelectorAll("li");

// ul.addEventListener("click",(event) => {
//     console.log(event.target.innerText);
// })

// const createLi = (text) => {
//     const li = document.createElement("li");
//     li.className = "border active:bg-neutral-400 p-2";
//     li.innerText = text;
//     return li;
// }


// lis.forEach((li) => {
//     // console.log(li);
//     li.addEventListener("click",() => {
//         console.log(li.innerText);
//     })
// })

// console.log(ul.children);
// console.log(lis);

// lis[0].addEventListener("click",() => {
//     console.log(lis[0].innerText);
// })

// lis[1].addEventListener("click",() => {
//     console.log(lis[1].innerText);
// })

// lis[2].addEventListener("click",() => {
//     console.log(lis[2].innerText);
// })



const h1 = document.querySelector("h1");
// h1.addEventListener("click",() => {
//     console.log(h1.innerText);
// })

// h1.addEventListener("mouseover",() => {
//     console.log(h1.innerText);
// })

// h1.addEventListener("mouseout",() => {
//     console.log(h1.innerText);
// })

["click","mouseover","mouseout"].forEach((el) => {
    h1.addEventListener(el,() => {
        console.log(h1.innerText);
    })
})


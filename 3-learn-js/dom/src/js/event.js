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


document.addEventListener("mousemove",(event) => {
    console.clear();
    console.log(event);
})
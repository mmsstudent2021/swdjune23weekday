// const obj = {
//     a : "aaa",
//     b : "bbb",
//     c : "ccc"
// }

// const arr = ["aaa","bbb","ccc"]

// const json1 = JSON.stringify(obj);
// const json2 = JSON.stringify(arr);

// console.log(typeof json1);
// console.log(typeof json2);

const fetchBtn = document.querySelector("#fetchBtn");
const myForm = document.querySelector("#myForm");
const storeBtn = document.querySelector("#storeBtn");

storeBtn.addEventListener("click", () => {
//   localStorage.setItem("myName", "hein htet zan");
  //   sessionStorage.setItem("myName", "hein htet zan");
//   localStorage.setItem("skill", ["html", "css", "js"]);
//   localStorage.setItem("obj", JSON.stringify({ a: "aaa", b: "bbb", c: "ccc" }));

document.cookie = "my_name=hein htet zan";
document.cookie = "my_age=29;expires=Sat Nov 25 2023 12:00:00 GMT"



});

// myForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log("submit");
//   const formData = new FormData(myForm);

//   fetch("http://localhost:9000/server.php", {
//     method: "POST",
//     body: formData,
//   })
//     .then((res) => res.text())
//     .then((text) => console.log(text));
// });

fetchBtn.addEventListener("click", () => {
  // data fetch
  // url - end point, http method,
  // fetch("https://fakestoreapi.com/products")
  // .then(res => res.text())
  // .then(text => console.log(JSON.parse(text)))
  // fetch("https://fakestoreapi.com/products")
  // .then(res => res.text())
  // .then(text => console.log(JSON.parse(text)))
  //   fetch("https://fakestoreapi.com/products")
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //   var xhr = new XMLHttpRequest();
  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState == 4 && xhr.status == 200) {
  //       // The request is complete, and the response is successful
  //       console.log(JSON.parse(xhr.responseText));
  //     }
  //   };
  //   xhr.open("GET", "https://fakestoreapi.com/products", true);
  //   xhr.send();
});

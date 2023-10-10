const textChanger = document.querySelector("#textChanger");
const fontChanger = document.querySelector("#fontChanger");
const colorChanger = document.querySelector("#colorChanger");
const fontsizeChanger = document.querySelector("#fontsizeChanger");
const display = document.querySelector("#display");

const textChangerHandler = (event) => {
  // console.log(event.target.value);
  // display.innerText = event.target.value
  display.innerText = textChanger.value;
};

const fontChangerHandler = (event) => {
  console.log(event.target.value);
  display.style.fontFamily = event.target.value;
};

const colorChangerHandler = (event) => {
  display.style.color = event.target.value;
};

const fontsizeChangerHandler = (event) => {
    console.log(event.target.value);
  display.style.fontSize = event.target.value + "px";
};

textChanger.addEventListener("keyup", textChangerHandler);
fontChanger.addEventListener("change", fontChangerHandler);
colorChanger.addEventListener("change", colorChangerHandler);
fontsizeChanger.addEventListener("change", fontsizeChangerHandler);

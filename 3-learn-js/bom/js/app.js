// window.addEventListener("resize", () => {
//   console.clear();
//   console.log(window.innerWidth, window.innerHeight);
//   console.log(window.outerWidth, window.outerHeight);
// });

// window.addEventListener("scroll",() => {
//     console.log(window.scrollY);
// })

// window.addEventListener("load", () => {
//   console.log("finish");

//   const loader=document.querySelector(".loader-screen");

//   loader.remove()
// });

// console.log("two");
// console.log("three");


// window.addEventListener("online",() => {
//     console.log("you are online");
// })

// window.addEventListener("offline",() => {
//     console.log("you are offline");
// })

// const run = () => {
//     console.log("I'm run");
// }

// window.setTimeout(run,5000) 
// window.setInterval(run,3000)

// const clock = document.querySelector("#clock");
// const stopBtn = document.querySelector("#stop");


// const runner = setTimeout(() => {
//     clock.innerHTML = "Hello time out"
// },3000)


// stopBtn.addEventListener("click",() => {
//     clearTimeout(runner)
// })

// const currentTime = () => {
//     const date = new Date;
//     return `${date.getHours()}:${date.getMinutes()} ${date.getSeconds()}`;
// }

// const runner = setInterval(() => {
//     console.log(currentTime());
//     clock.innerText = currentTime()
// },1000)


// stopBtn.addEventListener("click",() => {
//     console.log("stop the clock");
//     clearInterval(runner)
// })

// const openGoogle = document.querySelector("#openGoogle");
// const closeGoogle = document.querySelector("#closeGoogle");
// const scrollBtn = document.querySelector("#scrollBtn");
// const here = document.querySelector("#here");

// // console.log(here.style.color);
// // console.log(here.style.backgroundColor);

// console.log(window.getComputedStyle(here).color);
// console.log(window.getComputedStyle(here).backgroundColor);

// openGoogle.addEventListener("click",() => {
//     console.log("open");
//     window.open("https://google.com","_blank")
// })

// closeGoogle.addEventListener("click",() => {
//     window.close()
// })

// scrollBtn.addEventListener("click",() => {
//     // console.log("resize");
//     // window.resizeTo(500,500)
//     // window.scrollTo(0, here.offsetTop);
//     // console.log(here.offsetTop);
// })

// console.log(window.screen);
const h1 = document.querySelector("h1");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const audio = document.querySelector("audio");
const ul = document.querySelector("ul");
// const orange = document.querySelector("#orange");

// console.log(orange);

// console.dir(h1)
// console.dir(btn)
// console.dir(input)
// console.dir(audio)

const createLi = (text) => {
    const li = document.createElement("li");
    li.innerText = text;
    return li;
}

const empty = document.createDocumentFragment();
empty.append(createLi("apple"))
empty.append(createLi("orange"))
empty.append(createLi("mango"))
console.dir(empty);

ul.append(empty)

// ul.append(createLi("apple"))
// ul.append(createLi("orange"))
// ul.append(createLi("mango"))

btn.addEventListener("click",() => {
    h1.click()
})

h1.addEventListener("click",() => {
    console.log("U click h1");
})

// audio.addEventListener("play",() => {
//     console.log("U play the audio");
//     console.log(audio.currentTime);
// })

// audio.addEventListener("pause",() => {
//     console.log("U pause the audio");
//     console.log(audio.currentTime);

// })



// class A {
//     a = "aaa";
// }

// class B extends A {
//     b = "bbb";
// }

// class C extends B {
//     c = "ccc"
// }

// const c = new C;
// console.log(c);
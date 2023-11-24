const numbers = [4, 2, 5, 3, 2, 7, 1, 4];

const myName = "hein htet zan";
console.dir(myName)
console.log(myName.toUpperCase());

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, major) {
    super(name);
    this.major = major;
  }
}

class Monitor extends Student {
  constructor(name, major, roomNo) {
    super(name, major);
    this.roomNo = roomNo;
  }
}

const me = new Monitor("hhz","SWD","Weekday");

console.log(me);

// const h1 = document.createElement("h1");

// console.dir(h1)

// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));;

// const mySelf = { name: "hein htet zan", age: 29, gender: "male" };

// console.log(mySelf);
// const r = {...mySelf,name:"ko htet"}
// console.log(r);

// mySelf.name = "ko htet"

// mySelf.money = 100000;

// console.log(mySelf);

// const r = {...mySelf,money:100000}

// console.log(r);

// const arrayMap = (arr, map) => {
//   const result = [];
//   for (x of arr) {
//     result.push(map(x));
//   }
//   return result;
// };

// console.log(arrayMap(numbers, (el) => el * 2));

// const arrayFilter = (arr, condition) => {
//   const result = [];
//   for (x of arr) {
//     if (condition(x)) {
//       result.push(x);
//     }
//   }
//   return result;
// };

// console.log(arrayFilter(numbers, (el) => el % 2 === 0));

// function pureAdd(x, y) {
//   return x + y;
// }

// console.log(pureAdd(3, 5));
// console.log(pureAdd(3, 5));
// console.log(pureAdd(3, 5));

// let total = 0;
// function add(x) {
//   total += x;
//   return total;
// }

// console.log(add(5));
// console.log(add(5));
// console.log(add(5));

// function run() {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// }

// run()
// run()
// run()

// console.log(numbers.filter(el => el%2 === 0));

// const result = [];

// for(x of numbers){
//     x%2 === 0 && result.push(x);
// }

// console.log(result);

// let total = 0;

// for(x of numbers){
//     total += x * 2;
// }

// console.log(total);

// const result = numbers.map(el => el *2).reduce((pv,cv) => pv + cv)

// console.log(result);

// remove duplicate element

// const result = [];

// for(x of numbers){
//     if(!result.includes(x)){
//         result.push(x)
//     }
// }

// console.log(result);

// const result = new Set(numbers);

// console.log(result);

// total of numbers array
// state, statement

// let total = 0;

// for(x of numbers){
//     // console.log(x);
//     total += x;
// }

// console.log(total);

// console.log(numbers.reduce((pv,cv) => pv + cv));

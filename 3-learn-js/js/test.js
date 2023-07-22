// let x = 5;
// const y = 10;
// let z = 15;


// console.log(x);

// x = 7;

// console.log(x);


// let x = 5;

// let y = ["a","b","c"];

// console.log(x);

// let z = x;

// console.log(z);

// x = 7;

// console.log(x);

// console.log(z);

// console.log(y);



// const y = ["a","b","c"];

// y = 10;

// console.log("hello");

// console.log(y[0]);

// y[1] = "bbb";

// console.log(y[1]);

// console.log(y);

// let z = y;

// console.log(z);

// y[0] = "aaa";

// console.log(y);

// console.log(z);


// fun statement
// function run(x){
//     return "this is run fun with x"+x;
// }

// fun expression
// const run = function(){
//     return "this is fun expression"
// };

// console.log(run());

//iife
// console.log((function(){
//     return "this is iife"
// })());


// let x = ` I'm ${(function(){
//     let currentYear = 2023;
//     let myBirthYear = 1994;
//     let currentAge = currentYear - myBirthYear;
//     return currentAge
// })()} years old `;

// console.log(x);



// function run(){
//     let x = 5;
// console.log(x);

// }

// run()

// console.log(x);

// let x = 5;

// {
//     console.log(x);
// }

// function run(){
//     console.log(x);
// }

// run()

// console.log(run());


// function run(){
//     return "this is run";
// }

// console.log(x);

// let x = 5;

// const obj = {
//     a : "aaa",
//     // b : function(){
//     //     return "this is b "+this.c;
//     // },
//     b(){
//         return "this is b" + this.c
//     },
//     c : "ccc"
// }

// console.log(obj.a);
// console.log(obj.b());

const mySelf = {
    name : "hein htet zan",
    age : 29,
    skills : ["html","css","js"],
    teach(x){
        return "I can teach "+x;
    }
}
console.log(mySelf);
console.log(mySelf.name);
console.log(mySelf.teach("Web Development"));
console.log(mySelf.teach("Guitar"));
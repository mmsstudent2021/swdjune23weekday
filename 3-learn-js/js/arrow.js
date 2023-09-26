// function run(){
//     return "this is run";
// }

// const run = function(){
// console.log("object");
//     return "this is run";
// }

// const run = () => "this is run";
// const run = () => {
//   console.log("arrow fun");
//   return "this is run";
// };
// const run = () => {
//     console.log("arrow fun");
//     return "this is run";
//   };

// function area(w,h){
//     return x * h;
// }

// const run = x => x * 2;
// const area = (w,h) => w * h;

// // console.log(run(5));
// console.log(area(18,60));

const intro = (name, dateOfBirth) => {
  //
  // my name is hein htet zan. I'm 19 years old
  const date = new Date();
  const currentYear = date.getFullYear();

  const bd = new Date(dateOfBirth);
  const birthYear = bd.getFullYear();

  const currentAge = currentYear - birthYear;

  return `My name is ${name}. I'm ${currentAge} years old`;
};

console.log(intro("hein htet zan", "1994-7-22"));
console.log(intro("su su", "2003-12-30"));
console.log(intro("kyaw kyaw", "2008-2-14"));

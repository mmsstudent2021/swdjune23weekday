// An array of numbers
// const numbers = [4, 2, 5, 3, 2, 7, 1, 4];

// console.log(numbers.filter(el => el%2 === 1));

// console.log(numbers.map(el => el * 2));

// console.log(new Set(numbers));

// console.log(numbers.reduce((pv,cv)=>pv+cv,0));

// const oddArray = [];

// for(let el of numbers){
//     if(el%2 === 1){
//         oddArray.push(el)
//     }
// }

// console.log(oddArray);

// const doubleValue = [];

// for(let el of numbers){
//     doubleValue.push(el * 2)
// }

// console.log(doubleValue);

// const cleanNumber = [];

// for(let el of numbers){
//     if(!cleanNumber.includes(el)){
//         cleanNumber.push(el)
//     }
// }

// console.log(cleanNumber);

// let sum = 0;

// for(let el of numbers){
//     sum += el;
// }

// console.log(sum);

class Person {
  constructor(name, bd) {
    this.name = name;
    this.bd = bd;
  }

  getAge() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const bdDate = new Date(this.bd);
    const bdYear = bdDate.getFullYear();

    return currentYear - bdYear;
  }
}

const me = new Person("hein htet zan", "1994-07-22");
// console.log(me);
// console.log(me.getAge());

class Student extends Person {
  constructor(name, bd, school, major) {
    super(name, bd);
    this.school = school;
    this.major = major;
  }
}

const kk = new Student("Kyaw kyaw", "2003-03-15", "MMS IT", "SWD");
console.log(kk);
// console.log(kk.getAge());

class BankAccount extends Person {
  #balance = 0;

  log(message) {
    console.log(message);
  }

  //getter,setter

  checkBalance() {
    this.log("checking account balance");
    return this.#balance;
  }

  deposit(amount) {
    this.log("deposit " + amount + " to account");

    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.log("withdraw " + amount + " to account");

      this.#balance -= amount;
    } else {
      console.log("Not enough balance");
    }
  }

  constructor(name, bd) {
    super(name, bd);
  }
}

const ba = new BankAccount("hhz", "2003-03-15");

// console.log(ba.checkBalance());
// ba.deposit(1500);
// ba.deposit(5000);
// ba.deposit(300);

// console.log(ba.checkBalance());

// ba.withdraw(4000);

// console.log(ba.checkBalance());

function sum(x, y) {
  return x + y;
}

// console.log(sum(3,6));
// console.log(sum(3,6));
// console.log(sum(3,6));
// console.log(sum(3,6));

// let total = 0;
// function add(x) {
//   total += x;
//   return total;
// }

// console.log(add(5));
// console.log(add(5));
// console.log(add(5));

const numbers = [4, 2, 5, 3, 2, 7, 1, 4];

// console.log(numbers.map(el => console.log(el)));

const mapper = (arr, callback) => {
  const result = [];

  for (let el of arr) {
    result.push(callback(el));
  }

  return result;
};

const filter = (arr, callback) => {
  const result = [];

  for (let el of arr) {
    if (callback(el)) {
      result.push(el);
    }
  }

  return result;
};

// console.log(filter(numbers, el => el>3));

// console.log(mapper(numbers,(el) => {
//     return el * 2
// }));

const arr = ["a", "b"];

const newArr = [...arr, "c"];

// console.log(arr);
// console.log(newArr);

// arr.push("c")
// arr.push("d")
// arr.push("e")

// arr[2] = "c"
// arr[3] = "d"

// console.log(arr);

const obj = { a: "aaa", b: "bbb" };

const newObj = { ...obj, c: "ccc" };

// obj.c = "ccc"
// obj.d = "ddd"

// console.log(obj);
// console.log(newObj);

// let name = "hein htet zan"
// name[0] = "a"
// console.log(name);

function factorial(n) {
  console.log(n);
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(5));


const btn = document.querySelector("#btn");
console.dir(btn)

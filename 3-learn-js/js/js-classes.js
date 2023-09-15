// const obj = {

//     // properties
//     a : "aaa",
//     b : "bbb",
//     c : "ccc",

//     // methods
//     d(){
//         return "d";
//     },
//     e(){
//         return "e";
//     }
// }

// console.log(obj);

// const st1 = {
//     name : "hhz",
//     phone : "0923423423",
//     township : "bahan",
//     subject : 0
// }

// const st2 = {
//     name : "su su",
//     phone : "095324322",
//     township : "tawme",
//     subject : 1
// }

// const st3 = {
//     name : "kyaw kayw",
//     phone : "095234234",
//     township : "hladen",
//     subject : 0
// }

// Classes & Object

// class Student {
//   name;
//   phone;
//   township;
//   age;

//   introduce() {
//     return `My name is ${this.name} and was born in ${this.birthYear()}`;
//   }

//   birthYear(){
//     return 2023 - this.age;
//   }
// }

// const st1 = new Student(); // instantiate
// st1.name = "hein htet zan";
// st1.phone = "09345345";
// st1.township = "bahan";
// st1.age = 29;
// console.log(st1);
// console.log(st1.introduce());

// const st2 = new Student();
// st2.name = "Su Su";
// st2.phone = "093453435";
// st2.township = "tawme";
// st2.age = 19;
// console.log(st2.introduce());

// const st3 = new Student();
// st3.name = "Kyaw Kyaw";
// st3.phone = "095234234";
// st3.township = "hlaing";
// st3.age = 20;
// console.log(st3.introduce());

// constructor &&  initialization

// class A {

//     constructor(z){
//         console.log("this is A Constructor",z);
//     }

//     x(){
//         return "this is x";
//     }
//     y(){
//         return "this is y";
//     }
// }

// const a = new A("zzz");
// // console.log(a);
// console.log(a.x());
// console.log(a.y());

// class Student {
//   subjects = ["WDF", "SWD", "WAD"];

//   constructor(inputName, inputGender, inputAge, inputTownship, inputSubject) {
//     this.name = inputName;
//     this.gender = inputGender;
//     this.proNoun = this.defineProNoun();
//     this.age = inputAge;
//     this.birthYear = 2023 - inputAge;
//     this.township = inputTownship;
//     this.subject = this.subjects[inputSubject];
//   }

//   defineProNoun() {
//     return this.gender === "male" ? "he" : "she";
//   }

//   introduce() {
//     return `My name is ${this.name} and ${this.proNoun} was born in ${this.birthYear} at ${this.township}`;
//   }
// }

// const st1 = new Student("hein htet zan", "male", 29, "Bahan", 0);
// console.log(st1);

// const st2 = new Student("Su Su", "female", 18, "tawme", 1);
// console.log(st2);

// const st3 = new Student("Kyaw Kyaw", "male", 19, "hlaing", 1);
// console.log(st3);

// static properties & methods

// class A {
//     static x = "xxx";
//     y = "yyy";

//     static z(){
//         return "method z";
//     }
// }

// // const a = new A;
// // console.log(a.x);
// // console.log(a.y);
// // console.log(a.z());

// console.log(A.x);
// console.log(A.z());

// access modifier (public,private #) & properties, methods

// class A {
//   x = "xxx";
//   #y = "yyy";

//   #z() {
//     return "method z";
//   }

//   b(){
//     return this.#y + " b method";
//   }
// }

// const a = new A;
// console.log(a);
// // console.log(a.#y);
// // console.log(a.z());
// console.log(a.b());

// class A {
//   x = "xxx";
//   y = "yyy"
// }

// class B extends A {
//   z = "zzz";
// }

// const b = new B;
// console.log(b);

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  eat() {
    return `${this.name} can eat`;
  }

  sleep() {
    return `${this.name} can sleep`;
  }
}

class Student extends Person {
  constructor(name, gender, subject) {
    super(name, gender);
    this.subject = subject;
  }

  learn() {
    return `${this.name} can learn ${this.subject}`;
  }
}

class Monitor extends Student {
  constructor(name, gender, subject, room) {
    super(name, gender, subject);
    this.room = room;
  }

  guard() {
    return `${this.name} can guard students from ${this.room}`;
  }
}

// const m = new Monitor("Su Su","female","Web Development","A");
// console.log(m);

// const s = new Student("kyaw kyaw","male","Web Development");
// console.log(s.name);
// console.log(s.gender);
// console.log(s.eat());
// console.log(s.learn());

// const me = new Person("hein htet zan","male");
// console.log(me);

// getter & setter

class BankAccount {
  //getter, setter

  // getBalance(){
  //   return this.#balance;
  // }

  // setBalance(amount){
  //   this.#balance = amount;
  // }

  #balance = 0;
  transition = [];
  transitionIndex = 0;

  deposit(amount) {
    this.#balance += amount;
    this.transition[this.transitionIndex++] = {
      amount,
      type: "deposit",
    };
  }

  checkBalance() {
    return this.#balance;
  }

  withdraw(amount) {
    if (amount < this.#balance) {
      this.#balance -= amount;
      this.transition[this.transitionIndex++] = {
        amount,
        type: "withdraw",
      };
    } else {
      console.log("Not enough for withdraw",amount);
    }
  }

  constructor(name) {
    this.name = name;
  }
}

const myBankAccount = new BankAccount("hein htet zan", 100);

myBankAccount.deposit(100);
myBankAccount.deposit(20);
myBankAccount.deposit(50);

myBankAccount.withdraw(30);

console.log(myBankAccount.checkBalance());
console.table(myBankAccount.transition);

// myBankAccount.balance = 1000;//overwrite
// console.log(myBankAccount.#balance);//access
// myBankAccount.setBalance(100);
// console.log(myBankAccount.getBalance());

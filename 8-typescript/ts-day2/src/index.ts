// interface Person {
//   name?: string;
//   gender?: string;
// }

// const shin: Person = {};

// const terry: Required<Person> = {
//   name: "TERRY",
//   gender: "male",
// };

// console.log(terry);

// const Person: Record<number | string, number | string | boolean> = {
//   name: "Terry",
//   age: 20,
//   gender: "male",
//   boolean: false,
//   2: "Hello",
// };

interface Person {
  name: string;
  age: number;
  gender: string;
}

const shin: Readonly<Person> = {
  name: "Shin",
  age: 20,
  gender: "male",
};

shin.name = "Terry";

const terry: Omit<Person, "age"> = {
  name: "Terry",
  gender: "male",
};

const One: Pick<Person, "age"> = {
  age: 12,
};

/* 
Partial :Optional
Required: Required
Record:Defind Key Value
Omit: Remove Type
Pick: specified keys
Readonly:Readonly
*/

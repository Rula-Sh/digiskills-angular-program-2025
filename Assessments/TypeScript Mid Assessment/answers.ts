// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Create a function to return the square of value based on arrow function then use it to find the square of 5 values then print them.
let sqr = (num: number) => {
  return Math.pow(num, 2);
};
for (let i = 1; i <= 5; i++) {
  console.log(sqr(i));
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Create a function to return the name (first, mid and last) of candidate from object or array then use and print the name.
type NameObj = { first: string; mid: string; last: string };
type NameArr = [string, string, string];
type NameType = NameObj | NameArr;

function getFullName(name: NameType): string {
  if (Array.isArray(name)) {
    const [first, mid, last] = name;
    return `${first} ${mid} ${last}`;
  }
  return `${name.first} ${name.mid} ${name.last}`;
}
console.log(getFullName({ first: "John", mid: "Q", last: "Wyne" }));
console.log(getFullName(["Jane", "R", "Doe"]));

// + using array of names objects
type Name = { first: string; mid: string; last: string };
function getFullNames(names: Name[]): string[] {
  return names.map(({ first, mid, last }) => `${first} ${mid} ${last}`);
  // or call the function as is and log the name using:
  // names.forEach(({ first, mid, last }) => {console.log(`${first} ${mid} ${last}`);});
}
const fullNames = getFullNames([
  { first: "1", mid: "1", last: "1" },
  { first: "2", mid: "2", last: "2" },
]);
console.log(fullNames); // ["1 1 1", "2 2 2"]
fullNames.forEach(console.log); // 1 1 1      // 2 2 2

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Create a function to return all values of object and store them into array then use it and print the array
function returnObjAsArr(obj: any) {
  let newArr = [];
  for (let k in obj) {
    newArr.push(obj[k]);
  }
  return newArr;
}
let object = { one: 1, two: "2" };
console.log(returnObjAsArr(object));

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Create a closure function that receive parameter for message then return another function to print the message with user name which passed as parameter for it. => message, []
function closure(message: string) {
  return function (username: string) {
    console.log(`Message for ${username}: ${message}`);
  };
}
closure("your order has been sent")("adam");

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Create a function that receive an array of number then return only the positive numbers the use it and print the result.
function getPositive(nums: number[]): number[] {
  const newNums: number[] = [];
  nums.forEach((num) => {
    if (num > 0) {
      newNums.push(num);
    }
  });
  return newNums;
}
console.log(getPositive([1, -2, 3, -4, 5]));

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6. Create a function that receive an object contains country and city as string then return the name of city or country name if the city is null.
type LocationNames = {
  country: string;
  city?: string | null;
};
function ifLocationIsNull(obj: LocationNames): string {
  return obj.city
    ? `I live in ${obj.city} - ${obj.country}`
    : `I live in ${obj.country}`;
}
const myCity1: LocationNames = { country: "Jordan", city: "Amman" };
const myCity2: LocationNames = { country: "Jordan", city: null };
const myCity3: LocationNames = { country: "Jordan" };
console.log(ifLocationIsNull(myCity1));
console.log(ifLocationIsNull(myCity2));
console.log(ifLocationIsNull(myCity3));

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7. Create a class Person that receive name, age as parameter then create a method called describeMe and return “Hello I’m [name], I am [age] years old!” then create instance then use it.
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // OR using parameter properties (its a shortcut to declare a field and assign it in one place, instead of writing the field + assignment manually)
  // class Person {
  // constructor(private name: string, private age: number) {} // each constructor parameter prefixed with an access modifier (private, public, protected, or readonly) automatically becomes a class field, and its argument is assigned to it (parameters without a modifier stay plain parameters)
  //  ...
  describeMe(): string {
    return `Hello I'm ${this.name}, I am ${this.age} years old!`;
  }
}
const person1 = new Person("Sam", 22);
console.log(person1.describeMe());

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8. Create an abstract class Student that receive an array of marks as number and name and have an abstract method called isPassed which return boolean
abstract class Student {
  // using parameter properties (check line 101)
  constructor(
    public marks: number[],
    public name: string,
  ) {}
  abstract isPassed(): boolean;
}
